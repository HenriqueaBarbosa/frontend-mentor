import Star from "@/images/Star";
import Card from "../Elements/Card";
import Circle from "../Elements/Circle";
import Details from "../Elements/Details";
import Button from "../Elements/Button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#141519]">
      <Card>
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
          <Button content="SUBMIT" />
        </div>
      </Card>
    </div>
  );
}
