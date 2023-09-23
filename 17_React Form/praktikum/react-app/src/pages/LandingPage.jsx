/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../assets/bootstrap/bootstrap.min.css";
import styles from "../assets/css/landingPage.module.css";
import img from "../assets/img/img.png";
import {Link} from "react-router-dom";

export default function LandingPage(props) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <a className={`${styles["navbar-brand"]} navbar-brand`} href="#">
              Simple header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <button type="button" className="btn btn-primary">
                      Home
                    </button>
                  </a>
                </li>
                <li>
                  <Link to="create-product"><button type="button" class="btn btn-secondary">Create Product</button></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">FAQs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className={styles.section}>
          <div className={styles["section-box"]}>
            <div className={styles.content}>
              <h1 className={styles.h1}>Better Solutions For Your Business</h1>
              <h2 className={styles.h2}>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div className={styles.button}>
                <button className={styles["button-1"]}>Get Started</button>
                <button className={styles["button-2"]}>Watch Video</button>
              </div>
            </div>
            <img src={img} />
          </div>
        </section>
      </main>
      <footer>
        <div className={styles["footer-1-box"]}>
          <div className={styles["footer-1"]}>
            <h2 className={styles.h2}>Join Our Newsletter</h2>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className={styles["subscribe-box"]}>
              <input className={styles["input-1"]} type="text" />
              <button className={styles["button-1"]}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles["footer-2-box"]}>
          <div className={styles["footer-2"]}>
            <div className={`${styles["content-1"]} ${styles["content"]}`}>
              <h2 className={styles.h2}>ARSHA</h2>
              <p>A108 Adam Street </p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <br />
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className={`${styles["content-2"]} ${styles["content"]}`}>
              <h4>Useful Links</h4>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className={`${styles["content-3"]} ${styles["content"]}`}>
              <h4>Our Services</h4>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className={`${styles["content-4"]} ${styles["content"]}`}>
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className={styles.dots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["footer-3-box"]}>
          <div className={styles["footer-3"]}>
            <p className={styles["text-1"]}>
              © Copyright <strong>Arsha.</strong> All Rights Reserved
            </p>
            <p className={styles["text-2"]}>
              Designed by <span>BootstrapMade</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
