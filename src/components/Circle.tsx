interface Props {
    content?: string;
    children?: React.ReactNode;
}

export default function Circle(props: Props) {
    return (
      <div className={`
        flex justify-center items-center
        bg-[#2D3540] text-[#7B848C]
        w-12 h-12 rounded-full
      `}>
        {props.content}
        {props.children}
      </div>
    )
  }