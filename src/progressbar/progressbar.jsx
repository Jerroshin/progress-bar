import React, { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./css/progress.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";
import { BiCheck } from "react-icons/bi";

const MultiStepProgressBar = (props) => {
  var stepPercentage = 0;
  const [currentStep, setCurrentStep] = useState(2);

  if (currentStep === 1) {
    stepPercentage = 0;
  } else if (currentStep === 2) {
    stepPercentage = 34;
  } else if (currentStep === 3) {
    stepPercentage = 67;
  } else if (currentStep === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  const NextBtn = (params) => {
    setCurrentStep(currentStep + 1);
  };
  const PrevBtn = (params) => {
    setCurrentStep(currentStep - 1);
  };
  const ResetBtn = (params) => {
    setCurrentStep(1);
  };

  return (
    <>
      <section className="sample">
        <Container>
          <Row>
            <Col xxl={12}>
              <h1 className="text-center">Progressbar</h1>
              <ProgressBar percent={stepPercentage} direction="vertical">
                <Step>
                  {({ accomplished, index }) => (
                    <div
                      className={`indexedStep ${
                        accomplished ? "accomplished" : null
                      } ${currentStep === 1 ? "animation" : null}`}
                    >
                      {accomplished && currentStep > index + 1 ? (
                        <BiCheck />
                      ) : (
                        <GoDotFill />
                      )}

                      <span>Step {index + 1}</span>
                    </div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div
                      className={`indexedStep ${
                        accomplished ? "accomplished" : null
                      } ${currentStep === 2 ? "animation" : null}`}
                    >
                      {accomplished && currentStep > index + 1 ? (
                        <BiCheck />
                      ) : (
                        <GoDotFill />
                      )}
                      <span>Step {index + 1}</span>
                    </div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div
                      className={`indexedStep ${
                        accomplished ? "accomplished" : null
                      } ${currentStep === 3 ? "animation" : null}`}
                    >
                      {accomplished && currentStep > index + 1 ? (
                        <BiCheck />
                      ) : (
                        <GoDotFill />
                      )}
                      <span>Step {index + 1}</span>
                    </div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div
                      className={`indexedStep ${
                        accomplished ? "accomplished" : null
                      } ${currentStep === 4 ? "animation" : null}`}
                    >
                      {accomplished && currentStep > index + 1 ? (
                        <BiCheck />
                      ) : (
                        <GoDotFill />
                      )}
                      <span>Step {index + 1}</span>
                    </div>
                  )}
                </Step>
              </ProgressBar>
            </Col>
            <Col xxl={12}>
              <div className="step-btn">
                <Button
                  className="float-left"
                  disabled={currentStep === 1}
                  onClick={PrevBtn}
                >
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <>
                    <Button className="float-right" onClick={NextBtn}>
                      Next
                    </Button>
                  </>
                ) : (
                  <>
                    {currentStep !== 1 ? (
                      <>
                        <Button className="float-right" onClick={ResetBtn}>
                          Reset
                        </Button>
                      </>
                    ) : null}
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MultiStepProgressBar;
