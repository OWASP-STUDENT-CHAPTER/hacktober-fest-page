import React from "react";
import "./landing.css";
import "./particles.css";
import "animate.css";
function Landing() {
  return (
    <>
      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <img
          className="animate__animated animate__fadeInUp"
          src={require("./logo.png")}
          style={{ maxHeight: "500px", maxWidth: "500px" }}
        ></img>
        <div className="heading animate__animated animate__fadeInUp"> ✖ </div>
        <div className="box1 animate__animated animate__fadeInUp">
          <img
            src={require("../footer/owasp.png")}
            className="landing-logo"
            style={{ maxHeight: "500px", maxWidth: "500px", zIndex: "-100" }}
          ></img>
        </div>
        <a
          target={"_blank"}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdl2q97RbIM5pQhcORC4wEb9R2KuvQR716u563l4kWv2B9Oqg/viewform"
          className="btn-special animate__animated animate__fadeInUp"
          style={{
            textDecoration: "none",
            zIndex: "1000",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          REGISTER FOR RECRUITMENT
        </a>
      </div>
    </>
  );
}
export default Landing;
