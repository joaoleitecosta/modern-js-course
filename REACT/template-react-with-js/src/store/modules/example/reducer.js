import * as types from '../types';
import { toast } from 'react-toastify';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      toast.success('Botão alterado com sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('DEU RUIM MANO');

      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo a requisição');
      return state;
    }

    default:
      return state;
  }
}
