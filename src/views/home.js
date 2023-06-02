import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <img
            alt="image"
            src="/dateyork_logo_1800x360px-200h.png"
            className="home-image"
          />
          <div className="home-card">
            <h1 className="home-text">
              <span>Wir bringen </span>
              <span>Menschen zusammen.</span>
            </h1>
            <div className="home-container02">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="home-text003">
                Speed Dating Veranstalter seit 2011
              </span>
            </div>
            <div className="home-container03">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon02">
                <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="home-text004">
                Erfolgsquote liegt bei über 83%
              </span>
            </div>
            <div className="home-container04">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon04">
                <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <span className="home-text005">
                Sichere Bezahlung &amp; Geld-zurück-Garantie
              </span>
            </div>
            <button className="home-button button">Anmelden</button>
          </div>
        </div>
        <div className="home-container05">
          <img
            alt="image"
            src="/DY/tu%CC%88v_gepru%CC%88ft-1500h.jpeg"
            className="home-image01"
          />
        </div>
      </div>
      <section className="home-referenzen">
        <div className="home-banner">
          <p className="home-text006">Bekannt aus:</p>
        </div>
        <div className="home-container06">
          <img alt="image" src="/spiegel-200h.png" className="home-image02" />
          <img alt="image" src="/zdf-200h.png" className="home-image03" />
          <img
            alt="image"
            src="/stuttgarter_zeitung-200h.png"
            className="home-image04"
          />
          <img alt="image" src="/prinz-200h.png" className="home-image05" />
          <img alt="image" src="/pro7-200h.png" className="home-image06" />
          <img alt="image" src="/rtl-200h.png" className="home-image07" />
        </div>
      </section>
      <div className="home-portfolio">
        <h3 className="home-text007">
          Was erwartet dich bei DateYork Speed Dating?
        </h3>
        <span className="home-text008">
          Bei DateYork Speed Dating hast du bis zu 10 einzigartige Dates
          innerhalb 90 Minuten an einem Abend.
        </span>
        <div className="home-stats">
          <div className="home-stat">
            <div className="home-container07 button ButtonSmall">
              <img
                alt="image"
                src="/DY/dating_wei%C3%9F-200h.png"
                className="home-image08"
              />
            </div>
            <h3 className="home-text009">Bis zu 10 Dates an einem Abend</h3>
            <span className="home-text010">
              <span>Innerhalb weniger Minuten</span>
              <br></br>
              <span> lernst du bis zu 10 Singles</span>
              <br></br>
              <span>
                {' '}
                aus deiner Stadt bei
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>unserem Speed Dating kennen.</span>
            </span>
          </div>
          <div className="home-stat01">
            <div className="home-container08 button ButtonSmall">
              <img
                alt="image"
                src="/DY/microphone_wei%C3%9F-200h.png"
                className="home-image09"
              />
            </div>
            <h3 className="home-text018">Moderation durch Love Angel</h3>
            <span className="home-text019">
              <span>Unser Love Angel erklärt</span>
              <br></br>
              <span> euch den Ablauf, moderiert</span>
              <br></br>
              <span> das Speed Dating und</span>
              <br></br>
              <span>steht euch für Fragen zur Verfügung.</span>
            </span>
          </div>
          <div className="home-stat02">
            <div className="home-container09 button ButtonSmall">
              <img
                alt="image"
                src="/DY/chat_wei%C3%9F-200h.png"
                className="home-image10"
              />
            </div>
            <h3 className="home-text027">Einfache Gespräche</h3>
            <span className="home-text028">
              <span>Lerne ganz einfach in</span>
              <br></br>
              <span>einem lockeren Gespräch</span>
              <br></br>
              <span>viele neue Singles</span>
              <br></br>
              <span>aus deiner Stadt kennen.</span>
              <br></br>
            </span>
          </div>
          <div className="home-stat03">
            <div className="home-container10 button ButtonSmall">
              <img
                alt="image"
                src="/DY/mobile_wei%C3%9F-200h.png"
                className="home-image11"
              />
            </div>
            <h3 className="home-text037">Online Matching</h3>
            <span className="home-text038">
              <span>Nach dem Speed Dating</span>
              <br></br>
              <span>kannst du ganz einfach und</span>
              <br></br>
              <span> bequem online dein Matching</span>
              <br></br>
              <span> vornehmen, um die Kontaktdaten</span>
              <br></br>
              <span> deiner Matches zu erhalten.</span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-steps">
        <h1 className="home-text048">
          Schritte, um deinen Traumpartner zu finden
        </h1>
        <img
          alt="image"
          src="/DY/trennlinie_schwarz-200h.png"
          className="home-image12"
        />
        <div className="home-container11">
          <div className="home-container12">
            <div className="home-step">
              <h1 className="home-text049">Anmeldung</h1>
              <span className="home-text050">
                <span>
                  Melde dich zu deinem gewünschten
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Termin in deiner Altersklasse und deiner Stadt an.</span>
              </span>
            </div>
            <div className="home-container13">
              <div className="home-container14">
                <div className="home-step01">
                  <div className="home-container15 button ButtonSmall">
                    <svg viewBox="0 0 1024 1024" className="home-icon06">
                      <path d="M640 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM256 426h128v86h-128v128h-86v-128h-128v-86h128v-128h86v128zM640 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/DY/linie_gepunktet-200w.png"
                className="home-image13"
              />
            </div>
          </div>
          <div className="home-container16">
            <div className="home-step02"></div>
            <div className="home-step03"></div>
          </div>
        </div>
        <div className="home-container17">
          <div className="home-container18">
            <div className="home-step04"></div>
            <div className="home-step05">
              <img
                alt="image"
                src="/DY/speed_dating-300h.jpg"
                className="home-image14"
              />
            </div>
          </div>
          <div className="home-container19">
            <div className="home-container20">
              <div className="home-container21">
                <div className="home-container22">
                  <div className="home-step06">
                    <div className="home-container23">
                      <div className="home-container24 button ButtonSmall">
                        <img
                          alt="image"
                          src="/DY/dating%20%5B1%5D-200h.png"
                          className="home-image15"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/DY/linie_gepunktet-200w.png"
                className="home-image16"
              />
              <img
                alt="image"
                src="/DY/linie_gepunktet-200w.png"
                className="home-image17"
              />
              <img
                alt="image"
                src="/DY/linie_gepunktet-200w.png"
                className="home-image18"
              />
            </div>
            <div className="home-step07">
              <h1 className="home-text054">Speed Dating Veranstaltung</h1>
              <span className="home-text055">
                <span>Mit der Bestätigung deines Termins</span>
                <br></br>
                <span>erhältst du alle weiteren relevanten Informationen</span>
                <br></br>
                <span> zu deiner Speed Dating Veranstaltung.</span>
                <br></br>
                <span> Du hast beim Speed Dating die Möglichkeit</span>
                <br></br>
                <span>
                  {' '}
                  alle Teilnehmerinnen und Teilnehmer näher kennenzulernen.
                </span>
                <br></br>
                <span> Deine Gespräche aus dem Speed Dating</span>
                <br></br>
                <span>
                  {' '}
                  kannst du nach dem „Matching“ anschließend vertiefen.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-container25">
          <div className="home-container26">
            <div className="home-step08">
              <h1 className="home-text069">
                <span>Finde deinen</span>
                <br></br>
                <span>Traumpartner</span>
              </h1>
              <span className="home-text073">
                <span>Wähle die Favoriten deiner Gesprächspartner aus.</span>
                <br></br>
                <span>Gibt es eine Übereinstimmung &quot;Match&quot;</span>
                <br></br>
                <span> werden automatisch die jeweils freigegebenen</span>
                <br></br>
                <span> Kontaktdaten versendet.</span>
              </span>
            </div>
            <div className="home-step09">
              <div className="home-container27 button ButtonSmall">
                <img
                  alt="image"
                  src="/DY/couple%20%5B1%5D-200h.png"
                  className="home-image19"
                />
              </div>
            </div>
          </div>
          <div className="home-container28">
            <div className="home-step10"></div>
            <div className="home-step11"></div>
          </div>
        </div>
      </div>
      <section className="home-container29">
        <div className="home-container30">
          <h1 className="home-text081">Speed Dating Termine</h1>
          <span className="home-text082">
            Wähle deine Stadt, um die geplanten Termine zu sehen
          </span>
        </div>
        <select>
          <option value="Augsburg">Augsburg</option>
          <option value="München">München</option>
          <option value="Hamburg">Hamburg</option>
        </select>
        <img
          alt="image"
          src="/su_u%CC%88bersicht-800w.jpg"
          className="home-image20"
        />
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
            <li data-thq="thq-dropdown" className="home-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text083">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle1"
              >
                <span className="home-text084">Sub-menu Item</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle2"
              >
                <span className="home-text085">Sub-menu Item</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="home-contaier">
        <div className="home-container31">
          <h2 className="home-text086 HeadingTwo">
            Vorteile von DateYork Speed Dating
          </h2>
          <span className="home-text087">
            Wir ermöglichen es dir ganz einfach neue Singles in deiner Stadt
            kennenzulernen und vielleicht auch deinen Traumpartner! 
          </span>
        </div>
        <div className="home-container32">
          <div className="home-container33">
            <div className="home-container34">
              <h1 className="home-text088 HeadingOne">Garantierte Dates!</h1>
              <button className="home-button1 button">Anmelden</button>
            </div>
          </div>
          <div className="home-container35">
            <ListItem
              new_prop="Garantierte Dates"
              description="Melde dich für deine Stadt und deine Altersklasse an und lerne bis zu 10 Singles aus deiner Stadt kennen."
            ></ListItem>
            <ListItem
              title="2. Performance Analyze"
              new_prop="7 Minuten pro Date"
              description="Pro Gesprächspartner hast du 7 Minuten Zeit, um dein Gegenüber kennenzulernen."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              new_prop="Exklusive Locations"
              description="Dein Speed Dating findet nur in ausgewählten Locations mit einer romantischen Atmosphäre statt."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container36">
          <div className="home-container37">
            <ListItem
              title="1. Always in Sync"
              new_prop='"Wie komme ich an"-Test '
              description="Nach dem Speed Dating kannst du online in deinem persönlichen Bereichdie andere Teilnehmer bewerten und erfahren, wie du bei deinem Gegenüber angekommen bist."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              new_prop="Online Matching"
              description="Treffe nach dem Speed Dating online in deinem persönlichen Bereich die Teilnehmer aus, die du wiedersehen willst. Bei einem Match erhaltet ihr gegenseitig eure Kontaktdaten, um unabhängig von uns den Kontakt fortzufüren."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              new_prop="Get-together nach dem Speed Dating"
              description="Nach dem offiziellen Teil des Speed Datings haben die Teilnehmer noch die Möglichkeit, in der Location in größerer oder kleinerer Runde in der Location zu verweilen."
            ></ListItem>
          </div>
          <div className="home-container38">
            <div className="home-container39"></div>
            <div className="home-container40">
              <h1 className="home-text089 HeadingOne">
                Online Matching &amp; Get-together
              </h1>
              <button className="home-button2 button">Anmelden</button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container41">
          <div className="home-container42">
            <h3 className="home-text090 HeadingOne">Ausgezeichneter Service</h3>
            <img
              alt="image"
              src="/DY/tennstrich_herz-200h.png"
              className="home-image21"
            />
            <span className="home-text091">
              <span className="home-text092">
                Immer ein Lächeln und eine Lösung. Du hast uns auf
                verschiedenste Arten kontaktieren.
              </span>
              <br className="home-text093"></br>
              <span className="home-text094">
                Wir beantworten deine Anfrage binnen 24 Stunden.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-container43">
            <div className="home-stats1">
              <div className="home-stat04">
                <div className="home-container44">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M950.857 859.429v-438.857c-12 13.714-25.143 26.286-39.429 37.714-81.714 62.857-164 126.857-243.429 193.143-42.857 36-96 80-155.429 80h-1.143c-59.429 0-112.571-44-155.429-80-79.429-66.286-161.714-130.286-243.429-193.143-14.286-11.429-27.429-24-39.429-37.714v438.857c0 9.714 8.571 18.286 18.286 18.286h841.143c9.714 0 18.286-8.571 18.286-18.286zM950.857 258.857c0-14.286 3.429-39.429-18.286-39.429h-841.143c-9.714 0-18.286 8.571-18.286 18.286 0 65.143 32.571 121.714 84 162.286 76.571 60 153.143 120.571 229.143 181.143 30.286 24.571 85.143 77.143 125.143 77.143h1.143c40 0 94.857-52.571 125.143-77.143 76-60.571 152.571-121.143 229.143-181.143 37.143-29.143 84-92.571 84-141.143zM1024 237.714v621.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
                  </svg>
                </div>
                <span className="home-text096">info@dateyork.de</span>
              </div>
              <div className="home-stat05">
                <div className="home-container45">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                </div>
                <span className="home-text097">+49 40 8817 9815</span>
              </div>
              <div className="home-stat06">
                <div className="home-container46">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
                  </svg>
                </div>
                <span className="home-text098">+49 162 4187255</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials1">
        <div className="home-container47">
          <div className="home-container48">
            <h3 className="home-text099">Unsere Erfolgsgeschichten</h3>
          </div>
          <div className="home-container49"></div>
        </div>
      </section>
      <section className="home-testimonials2">
        <div className="home-container50">
          <div className="home-container51">
            <h3 className="home-text100">Ausgezeichneter Service</h3>
            <img
              alt="image"
              src="/DY/tennstrich_herz-200h.png"
              className="home-image22"
            />
            <span className="home-text101">
              <span className="home-text102">
                Immer ein Lächeln und eine Lösung. Du hast uns auf
                verschiedenste Arten kontaktieren.
              </span>
              <br className="home-text103"></br>
              <span className="home-text104">
                Wir beantworten deine Anfrage binnen 24 Stunden.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-container52">
            <div className="home-stats2">
              <div className="home-stat07">
                <div className="home-container53 ButtonSmall button">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                  </svg>
                </div>
                <span className="home-text106">info@dateyork.de</span>
              </div>
              <div className="home-stat08">
                <div className="home-container54 button ButtonSmall">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                </div>
                <span className="home-text107">+49 40 8817 9815</span>
              </div>
              <div className="home-stat09">
                <div className="home-container55 button ButtonSmall">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
                  </svg>
                </div>
                <span className="home-text108">+49 162 4187255</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
