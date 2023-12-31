const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const apiKey = "3045dd712ffe6e702e3245525ac7fa38";
  const units = "metric";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
  https.get(URL, (response) => {
    // console.log(response.statusCode);

    response.on("data", (data) => {
      const WeatherData = JSON.parse(data);
      const temp = WeatherData.main.temp;
      const description = WeatherData.weather[0].description;
      //  console.log(temp, description);
      const icon = WeatherData.weather[0].icon;
      const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(`<p>The weather is currently ${description}</p>`);
      res.write(
        `<h1>The temperature in London is ${temp} degrees celcius</h1>`
      );
      res.write(`<img src="${imgURL}" alt="wheather icon img" />`);
      res.send();
    });
  });
});

app.listen(8080, () => console.log("server in running"));
