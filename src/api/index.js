import { IpInfoInstance, WeatherInstance } from './config';

export const getLocation = () => {
  return IpInfoInstance({
    method: 'get',
    url: '?token=a5acb2cd3f0c54'
  });
};

export const getWeatherByCity = (city) => {
  return WeatherInstance({
    method: 'get',
    url: `?q=${city}&appid=${'c496e90670f92991911d2271103f3c48'}`
  });
};
