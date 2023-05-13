interface Props {
  children: React.ReactNode;
}

export default function Card(props: Props) {
  return (
    <div
      className={`
        flex flex-col p-7 gap-7
        bg-[#1F2630]
        w-96 h-96 rounded-3xl
      `}
    >
      {props.children}
    </div>
  );
}
