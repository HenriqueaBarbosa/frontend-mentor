interface Props {
  children: any;
}
export default function Result(props: Props) {
  return (
    <div
      className={`  
            text-sm text-[#F26716]
            w-44 h-7 bg-[#2D3540] rounded-3xl
            flex justify-center items-center
        `}
    >
    {props.children}      
    </div>
  );
}
