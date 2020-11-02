import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import * as S from './styles';

import logoImg from '../../images/logo-login.svg';

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

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
                type="email"
              />
            </S.InputField>
            <S.InputField className="input-block">
              <S.InputLabel htmlFor="password">Senha</S.InputLabel>
              <S.Input
                id="password"
                type="password"
              />
            </S.InputField>
          </S.Form>
          <S.UtilityWrapper>
            <S.RememberMe onClick={() => setRememberMe(!rememberMe)}>
              <S.Checkbox checked={rememberMe}/>
              <S.RememberMeText>Lembrar-me</S.RememberMeText>
            </S.RememberMe>
            <S.ForgotPassword to="/app">Esqueci minha senha</S.ForgotPassword>
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

