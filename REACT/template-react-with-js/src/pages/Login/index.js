import React from 'react';
import { useDispatch } from 'react-redux';

import { Conainer } from '../../styles/GlobalStyles';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Conainer>
      <Title isRed={true}>
        Login
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eveniet soluta nihil incidunt, repudiandae facere
        </small>
      </Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Conainer>
  );
}
