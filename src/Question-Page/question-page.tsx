import * as React from "react";
import { QuestionProvider } from "./question-context";
import { QuestionDB } from "./questiondb";
import { NextButton, PreviousButton, Drops } from "./next-previous-button";
import * as useComponent from "../index";

type ques = {
  currentquestion: number;
};

type score = {
  currentscore: number;
};

export const QuestionComponent = () => {
  const { currentquestion }: ques = JSON.parse(
    localStorage.getItem("currentquestion") as string
  ) || {
    currentquestion: 0
  };

  const [currentQuestion, setCurrentQuestion] = React.useState<number>(
    currentquestion
  );

  const { currentscore }: score = JSON.parse(
    localStorage.getItem("currentscore") as string
  ) || {
    currentscore: 0
  };

  const [score, setScore] = React.useState<number>(currentscore);

  const [popOut, setPopOut] = React.useState<string>("");

  function DisplayNextOrPreviousQuestion(option: string) {
    if (option === "nextQuestion") {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);

      localStorage.setItem(
        "currentquestion",
        JSON.stringify({
          currentquestion: currentQuestion + 1
        })
      );
    }
    if (option === "previousQuestion") {
      setCurrentQuestion((currentQuestion) => currentQuestion - 1);
      localStorage.setItem(
        "currentquestion",
        JSON.stringify({
          currentquestion: currentquestion + 1
        })
      );
    }
  }

  function ClickHandler(option: string) {
    setPopOut("love active");
    if (option === QuestionDB[currentQuestion].answer) {
      setScore((score) => score + 1);
      setPopOut("love active");

      localStorage.setItem(
        "currentscore",
        JSON.stringify({
          currentscore: score + 1
        })
      );
    } else {
      setScore((score: number) => score - 1);
      setPopOut("love");
      localStorage.setItem(
        "currentscore",
        JSON.stringify({
          currentscore: score - 1
        })
      );
    }
  }

  return (
    <>
      {QuestionDB.length > currentQuestion && (
        <>
          <h1> Score : {score}</h1>
          <div className="questionPage">
            <div className="questionAndOptionsBox">
              {/* display cuurent question */}

              <h2 className="question">
                [ {currentQuestion + 1} ]{QuestionDB[currentQuestion]?.question}
              </h2>
              {/* display options for current question */}
              <ul>
                {QuestionDB[currentQuestion]?.options.map(
                  (option: string, index: number) => {
                    return (
                      <li
                        key={index}
                        className="options"
                        onClick={() => {
                          if (!popOut) ClickHandler(option);
                        }}
                      >
                        {option}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            {/* end result response */}
            <div className="responseAfterAttempt">
              {popOut === "love" && (
                <>
                  <h2 className="wrongAnswer">Opps ! You are wrong </h2>{" "}
                  <span style={{ fontWeight: "bold" }}>Learnings : </span>{" "}
                  <span> {QuestionDB[currentQuestion].explaination}</span>
                  <br />
                  <br />
                  <img
                    src={QuestionDB[currentQuestion].src}
                    alt="loading"
                    width="30%"
                    height="35%"
                  />
               </>
              )}
              {popOut === "love active" && (
                <>
                  <h2 className="rightAnswer">
                    Hurray ! you are right
                    <span className={popOut}>
                      <Drops />
                    </span>
                  </h2>
                  <h3>Learnings : </h3>{" "}
                  <p>{QuestionDB[currentQuestion].explaination}</p>
                  <img
                    src={QuestionDB[currentQuestion].src}
                    width="30%"
                    alt="loading"
                  />
                </>
              )}
              <img
                className="demo-bg"
                alt="loading"
                src="https://35rdgt2bulp52oi6nu3m0u5p-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/growing-money-1024x597.jpg"
              />

              <span
                className="previousButton"
                onClick={() => {
                  setPopOut("");
                  DisplayNextOrPreviousQuestion("previousQuestion");
                }}
              >
                <PreviousButton />
              </span>
              <span
                className="nextButton"
                onClick={() => {
                  setPopOut("");
                  DisplayNextOrPreviousQuestion("nextQuestion");
                }}
              >
                <NextButton />
              </span>
            </div>
          </div>
        </>
      )}
      {QuestionDB.length <= currentQuestion && (
        <useComponent.NewsLetter score={{ score }} />
      )}
    </>
  );
};
export const QuestionPage = () => (
  <QuestionProvider value={QuestionDB}>
    <QuestionComponent />
  </QuestionProvider>
);
