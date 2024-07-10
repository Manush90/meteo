import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function kelvinToCelsius(tempKelvin) {
  return (tempKelvin - 273.15).toFixed(2);
}

function translateWeatherData(data) {
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
}

function translateWeatherDescription(description) {
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
}

function Body() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6484ca0de4e91a5d0dd82a56d1b2a24e`
      );
      if (!response.ok) {
        throw new Error("Città non trovata. Si prega di riprovare.");
      }
      const data = await response.json();
      setWeatherData(translateWeatherData(data));
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeatherData();
    }
  };

  return (
    <Container
      className="mt-4 d-flex flex-column text-center"
      style={{
        backgroundImage: "",
      }}
    >
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61nuuPxUvaL.png"
          width="80"
          height="80"
          alt="logo"
        ></img>
      </div>
      <h1 className="mb-1">IT Meteo</h1>
      <h3 className="mb-4">Il meteo più preciso del bel paese</h3>
      <div className="row d-flex flex-column ">
        <div className="col">
          <Form className="mb-4 ">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Inserisci il nome della città"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="text-center"
              />
            </Form.Group>
            <Button variant="primary" className="mt-2" onClick={handleSearch}>
              Cerca
            </Button>
          </Form>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {error && <p className="text-danger">{error}</p>}
          {weatherData && (
            <>
              <div className="d-flex ">
                <Card className="heightCard d-flex justify-content-center col-md-6 mb-4 ">
                  <Card.Img
                    className="imgCard"
                    variant="top"
                    src="https://nationalstorage.com.au/wp-content/uploads/2019/10/Brisbane-411x274-c-default.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{weatherData.name}</Card.Title>
                    <Card.Text>
                      Descrizione: {weatherData.description}
                      <br />
                      Temperatura: {weatherData.temperature} °C
                      <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className="d-flex justify-content-center ">
                  <Card className="heightCard">
                    <Card.Img
                      className="imgCard "
                      variant="top"
                      src="https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1710460800&semt=ais"
                    />
                    <Card.Body>
                      <Card.Title>Informazioni Aggiuntive</Card.Title>
                      <Card.Text>
                        Min Temp: {weatherData.minTemperature} °C
                        <br />
                        Max Temp: {weatherData.maxTemperature} °C
                        <br />
                        Umidità: {weatherData.humidity}%
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Body;
