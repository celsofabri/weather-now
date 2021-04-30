import axios from 'axios';

export const WeatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather'
});

export const IpInfoInstance = axios.create({
  baseURL: 'https://ipinfo.io'
});
