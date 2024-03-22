const MyMappe = function () {
  return (
    <div className="d-flex w-100 justify-content-center flex-column">
      <div className="d-flex w-100 justify-content-center ">Mappa solare 12h/24h/48h</div>
      <div className="d-flex justify-content-center">
        <img
          src="https://meteodata.ilmeteo.it/etawww/24032200/ht2m12.png"
          alt="..."
          width="30%"
          height="auto"
        ></img>
        <img
          src="https://www.ilmeteo.it/portale/i.php?m=1e2ec8c74e3d5c952558b1392c9d8fc8"
          alt="..."
          width="30%"
          height="auto"
          className="mx-2"
        ></img>
        <img
          src="https://www.ilmeteo.it/portale/i.php?m=3e01be2f468b2a7d1dc0ba376efc587d"
          alt="..."
          width="30%"
          height="auto"
        ></img>
      </div>
    </div>
  );
};

export default MyMappe;
