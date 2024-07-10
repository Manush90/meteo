import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function CityCards() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    loadCityData();
  });

  const loadCityData = async () => {
    const cities = ["Roma, IT", "Firenze,", "Napoli"];
    const cityWeatherData = [];
    for (const city of cities) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f217670adb3258e400608474ed0cec4`
        );
        if (!response.ok) {
          throw new Error(`Errore durante il recupero dei dati per ${city}`);
        }
        const data = await response.json();
        const translatedData = translateWeatherData(data);
        cityWeatherData.push(translatedData);
      } catch (error) {
        console.error(error);
      }
    }
    setCityData(cityWeatherData);
  };

  const translateWeatherData = (data) => {
    return {
      name: data.name,
      description: translateWeatherDescription(data.weather[0].description),
      temperature: kelvinToCelsius(data.main.temp),
      minTemperature: kelvinToCelsius(data.main.temp_min),
      maxTemperature: kelvinToCelsius(data.main.temp_max),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  };

  const translateWeatherDescription = (description) => {
    switch (description) {
      case "clear sky":
        return "cielo sereno";
      case "few clouds":
        return "pochi nuvoloso";
      case "scattered clouds":
        return "nuvole sparse";
      case "broken clouds":
        return "nuvoloso";
      case "shower rain":
        return "pioggia a singhiozzo";
      case "rain":
        return "pioggia";
      case "thunderstorm":
        return "temporale";
      case "snow":
        return "neve";
      case "mist":
        return "nebbia";
      default:
        return description;
    }
  };

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(2);
  };

  return (
    <Container className="mt-4 text-center">
      <h2>Città Principali</h2>
      <div className="row">
        {cityData.map((city, index) => (
          <div key={index} className=" col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={getImageUrl(city.name)} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>
                  Descrizione: {city.description}
                  <br />
                  Temperatura: {city.temperature} °C
                  <br />
                  Min Temp: {city.minTemperature} °C
                  <br />
                  Max Temp: {city.maxTemperature} °C
                  <br />
                  Pressione: {city.pressure} hPa
                  <br />
                  Umidità: {city.humidity}%
                  <br />
                  Velocità del Vento: {city.windSpeed} m/s
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

function getImageUrl(cityName) {
  switch (cityName) {
    case "Rome":
      return "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/roma-cosa-vedere-cosa-fare-1080x721.jpg?v=1687618444";
    case "Florence":
      return "https://tourismmedia.italia.it/is/image/mitur/20210401173629-firenze-toscana-gettyimages-1145040590?wid=1600&hei=900&fit=constrain,1&fmt=webp";
    case "Naples":
      return "https://www.ilmioviaggioinbasilicata.it/wp-content/uploads/2023/12/cosa-vedere-a-napoli.jpg";
    default:
      return "";
  }
}

export default CityCards;
