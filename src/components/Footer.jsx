import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          {/* <!-- Footer Info Column --> */}
          <div className="footer-column footer-info">
            <img
              src="/icons/logo-footer.png"
              alt="Teknolojik Yemekler"
              className="footer-logo"
            />
            <div className="contact-info">
              <div className="contact-item">
                <img
                  src="/icons/icon-1.png"
                  alt="Adres"
                  className="contact-icon"
                />
                <p className="contact-text">
                  341 Londonderry Road, <br />
                  Istanbul Türkiye
                </p>
              </div>
              <div className="contact-item">
                <img
                  src="assets/icons/icon-2.png"
                  alt="E-posta"
                  className="contact-icon"
                />
                <p className="contact-text">aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="contact-item">
                <img
                  src="assets/icons/icon-3.png"
                  alt="Telefon"
                  className="contact-icon"
                />
                <p className="contact-text">+90 216 123 45 67</p>
              </div>
            </div>
          </div>

          {/* <!-- Footer Menu Column --> */}
          <div className="footer-column footer-menu">
            <h2 className="footer-menu-title">Hot Menu</h2>
            <ul className="footer-menu-list">
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>

          {/* <!-- Footer Instagram Column --> */}
          <div className="footer-column footer-instagram">
            <h2 className="footer-instagram-title">Instagram</h2>
            <div className="instagram-grid">
              <img
                src="/footer/li-1.png"
                alt="Instagram Fotoğraf 1"
                className="instagram-image"
              />
              <img
                src="/footer/li-2.png"
                alt="Instagram Fotoğraf 2"
                className="instagram-image"
              />
              <img
                src="/footer/li-3.png"
                alt="Instagram Fotoğraf 3"
                className="instagram-image"
              />
              <img
                src="/footer/li-4.png"
                alt="Instagram Fotoğraf 4"
                className="instagram-image"
              />
              <img
                src="/footer/li-5.png"
                alt="Instagram Fotoğraf 5"
                className="instagram-image"
              />
              <img
                src="/footer/6.png.png"
                alt="Instagram Fotoğraf 6"
                className="instagram-image"
              />
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2023, Teknolojik Yemekler</p>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <img src="/footer/twitter.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
