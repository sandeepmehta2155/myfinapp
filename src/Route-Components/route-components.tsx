import * as useComponent from "../index";
import { Routes, Route } from "react-router-dom";

export const RouteComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<useComponent.HomePage />} />
      <Route path="/question" element={<useComponent.QuestionPage />} />
    </Routes>
  );
};
