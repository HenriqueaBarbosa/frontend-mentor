interface Props {
    question: string;
    content: string;
}

export default function Details(props: Props) {
  return (
    <div>
      <dl>
        <dt className="text-[#FFF] mb-3 text-2xl font-bold">{props.question}</dt>
        <dd className="text-[#7B848C] text-sm font-thin">{props.content}</dd>
      </dl>
    </div>
  );
}
