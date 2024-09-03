import { useApiContext } from "../services/ApiService";
import { Box } from "../components/Box";
import { formatDate } from "../utils/date-formatting";

export const Production = () => {
  const { data } = useApiContext();

  return (
    <div className="container my-8 max-w-[1000px]">
      {data && (
        <div className="grid grid-cols-3 gap-4">
          {typeof data.result === "object" && data.result !== null ? (
            <>
              <Box
                massage="Time"
                context={formatDate(data.result.uploadTime)}
              />

              <Box
                massage="PV Power"
                context={data.result.acpower}
                units="W"
                variant="x2y 2x2y"
                extraStyle="text-darkYellow"
                extraData={[
                  data.result.powerdc1,
                  data.result.powerdc2,
                  data.result.powerdc3,
                  data.result.powerdc4,
                ]}
              />

              <Box
                massage="Yeld Today"
                context={data.result.yieldtoday}
                units="kWh"
                extraStyle="text-green"
              />

              <Box
                massage="Consume Energy"
                context={
                  data?.result?.consumeenergy === 0
                    ? "--"
                    : data?.result?.consumeenergy
                }
                units="kWh"
                extraStyle="text-red"
              />

              <Box
                massage="Feed in Energy"
                context={
                  data?.result?.feedinpower === 0
                    ? "--"
                    : data?.result?.feedinpower
                }
                units="kWh"
                extraStyle="text-darkBlue"
              />

              <Box
                massage="Yeld Total"
                context={data.result.yieldtotal}
                units="MWh"
                variant="xy 3xy"
                extraStyle="text-purple"
              />
            </>
          ) : (
            <p>Invalid data format</p>
          )}
        </div>
      )}
    </div>
  );
};
