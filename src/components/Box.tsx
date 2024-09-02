interface Props {
  massage: string | number | null;
  context: string | number | null;
  variant?: "xy" | "2xy" | "x2y" | "2x2y";
  extraStyle?: string;
}

export const Box = ({ massage, context, variant, extraStyle }: Props) => {
  let boxStyle = "";

  switch (variant) {
    case "xy":
      boxStyle = "";
      break;

    case "2xy":
      boxStyle = "col-span-2";
      break;

    case "x2y":
      boxStyle = "row-span-2";
      break;

    case "2x2y":
      boxStyle = "col-span-2 row-span-2";
      break;

    default:
      boxStyle = "";
  }
  return (
    <div
      className={`grid-item flex flex-col items-center justify-center rounded-md bg-background p-4 text-center shadow-md ${boxStyle} ${extraStyle}`}
    >
      <p className="font-medium text-gray">{massage}</p>
      <p className="text-3xl text-darkGray">{context}</p>
    </div>
  );
};
