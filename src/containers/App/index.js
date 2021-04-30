import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getLocation, getWeatherByCity } from 'api';

const App = () => {

  const [city, setCity] = useState('');
  const [info, setInfo] = useState({});

  const { handleSubmit, register } = useForm();

  const getWeatherInfo = () => {
    getWeatherByCity(city).then((res) => {
      const { data } = res;
      setCity(city)
      setInfo(data);
    }).catch((err) => {
      console.log('err', err);
    });
  }

  useEffect(() => {
    getLocation().then((res) => {
      const { data } = res;
      setCity(data?.city);
      if (city) {
        getWeatherInfo();
      }
    }).catch((err) => {
      console.log('err', err)
    });
  }, [city]);

  const onSubmit = (data) => {
    const { city } = data;
    getWeatherInfo();
  }

  console.log('city', city);
  console.log('info', info);

  return (
    <div>
      <p>Cidade: <strong>{info?.name || 'Cidade não encontrada'}</strong></p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Cidade" {...register('city')}/>
        <button type="submit">Buscar</button>
      </form>

    </div>
  );
}

export default App;
