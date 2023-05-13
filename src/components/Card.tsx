import Star from "@/images/Star";
import Circle from "./Circle";
import Details from "./Details";
import Button from "./Button";

export default function Card() {
  return (
    <div
      className={`
        flex flex-col p-7 gap-7
        bg-[#1F2630]
        w-96 h-96 rounded-3xl
      `}
    >
      <div className=" flex">
        <Circle>
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
        <Circle content="1" />
        <Circle content="2" />
        <Circle content="3" />
        <Circle content="4" />
        <Circle content="5" />
      </div>

      <div className="flex w-full">
        <Button content="SUBMIT"/>
      </div>
    </div>
  );
}
