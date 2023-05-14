interface Props {
    content?: string;
    children?: React.ReactNode;
    classification: () => void;
    selected: boolean;
}

export default function Circle(props: Props) {
  

    return (
      <button onClick={() => props.classification()} className={`
        flex justify-center items-center
        w-12 h-12 rounded-full
        ${props.selected ? "bg-[#747F8C] text-[#FFF]" : "bg-[#2D3540] text-[#7B848C]"}
      `}>
        {props.content}
        {props.children}
      </button>
    )
  }