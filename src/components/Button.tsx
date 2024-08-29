interface Props {
  content: string;
  variant?: "primary" | "secondary" | "danger";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ content, variant = "primary", onClick }: Props) => {
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle = "bg-[#63CFEA] text-white border-[#009CD1]";
      break;
    case "secondary":
      buttonStyle = "bg-[#F0F0F0] text-[#2A2A2A] border-[#009CD1]";
      break;
    case "danger":
      buttonStyle = "bg-[#9C0000] text-white border-[#4B0803]";
      break;
    default:
      buttonStyle = "bg-[#63CFEA] text-white border-[#009CD1]";
  }

  return (
    <button
      className={`rounded border px-3 py-1 font-medium hover:bg-opacity-25 ${buttonStyle}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
