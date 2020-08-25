import moment from "moment-timezone";

const dateConverter = () => {
  return {
    toDayOfWeekDisplay: (targetDate) => {
      return moment(targetDate).format("dddd");
    },

    toStandardDateDisplay: (targetDate) => {
      return moment(targetDate).format("DD/MM/YYYY");
    },

    toStandardDateAnd24HrTimeDisplay: (targetDate) => {
      return moment(targetDate).format("DD/MM/YYYY HH:mm");
    },
    toLongDateAnd24HrTimeDisplay: (targetDate) => {
      return moment(targetDate).format("dddd DD/MM/YYYY");
    },
    to12HrTimeDisplay: (targetDate) => {
      return moment(targetDate).format("hh:mm a");
    },
    to24HrTimeDisplay: (targetDate) => {
      return moment(targetDate).format("HH:mm");
    },
    toMomentDate: (targetDate) => {
      return moment(targetDate);
    },
  };
};

export { dateConverter as DateConverter };
