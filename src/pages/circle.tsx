import Circle from "@/components/Circle";
import Star from "@/images/Star";


export default function PageCircle() {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-[#141519]">

        <Circle>
            <Star />
        </Circle>
        
        <Circle content="1"/>
        <Circle content="2"/>
        <Circle content="3"/>
        <Circle content="4"/>
        <Circle content="5"/>

      </div>
    )
  }