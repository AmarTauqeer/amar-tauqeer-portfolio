import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-center mt-4">Welcome</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="lead" style={{'textAlign':'justify'}}>
              Welcome to my portfolio site. My name is Amar Tauqeer and I am
              working as a researcher at University of Innsbruck. My research
              area includes semantic web, knowledge graph, ontologies, SPARQL
              etc. Currently, I am working on SamshHit project , where I am
              responsible to create semantic models for contracts and license.
              Traditionally, I am a software developer and had been working for
              many years. I worked in different programming languages such as
              Python, Django, Flask, JavaScript, React, Node, Express and C#. I
              also have experience in different database management systems like
              Oracle 10G, MSSQL server, MySql and MongoDB. For further
              information about me please visit the About page, and for portfolio visit
              Portfolio page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
