import React from "react";
import Card from "react-bootstrap/Card";
import PublicationLogo from "../images/research_publication_icon.png";
import PublicationIcon from "../images/publication-icon.png";

const Publication = () => {
  return (
    <>
      <div className="container">
        <div className="row w-75">
          <div className="col-sm-2">
            <img
              src={PublicationLogo}
              alt="Book Pile - Stack Of Books Icon@clipartmax.com"
              width="150px"
              height="150px"
            />
          </div>
          <div className="col-sm-2">
            <p className="h4 mt-4">Publication</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* <img
                    src={PublicationIcon}
                    alt="Book Pile - Stack Of Books Icon@clipartmax.com"
                    width="40px"
                    height="40px"                  /> */}
                  
                  Automated GDPR Contract Compliance Verification Using
                  Knowledge Graphs
                </Card.Title>
                <Card.Text>
                  Amar Tauqeer, Anelia Kurteva, Tek Raj Chhetri, Albin Ahmeti,
                  Anna Fensel
                </Card.Text>
                <Card.Link
                  href="https://www.mdpi.com/2078-2489/13/10/447/pdf"
                  target="_blank"
                >
                  PDF
                </Card.Link>
                <Card.Link
                  href="https://doi.org/10.3390/info13100447"
                  target="_blank"
                >
                  DOI
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <Card>
              <Card.Body>
                <Card.Title>
                  <img
                    src={PublicationIcon}
                    alt="Book Pile - Stack Of Books Icon@clipartmax.com"
                    width="40px"
                    height="40px"
                  />
                  Towards Knowledge Graphs Validation Through Weighted Knowledge
                  Sources
                </Card.Title>
                <Card.Text>
                  E Huaman, A Tauqeer, A Fensel Iberoamerican Knowledge Graphs
                  and Semantic Web Conference, 47-60
                </Card.Text>
                <Card.Link
                  href="https://arxiv.org/pdf/2104.12622"
                  target="_blank"
                >
                  PDF
                </Card.Link>
                <Card.Link
                  href="https://link.springer.com/chapter/10.1007/978-3-030-91305-2_4"
                  target="_blank"
                >
                  DOI
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <Card>
              <Card.Body>
                <Card.Title>
                      Data sharing in smashHit: Making consent and contracts
                </Card.Title>
                <Card.Text>Anelia Kurteva, Amar Tauqeer, Anna Fensel</Card.Text>
                <Card.Link
                  href="https://www.trusts-data.eu/wp-content/uploads/2022/06/04_smashHit-Fensel_220603_WSSemanticInteroperability.pdf"
                  target="_blank"
                >
                  PDF
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publication;
