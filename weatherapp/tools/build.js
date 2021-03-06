import webpack from "webpack";
import webPackConfig from "../webpack.config.prod";
import colors from "colors";

process.env.NODE_ENV = "production";

console.log("Generating minified bundle".blue);

webpack(webPackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => console.log(error.red));
  }
  if (jsonStats.hasWarnings) {
    console.log("Webpack generated the following warnings:".bold.yellow);
    jsonStats.warnings.map((warning) => console.log(warning.yellow));
  }
  console.log(`webpack stats: ${stats}`);

  console.log("Weather app has been successfully deployed in production".green);

  return 0;
});
