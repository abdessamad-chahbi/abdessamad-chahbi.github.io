import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import Button from "../../components/button/Button";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
              {/* Bouton Google Drive */}
              <p style={{ display: "inline-block", marginLeft: "25px" }}>
                <Button
                  text="📂 View All Certificates on Google Drive"
                  newTab={true}
                  href="https://drive.google.com/drive/folders/1gxElsPnI8eSJZ4tS4mKTq0Vp0iVOyfzX?usp=sharing" // Remplace par ton lien Google Drive
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </p>
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
