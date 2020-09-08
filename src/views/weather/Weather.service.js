
export default class WeatherService {
  constructor() {
    this.weather={data: "LOADING"};
    this.updateWeather();
  }
  async updateWeather() {
    this.weather=10;
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=MountainView&appid=2c7a2dff5dba8638f6700dc8c15cab25').then( data => {
    //   console.log(data);
    //   this.weather=data;
    // });
  }
  getWeatherJSON() {
    return "";
  }
}