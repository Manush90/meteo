const Footer = function () {
  return (
    <footer className="bg-dark mt-4" data-bs-theme="dark">
      <div className="row justify-content-center w-100">
        <div className="col col-6">
          <div className="row">
            <div className="col mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a href="#link" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#link" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a href="#link" alt="footer link">
                      Previsioni
                    </a>
                  </p>

                  <p>
                    <a href="#link" alt="footer link">
                      Note Legali
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a href="#link" alt="footer link">
                      Help Center
                    </a>
                  </p>

                  <p>
                    <a href="#link" alt="footer link">
                      Cookies
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <a href="#link" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#link" alt="footer link">
                      Termini d'uso
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 text-center">
              <button type="button" className="btn btn-sm bg-primary  footer-button rounded-0 mt-3">
                Lavora con Noi
              </button>
            </div>
          </div>
          <div class="row">
            <div className=" text-white text-center col mb-2 mt-2 copyright">
              © 2023-2024 ManuMeteo.it
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
