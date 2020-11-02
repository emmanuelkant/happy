import React from 'react';
import * as S from './styles';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg';

function Landing() {
  return (
    <S.LandingPage>
      <S.ContentWrapper>
        <img src={logoImg} alt="Uma carinha feliz pintada de amarelo"/>

        <S.Main>
          <S.Title>Leve Felicidade para o mundo</S.Title>
          <S.Text>Visite orfanatos e mude o dia de muitas crianças.</S.Text>
        </S.Main>

        <S.Location>
          <S.Strong>Rio de Janeiro</S.Strong>
          <span>Rio de Janeiro</span>
        </S.Location>

        <S.LoginButton to="/login">
          <S.Strong>Acesso Restrito</S.Strong>
        </S.LoginButton>

        <S.EnterAppButton to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </S.EnterAppButton>
      </S.ContentWrapper>
    </S.LandingPage>
  );
}

export default Landing;

