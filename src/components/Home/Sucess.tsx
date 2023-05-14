import { useState } from "react";
import Home from "./Home";
import Finalization from "../Finalization/Finalization";

export default function Sucess() {
  const [gradeValue, setGradeValue] = useState("");

  const handleCard = (grade: string) => {
    setGradeValue(grade);
    setCard(<Finalization grade={grade} />);
    console.log(gradeValue);
  };

  const [card, setCard] = useState(<Home handle={handleCard} />);

  return <div>{card}</div>;
}
