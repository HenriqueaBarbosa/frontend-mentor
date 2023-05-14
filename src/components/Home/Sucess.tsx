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

  return (
    <div className="w-24rem h-24rem sm:w-auto sm:h-auto md:w-32rem md:h-32rem lg:w-40rem lg:h-40rem xl:w-48rem xl:h-48rem">
      {card}
    </div>
  );
}
