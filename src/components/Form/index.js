import React from 'react';
import { StyledBox, StyledForm } from './styled';
import { useForm } from 'react-hook-form';

const Form = ({ getWeatherInfo, info, setInfo, city, setCity }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const { city } = data;
    getWeatherInfo();
  };

  return (
    <StyledBox>
      <p>
        Cidade:{' '}
        <strong>{info?.name || 'Cidade não encontrada'}</strong>
      </p>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
        <button type="submit">Buscar</button>
      </StyledForm>
    </StyledBox>
  );
};

export default Form;
