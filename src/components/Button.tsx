interface Props {
    content: string;
}

export default function Circle(props: Props) {
    return (
      <div className={`
        flex justify-center items-center
        bg-[#F26716] text-[#FFF]
        w-44 h-10 rounded-3xl
      `}>
        {props.content}
      </div>
    )
  }