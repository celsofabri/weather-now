import React, { useState, useEffect } from 'react';
import Weather from 'containers/Weather';
import Form from 'components/Form';
import { getLocation, getWeatherByCity } from 'api';

const App = () => {
  const [city, setCity] = useState('');
  const [info, setInfo] = useState({});

  const getWeatherInfo = () => {
    getWeatherByCity(city)
      .then((res) => {
        const { data } = res;
        setCity(city);
        setInfo(data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getLocation()
      .then((res) => {
        const { data } = res;
        setCity(data?.city);
        if (city) {
          getWeatherInfo();
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [city]);

  return (
    <React.Fragment>
      <Weather />
      <Form
        info={info}
        setInfo={setInfo}
        city={city}
        setCity={setCity}
        getWeatherInfo={getWeatherInfo}
      />
    </React.Fragment>
  );
};

export default App;
