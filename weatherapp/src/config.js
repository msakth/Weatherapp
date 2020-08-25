const Config = {
  sourceUrl:
    process.env.NODE_ENV === "production"
      ? "http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=6f07a554e86becaa432f523c7261fae0&units=imperial"
      : "http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=6f07a554e86becaa432f523c7261fae0&units=imperial",
};

export default Config;
