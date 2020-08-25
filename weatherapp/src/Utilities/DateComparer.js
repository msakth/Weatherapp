import moment from "moment";
import { DateConverter } from "./DateConverter";

const dateComparer = () => {
  const dateToMoment = (targetDate) => {
    return DateConverter(targetDate).toMomentDate();
  };

  return {
    isSameAs: (sourceDate, targetDate) => {
      return moment(sourceDate, "YYYY MM DD").isSame(
        moment(targetDate, "YYYY MM DD"),
        "day"
      );
    },
  };
};

export { dateComparer as DateComparer };
