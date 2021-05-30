import React from 'react'
import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

it('deve renderizar o componente sem erros', () => {
  render(<ConversorMoedas />);
  const linkElement = screen.getByText('Projetinho Pai');
  expect(linkElement).toBeInTheDocument();
});
