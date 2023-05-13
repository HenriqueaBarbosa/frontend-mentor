import Thanks from "@/images/Thanks";
import Card from "../Elements/Card";
import Details from "../Elements/Details";
import Result from "./Result";

export default function Finalization() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#141519]">
      <Card>
        <div className="flex justify-center">
          <Thanks />
        </div>

        <div  className="flex justify-center">
            <Result />
        </div>

        <div>
          <Details
            thanks
            question={"Thank You!"}
            content={
              "We appreciate you taking the time to give a rating.\nIf you ever need more support, don't hesitate to\nget in touch!"
            }
          />
        </div>
      </Card>
    </div>
  );
}
