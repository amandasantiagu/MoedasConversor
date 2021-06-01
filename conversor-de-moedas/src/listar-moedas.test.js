import React from 'react';
import ReactDom from 'react-dom';
import ListarMoedas from './listar-moedas';
import { render, screen } from '@testing-library/react';

describe('Teste do componente de Listagem de Moedas'), () => {
    it ('deve renderizar o componente sem erros'), () => {
        const div = document.createElement('div');

        reactDom.render(<ListarMoedas/>, div);
        reactDom.unmountComponentAtNode(div);
    }
}