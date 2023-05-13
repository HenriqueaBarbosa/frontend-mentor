interface Props {
    content?: string;
    children?: React.ReactNode;
}

export default function Circle(props: Props) {
    return (
      <div className={`
        flex justify-center items-center
        bg-[#1F2630] text-[#818993]
        w-10 h-10 rounded-full
      `}>
        {props.content}
        {props.children}
      </div>
    )
  }