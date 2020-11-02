import React from 'react';
import * as S from './styles';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../images/logo-login.svg';

function Login() {
  return (
    <S.LoginPage>
      <S.LeftWrapper>
        <img src={logoImg} alt="Uma carinha amarela feliz e um texto dizendo happy"/>
        <S.Location>
          <S.Strong>Rio de Janeiro</S.Strong>
          <span>Rio de Janeiro</span>
        </S.Location>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.ContentWrapper>
          <S.Title>Fazer login</S.Title>
          <S.Form className="create-orphanage-form">
            <S.InputField className="input-block">
              <S.InputLabel htmlFor="email">E-mail</S.InputLabel>
              <S.Input
                id="email"
              />
            </S.InputField>
            <S.InputField className="input-block">
              <S.InputLabel htmlFor="password">Senha</S.InputLabel>
              <S.Input
                id="password"
              />
            </S.InputField>
          </S.Form>
          <S.UtilityWrapper>
            <S.RememberMe>
              <input type="checkbox" />
              <S.Checkbox />
              <S.RememberMeText>Lembrar-me</S.RememberMeText>
            </S.RememberMe>
            <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
          </S.UtilityWrapper>
          <S.LoginButton disable={true}>Entrar</S.LoginButton>
        </S.ContentWrapper>
        <S.BackButton to="/app">
          <FiArrowLeft size={26} color="15C3D6" strokeWidth={3} />
        </S.BackButton>
      </S.RightWrapper>
    </S.LoginPage>
  );
}

export default Login;

