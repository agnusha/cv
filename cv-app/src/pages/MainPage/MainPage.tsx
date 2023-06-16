import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="container-lg-markdown my-5">
      <section className="main-info container content-section my-1">
        <div className="row pt-3">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-3">
                <div className="d-flex align-items-center mb-3">
                  <img
                    alt="agnia"
                    className="rounded-pill d-flex m-auto main-info_img"
                  />
                </div>
                <p className="main-info_p">
                  <b>Email</b>
                  <a href="mailto:agniastar@outlook.com">
                    agniastar@outlook.com
                  </a>
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
                  B2
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-md-8">
                <div className="p-2 mb-1">
                  <h2 className="h2-heading my-3">Summary</h2>
                    Results-driven Fullstack Developer with over 5 years of commercial development experience.
                    Skilled in .NET, Node.js, React, and AWS/Azure technologies.
                  <p>
                    Proven track record of creating robust APIs, dynamic websites, and leveraging cloud services.
                    Experienced in collaborating with cross-functional teams to deliver innovative solutions.
                    Continuously seeking opportunities to learn and enhance efficiency in the workplace.
                    A responsible team player with a strong sense of accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="content-section skills-section my-2">
          <h2 className="h2-heading">Skills</h2>
          <div className="row p-4 m-3 justify-content-around">
            <div className="col-md-6 col-lg-4 text-center">
              <div className="services color-1">
                <span className="services-icons">
                  <i className="material-icons md-48">settings_remote</i>
                </span>
                <div className="services-desc">
                  <h3>Server side</h3>
                  <p>ASP.NET, Node.js.</p>
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
                    MS SQL, MySQL, PostgreSQL, DynamoDB, SQLite.
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

        <section className="content-section my-2">
          <h2 className="h2-heading">Roles and Responsibilities</h2>
          <div className="block-roles-blue block-bordered">
            <h3>
              Key developer on BCDT-API
              <span className="grey-span">Feb-2021 - Till Now</span>
            </h3>
            <div>
              <b>Customer:</b> BCD Travel
            </div>
            <div>
              <b>Project:</b> BCD Travel AWS BCD API to improve travel data
              ingest and introduce API as a product.
            </div>
            <div>
              <b>Technologies:</b> .NET Core, Node.js, React, Typescript, AWSSDK and
              other official Amazon libraries, xunit, jest, Moq, AutoFixture,
              StyleCop.Analyzers, Serilog.
            </div>
            <div>
              <b>Database:</b> AWS DynamoDB, PostgreSQL, MongoDB.
            </div>
            <div>
              <div>
                <b>Responsibilities:</b> Implement features for 3 different
                streams: Waiver, Admin UI, Flight Alert.
              </div>
              <div>
                Tasks include work with:
                <ol>
                  <li>
                    React+TS applications for Admin UI portal and Waiver portal;
                  </li>
                  <li>C# and Node.js APIs on AWS lambdas;</li>
                  <li>
                    React+TS applications for Admin UI portal and Waiver portal;
                  </li>
                  <li>
                    Different microservices for Flight Alert, which use SQN,
                    SQS, etc;
                  </li>
                  <li>TS Crawlers on AWS lambdas.</li>
                </ol>
                Also use AWS services like ElasticSearch, Cognito for
                authorization, S3 for saving UI attachments, Amplify library for
                UI projects, IAM, CloudWatch, Systems Manager.
              </div>
            </div>
          </div>
          <div className="block-roles-blue block-bordered">
            <h3>
              Developer on MSC-ALS
              <span className="grey-span">Oct-2020 - Jan-2021</span>
            </h3>
            <div>
              <b>Customer:</b> Microsoft Corp
            </div>
            <div>
              <b>Project:</b> The goal of the project is to provide search and
              access to data on the decoded human genome. The project has three
              main components: Web data portal - search by metadata and work
              with users, Admin portal - configuration and administration,
              Download tool - cross platform solution for working with
              downloading large amounts of data, considering the specifics of
              working with the human genome.
            </div>
            <div>
              <b>Technologies:</b> .NET Core, React, Typescript, Azure Cognitive
              Search Azure App Service Azure Functions Azure B2C Azure Service
              Bus Azure AppInsights .Net Core Blazor React JS Electron (a
              chromium-embedded framework that allows you to run a desktop
              application using Frontend approaches and principles).
            </div>
            <div>
              <b>Database:</b> Sqlite, Azure Storage Account.
            </div>
            <div>
              <div>
                <b>Responsibilities:</b>
                <ol>
                  <li>Implementation of REST API for Web data portal;</li>
                  <li>
                    Developing the authorization on Azure B2C with authorization
                    code flow;
                  </li>
                  <li>
                    Developing the solutions for the Download tool and CLI
                    application according to business requirements.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <p>
            <em>Other projects</em>: automated lease accounting system, CRM, web
            application for drawing up requests for goods labeling services,
            online tobacco shop.
          </p>
        </section>

        <section className="content-section my-2">
          <h2 className="h2-heading">Experience</h2>
          <div className="col-md-12">
            <div className="timeline-centered">
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
                      <span className="grey-span">October 2020 - Till Now</span>
                    </h3>
                    <p>Epam Systems</p>
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
            </div>
          </div>
        </section>

        <section className="content-section my-5">
          <h2 className="h2-heading">Education</h2>
          <div className="block-education block-bordered">
            <h3>
              Secondary special education
              <span className="grey-span">2015 - 2019</span>
            </h3>
            <p>BSUIR Minsk College of Radio Engineering</p>
          </div>
          <div className="block-education block-bordered">
            <h3>
              Higher education
              <span className="grey-span">2019 - 2023</span>
            </h3>
            <p>
              Belarusian State University of Informatics and Radioelectronics
            </p>
          </div>
          <p>
            <em>Specialty</em>: Information Technology Software
          </p>
        </section>

      </main>
    </div>
  );
};

export default MainPage;
