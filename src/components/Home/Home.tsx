import Star from "@/images/Star";
import Card from "../Elements/Card";
import Circle from "../Elements/Circle";
import Details from "../Elements/Details";
import Button from "../Elements/Button";
import { useState } from "react";

interface ExchangeCard {
  handle: (grade: string) => void;
}

export default function Home(props: ExchangeCard) {
  const [grade, setGrade] = useState<string>("");
  const [circleClicked, setCircleClicked] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("");

  const handleGrade = (args: string) => {
    setGrade(args);
    setCircleClicked(true);
    setSelectedGrade(args);
  };

  const handleSubmit = () => {
    if (circleClicked) {
      props.handle(grade);
    } else {
      alert("Could you please select a rating?");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#141519]">
      <Card>
        <div className=" flex">
          <Circle
            star
            selected={selectedGrade === "Star"}
            classification={() => console.log("Star")}
          >
            <Star />
          </Circle>
        </div>

        <Details
          question={"How did we do?"}
          content={
            "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          }
        />

        <div className="flex justify-between">
          <Circle
            noStar
            selected={selectedGrade === "1"}
            classification={() => handleGrade("1")}
            content="1"
          />
          <Circle
            noStar
            selected={selectedGrade === "2"}
            classification={() => handleGrade("2")}
            content="2"
          />
          <Circle
            noStar
            selected={selectedGrade === "3"}
            classification={() => handleGrade("3")}
            content="3"
          />
          <Circle
            noStar
            selected={selectedGrade === "4"}
            classification={() => handleGrade("4")}
            content="4"
          />
          <Circle
            noStar
            selected={selectedGrade === "5"}
            classification={() => handleGrade("5")}
            content="5"
          />
        </div>

        <div className="flex w-full">
          <Button onClick={() => handleSubmit()} content="SUBMIT" />
        </div>
      </Card>
    </div>
  );
}
