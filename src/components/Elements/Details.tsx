interface Props {
  question?: string;
  content?: string;
  thanks?: boolean;  
}

export default function Details(props: Props) {
  return (
    <div >
      <dl>
        <dt
          className={`
            text-[#FFF] mb-3 text-2xl font-bold 
            ${props.thanks ? "text-center" : "text-normal"}
          `}
        >
          {props.question}
        </dt>
        <dd
          className={`
            text-[#7B848C] text-sm 
            ${props.thanks ? "text-center" : "text-normal"}
          `}
        >
          {props.content}
        </dd>
      </dl>
    </div>
  );
}
