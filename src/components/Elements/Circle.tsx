interface Props {
  content?: string;
  children?: React.ReactNode;
  classification: () => void;
  selected: boolean;
  star?: boolean;
  noStar?: boolean;
}

export default function Circle(props: Props) {
  return (
    <button
      onClick={() => props.classification()}
      className={`
        flex justify-center items-center
        w-12 h-12 rounded-full
        ${
          props.noStar
            ? "hover:bg-[#747F8C] hover:text-[#FFF] cursor-pointer select-none"
            : ""
        }
        ${props.star ? "hover:bg-[#2D3540] cursor-default" : ""}
        ${
          props.selected
            ? "bg-[#F26716] text-[#FFF] hover:bg-[#F26716] hover:text-[#FFF]"
            : "bg-[#2D3540] text-[#7B848C]"
        }
      `}
    >
      {props.content}
      {props.children}
    </button>
  );
}
