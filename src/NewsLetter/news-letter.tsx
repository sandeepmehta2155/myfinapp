import { useState } from "react";
import { TreeImg } from "./tree";

export const NewsLetter = ({ score } : any) => {
//   const [name, setName] = useState<string | undefined>();
//   const [age, setAge] = useState<number | undefined>();
//   const [email, setEmail] = useState<string | undefined>();
//   const [gender, setGender] = useState<string>();
  return (
    <>
      {score.score >= 3 && <h1> Hurray! you made it up! </h1>}

      {score.score <= 2 && (
        <h1> Opps! you need to improve your personal finance stuffs</h1>
      )}
      <>
        <h2>
          {" "}
          Hope that we have unlocked some personal financial stuffs in your
          brain{" "}
        </h2>
        <br />
        <span className="score">{score.score}/5</span>
        <svg
          height="10%"
          viewBox="0 0 20 20"
          width="10%"
          style={{ overflow: "visible" }}
        >
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            stroke-width="2"
            r="9"
            stroke="#EBEEF0"
          >
            {" "}
          </circle>{" "}
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            stroke-width="2"
            r="9"
            stroke="#cfee7f"
            stroke-linecap="round"
            style={{
              strokeDashoffset: score.score,
              strokeDasharray: "56.5487"
            }}
          ></circle>
        </svg>
        <h2 className="scoreHeading">score</h2>
        <br />
        <div className="userDetails">
          <span>
            {" "}
            Enter details to subscribe more learnings on stock-market :
          </span>
          <br />
          <br />
          <label>Name : </label>
          <input
            placeholder="first name and last name"
            type="text"
            // onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <label>Age : </label>
          <input
            placeholder="age in years"
            type="number"
            // onChange={(e) => setAge(e.target.valueAsNumber)}
          />{" "}
          <br />
          <label>E-mail : </label>
          <input
            placeholder="email"
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Gender : </label>
          <input
            placeholder="male / female / transgender"
            type="text"
            // onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <button> Submit </button>
          <h2>"Never invest in a business you cannot understand."</h2>
        </div>
        <TreeImg />
        <br />
        <br />
        <h1 className="lastWords">
          {" "}
          "Someone's sitting in the shade today because someone planted a tree a
          long time ago"
        </h1>
      </>
    </>
  );
};
