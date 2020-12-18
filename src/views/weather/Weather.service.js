
export default class WeatherService {

  constructor() {
    this.weather = '-/-';
    this.updateWeather()
      .then(res => {
        console.log(res);
        this.weather = Math.round(res.main.temp - 272.15);
      });
  }

  async updateWeather() {
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather';
    const query = 'q=MountainView&appid=2c7a2dff5dba8638f6700dc8c15cab25';
    return await fetch(`${endpoint}?${query}`)
      .then(data => data.text())
      .then(res => {
        return JSON.parse(res);
      });
  }

  getWeatherJSON() {
    return "";
  }

}