import { parseISO, format } from "date-fns";
import { sprinkles } from "src/css-utils/sprinkles.css";

const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className={sprinkles({
        fontSize: "sm",
      })}
    >
      {format(date, "LLLL, d, yyyy")}
    </time>
  );
};

export default Date;
