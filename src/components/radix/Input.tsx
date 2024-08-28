import * as Label from "@radix-ui/react-label";

interface Props {
  content: string;
  id: string;
  placeholder: string;
}
export const Input = ({ content, id, placeholder }: Props) => (
  <div className="flex flex-col flex-wrap items-start px-5 sm:flex-row sm:gap-[15px]">
    <Label.Root
      className="text-[15px] font-medium leading-[35px] text-gray"
      htmlFor={id}
    >
      {content}
    </Label.Root>
    <input
      className="selection:color-white shadow-darkGray inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] bg-gray bg-opacity-15 px-[10px] text-[15px] leading-none placeholder-gray shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black]"
      type="text"
      id={id}
      placeholder={placeholder}
    />
  </div>
);
