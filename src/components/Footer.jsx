const Footer = function () {
  return (
    <footer class="bg-dark mt-4" data-bs-theme="dark">
      <div class="row justify-content-center w-100">
        <div class="col col-6">
          <div class="row">
            <div class="col mb-2">
              <i class="bi bi-facebook footer-icon me-2"></i>
              <i class="bi bi-instagram footer-icon me-2"></i>
              <i class="bi bi-twitter-x footer-icon me-2"></i>
              <i class="bi bi-youtube footer-icon"></i>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div class="col">
              <div class="row">
                <div class="col footer-links">
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
            <div class="col">
              <div class="row">
                <div class="col footer-links">
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
            <div class="col">
              <div class="row">
                <div class="col footer-links">
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
            <div class="col">
              <div class="row">
                <div class="col footer-links">
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
          <div class="row">
            <div class="col mb-2 text-center">
              <button type="button" class="btn btn-sm bg-primary  footer-button rounded-0 mt-3">
                Lavora con Noi
              </button>
            </div>
          </div>
          <div class="row">
            <div class=" text-white text-center col mb-2 mt-2 copyright">
              © 2023-2024 ManuMeteo.it
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
