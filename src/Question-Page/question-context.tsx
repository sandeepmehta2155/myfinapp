import { createContext, useContext } from "react";

export type Question = {
  question: string;
  options: string[];
  answer: string;
  src: string;
  explaination?: string;
  quote?: object;
};

export const QuestionContext = createContext<Question[] | null>(null);

export const useQuestion = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = QuestionContext.Provider;

export const QuestionConsumer = QuestionContext.Consumer;
