import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="container-lg-markdown my-5">
      <section className="main-info container content-section my-5">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center mb-3">
            <img
              alt="agnia"
              className="rounded-pill d-flex m-auto main-info_img"
            />
          </div>
          <div className="col-md-9 bordered p-2 mb-3">
            <h2 className="h2-heading mb-1">Info</h2>
            <p className="main-info_p">
              <b>E-mail</b>
              <a href="mailto:agniastar@outlook.com">agniastar@outlook.com</a>
              <br />
              <b>Phone</b>
              <a href="tel:+48500711782">+48-500-711-782 </a>&nbsp;
              <a href="tel:+375293194896">+375-29-319-48-96 </a> <br />
              <b>Linkedin</b>
              <a href="https://www.linkedin.com/in/agnia-starovoitava-392263169/">
                Link
              </a>
              <br />
              <b>English level</b>
              Upper-intermediate
              <br />
              <br />
            </p>

            <h2 className="h2-heading mb-1">Summary</h2>
            <p>
              I am a Fullstack (.NET + React) developer having 3 years of
              commercial development experience, detailed in my resume. This
              experience includes API and website creation, database and cloud
              (AWS/Azure) experience.
            </p>
            <p>
              I am a .NET developer having 3+ years of commercial development
              experience. This experience includes API and website creation,
              database experience. Skilled in ASP.NET MVC, ASP.NET Core,
              client-side web development with React, and AWS/Azure
              technologies. Developed the Waiver and Admin UI portal, APIs,
              Waiver's crawlers for BCD Travel, the Web data portal, Download
              tool and CLI for John Hopkins Institute with Microsoft, automated
              lease accounting system, CRM, web application for drawing up
              requests for goods labeling services, online tobacco shop. Good
              team player, who has high responsibility level. Can be
              self-dependent, but also have experience of supervising others.
              Very collaborative and innovative. Confident and patient worker
              with a positive attitude Can work overtime to meet deadlines.
              Eager to learn new skills and techniques to improve my efficiency
              at the workplace.
            </p>
            <p>
              Good team player, who has high responsibility level. Can be
              self-dependent, but also have experience of supervising others.
            </p>
          </div>
        </div>
      </section>
      <main>
        <section className="content-section skills-section my-5">
          <h2 className="h2-heading">Skills</h2>
          <div className="row p-4 m-3 justify-content-around">
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-1">
                <span className="services-icons">
                  <i className="material-icons md-48">settings_remote</i>
                </span>
                <div className="services-desc">
                  <h3>Server side</h3>
                  <p>ASP.NET MVC, ASP.NET. Core. EF6, EF Core.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-2">
                <span className="services-icons">
                  <i className="material-icons">http</i>
                </span>
                <div className="services-desc">
                  <h3>Client side</h3>
                  <p>
                    React, HTML, CSS, jQuery, AJAX, Bootstrap, Semantic UI,
                    Material UI.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-3">
                <span className="services-icons">
                  <i className="material-icons">language</i>
                </span>
                <div className="services-desc">
                  <h3>Languages</h3>
                  <p>C#, TS, JS.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-4">
                <span className="services-icons">
                  <i className="material-icons">perm_data_setting</i>
                </span>
                <div className="services-desc">
                  <h3>Database</h3>
                  <p>
                    MS SQL, MySQL, PostgreSQL, AWS DynamoDB, Azure TS, SQLite.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-5">
                <span className="services-icons">
                  <i className="material-icons">work_outline</i>
                </span>
                <div className="services-desc">
                  <h3>Testing</h3>
                  <p>xUnit, Jest, Moq, AutoFixture.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-6">
                <span className="services-icons">
                  <i className="material-icons">settings</i>
                </span>
                <div className="services-desc">
                  <h3>Other</h3>
                  <p>
                    AWS, Azure, MS Reporting Services, DevExpress, Reveal.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="content-section my-5">
      <h2 className="h2-heading">Projects</h2>
      <div className="block-code-picture">
        <div className="row mx-0 py-md-5 py-xs-1">
          <div className="col-12 text-center block-code-picture-text">
            <p>
              <a href="#">Here will be link to presentation</a>
            </p>
          </div>
        </div>
      </div>
    </section>  */}

        <section className="content-section my-5">
          <h2 className="h2-heading">Experience</h2>
          <div className="col-md-12">
            <div className="timeline-centered">
              <article className="timeline-entry">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-1 m-auto">
                    <i className="material-icons custom-icon">
                      check_circle_outline
                    </i>
                  </div>

                  <div className="timeline-label">
                    <h3>
                      QA Engineer
                      <span className="grey-span">June 2018 - Nov 2018</span>
                    </h3>
                    <p>Caspel LLC</p>
                  </div>
                </div>
              </article>
              <article className="timeline-entry">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-2">
                    <i className="material-icons custom-icon">
                      check_circle_outline
                    </i>
                  </div>
                  <div className="timeline-label">
                    <h3>
                      ASP.NET Developer
                      <span className="grey-span">Nov 2018 - October 2020</span>
                    </h3>
                    <p>Caspel LLC</p>
                    <strong>Responsibilities included:</strong>
                    <ul>
                      <li>bug fixes;</li>
                      <li>adding new functional modules;</li>
                      <li>
                        changing business logic in accordance with customer
                        requirements;
                      </li>
                      <li>creation of new web applications.</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="timeline-entry">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-2">
                    <i className="material-icons custom-icon">
                      check_circle_outline
                    </i>
                  </div>
                  <div className="timeline-label">
                    <h3>
                      Fullstack Developer
                      <span className="grey-span">October 2020 - Present</span>
                    </h3>
                    <p>Epam Systems</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section my-5">
          <h2 className="h2-heading">Education</h2>
          <div className="block-education-orange">
            <h3>
              Secondary special education
              <span className="grey-span">2015 - 2019</span>
            </h3>
            <p>BSUIR Minsk College of Radio Engineering</p>
          </div>
          <div className="block-education-orange">
            <h3>
              Higher incomplete education (extramural)
              <span className="grey-span">2019 - 2022</span>
            </h3>
            <p>
              Belarusian State University of Informatics and Radioelectronics
            </p>
          </div>
          <p>
            <em>Specialty</em>: Information Technology Software
          </p>
        </section>

        <section className="content-section my-5">
          <h2 className="h2-heading">English</h2>
          <p>
            My English level is upper-intermediate (B2). I finished courses
            called “English Papa”. Also, while studying at college, I separately
            studied technical terms in English in the subject “Professional
            Vocabulary”. I have experience of communicating with the customer in
            English
          </p>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
