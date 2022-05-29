/** @format */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Shoot.css";
const Shoot = () => {
  const [text, setText] = useState("");
  const [getme, setget] = useState([])
  
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSearch = (move) => {
    if (text == 1 || text == 2 || text == 3 || text == 4 || text == 5) {
      getme.filter((item)=> item !== move)
    }
 }

  return (
    <div onChange={handleChange}>
      <Container>
        <Row>
          {/* for a fisrt div */}

          <Col>
            <h6 style={{ marginTop: "150px", marginRight: "420px" }}>
              empty div
            </h6>
            <div
              style={{
                border: "2px solid black",
                width: "300px",
                height: "320px",
                // marginTop: "160px",
              }}
            ></div>
          </Col>

          <Col>
            <h6 style={{ marginRight: "700px" }}>5 circles</h6>
            <div onClick={handleSearch}  style={{ paddingRight: "700px" }}>
              <Col>
                <Row>
                  {/* first button */}
                  <Button
                    className="shoot"
                    style={{
                      backgroundColor: "rgb(187, 239, 185)",
                      borderColor: "green",
                    }}
                  >
                    1
                  </Button>
                </Row>
                {/* second button */}
                <Row>
                  <Button
                    className="shoot"
                    style={{
                      backgroundColor: "rgb(239, 214, 192)",
                      borderColor: "rgb(232, 150, 79)",
                    }}
                  >
                    2
                  </Button>
                </Row>
                {/* third button */}
                <Row>
                  <Button
                    className="shoot"
                    style={{
                      backgroundColor: " rgb(73, 29, 176)",
                      borderColor: " rgb(25, 15, 47)",
                    }}
                  >
                    3
                  </Button>
                </Row>
                {/*fourth button */}
                <Row>
                  <Button
                    className="shoot"
                    style={{
                      backgroundColor: " rgb(171, 198, 237)",
                      borderColor: " rgb(21, 50, 89)",
                    }}
                  >
                    4
                  </Button>
                </Row>
                {/* fifth button */}
                <Row>
                  <Button
                    className="shoot"
                    style={{
                      backgroundColor: "rgb(223, 188, 237)",
                      borderColor: " rgb(121, 8, 165)",
                    }}
                  >
                    5
                  </Button>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default Shoot;
