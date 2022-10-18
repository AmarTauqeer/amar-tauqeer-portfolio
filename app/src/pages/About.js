import React from "react";
import Photo from "../images/amar.jpg";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-center mt-4">About</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="lead mt-4">Amar Tauqeer MSc</p>
            <br />
            <p className="lead">Researcher at University of Innsbruck</p>
            <br />
            <p className="lead">Techniker strasse 7 6020 Innsbruck Austria</p>
            <br />
            <p className="lead">amar.tauqeer@sti2.at; amar.tauqeer@gmail.com</p>
            <br />
            <p className="lead">+43 688 6404 0449</p>
            <br />
          </div>
          <div className="col">
            <img src={Photo} className="rounded-circle me-3" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h4 text-center mt-4">Professional Summary</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <p className="lead" style={{ textAlign: "justify" }}>
              Semantic Web, Knowledge Graph, Ontologies, Django, Flask, Node,
              Express, React, MonogoDB, Middleware, JWT, Passport,
              LocalStrategy, Local Storage, JavaScript, Jquery, HTML5, Web
              Programming Skills, E-Commerce, Asp.net MVC, C#, Entity framework,
              SQL Server, SQL server Management Studio, Linq, SAP Crystal
              Reports, Database first approach, Code first approach. To be able
              to work for an encouraging and stable company that will assist me
              in developing,improving, and obtaining the necessary skills in
              order to become the best engineer possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
