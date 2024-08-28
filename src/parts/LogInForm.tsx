import { Input } from "../components/radix/Input";
import { Button } from "../components/Button";

export const LogInForm = () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <div className="bg-background mt-16 flex flex-col gap-4 rounded-md p-8 shadow-md">
          <h1 className="text-center text-5xl">Solar Sense</h1>
          <p className="text-center sm:mb-6">
            Insert data from Solax Cloud. ?help
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="mb-4 flex flex-col items-end gap-4">
              <Input content="TokenID" id="par1" placeholder="test" />
              <Input content="SN" id="par2" placeholder="test" />
            </div>

            <Button content="Show data" variant="danger" />
          </div>
        </div>
      </div>
    </>
  );
};
