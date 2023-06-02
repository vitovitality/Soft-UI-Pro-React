import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image"
          />
          <div className="footer-social-bar">
            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="footer-icon2">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="footer-icon4">
              <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
            </svg>
          </div>
          <span>Copyright © 2023</span>
          <span className="footer-text01 Large">Sichere Bezahlung</span>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="footer-image1"
          />
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <div className="footer-container4">
              <span className="footer-text02 Large">Städte</span>
              <span className="footer-text03 Large">Speed Dating Augsburg</span>
              <span className="footer-text04 Large">Speed Dating Berlin</span>
              <span className="footer-text05 Large">Speed Dating Bremen</span>
              <span className="footer-text06 Large">Speed Dating Dortmund</span>
              <span className="footer-text07 Large">Speed Dating Dresden</span>
              <span className="footer-text08 Large">
                Speed Dating Düsseldorf
              </span>
              <span className="footer-text09 Large">Speed Dating Essen</span>
            </div>
            <div className="footer-container5">
              <span className="footer-text10 Large">
                Speed Dating Frankfurt am Main
              </span>
              <span className="footer-text11 Large">Speed Dating Hamburg</span>
              <span className="footer-text12 Large">Speed Dating Hannover</span>
              <span className="footer-text13 Large">
                Speed Dating Karlsruhe
              </span>
              <span className="footer-text14 Large">Speed Dating Köln</span>
              <span className="footer-text15 Large">Speed Dating Leipzig</span>
              <span className="footer-text16">
                <span className="Large footer-text17">
                  Speed Dating Mannheim
                </span>
                <br></br>
              </span>
            </div>
            <div className="footer-container6">
              <span className="footer-text19 Large">Speed Dating München</span>
              <span className="footer-text20 Large">Speed Dating Münster</span>
              <span className="footer-text21 Large">Speed Dating Nürnberg</span>
              <span className="footer-text22 Large">Speed Dating Rostock</span>
              <span className="footer-text23 Large">
                Speed Dating Stuttgart
              </span>
              <span className="footer-text24 Large">Speed Dating Wien</span>
              <span className="footer-text25">
                <span className="Large footer-text26">Speed Dating Zürich</span>
                <br></br>
              </span>
            </div>
            <div className="footer-container7">
              <span className="footer-text28 Large">Seiten</span>
              <span className="footer-text29 Large">Home</span>
              <span className="footer-text30 Large">Login</span>
              <span className="footer-text31 Large">Erfahrungsberichte</span>
              <span className="footer-text32 Large">Erfolgsgeschichten</span>
              <span className="footer-text33 Large">Locations</span>
              <span className="footer-text34 Large">Ratgeber</span>
              <span className="footer-text35 Large">Jobs</span>
            </div>
            <div className="footer-container8">
              <span className="footer-text36 Large">Hilfe</span>
              <span className="footer-text37 Large">FAQ</span>
              <span className="footer-text38 Large">
                Ablauf eines Speed Datings
              </span>
              <span className="footer-text39 Large">Kontakt</span>
              <span className="footer-text40 Large">Rechtliches</span>
              <span className="footer-text41 Large">Impressum</span>
              <span className="footer-text42 Large">Datenschutz</span>
              <span className="footer-text43 Large">AGB</span>
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/waves-white.svg" className="footer-image2" />
    </footer>
  )
}

Footer.defaultProps = {
  image_src: '/dateyork_logo_1800x360px-200h.png',
  image_src1: 'f3fb3503-fa1f-48dc-a5da-de6fcbfb2003',
  image_src2: '/DY/mollie_payment_methods-200h.png',
  image_alt: 'image',
  image_alt2: 'image',
  image_alt1: 'image',
}

Footer.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Footer
