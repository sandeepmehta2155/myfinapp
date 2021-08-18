import { Img } from "./personal-finance";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <>
      <div className="line"></div>
      <h1 className="heading">
        Fin-Quiz
        <span role="img" aria-labelledby="money">
          💸
        </span>
      </h1>
      <h2 className="heroTag">
        {" "}
        Let's explore more on financial knowledge and let you grow financially
      </h2>
      <h3 className="heroTagPara">Want to grow financially ?</h3>
      <Img />
      <Link to="/question">
        <h3
          className="quizRedirect"
          onClick={() => {
            localStorage.removeItem("currentscore");
            localStorage.removeItem("currentquestion");
          }}
        >
          {" "}
          Let's start the Quiz{" "}
          <span role="img" aria-labelledby="moneyBAg">
            💰
          </span>
        </h3>
      </Link>
    </>
  );
};
