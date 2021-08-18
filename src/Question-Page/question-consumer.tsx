import * as React from "react";
import { QuestionConsumer } from "./question-context";

export const PostInfo = () => (
  <QuestionConsumer>
    {(appContext) =>
      appContext &&
      appContext.map((Object) => (
        <div>
          question: {Object.question} <br />
          option : {Object.options} <br />
          answer: {Object.answer} <br />
        </div>
      ))
    }
  </QuestionConsumer>
);
