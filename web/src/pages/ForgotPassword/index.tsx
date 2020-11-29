import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import * as S from './styles';

import logoImg from '../../images/logo-login.svg';

function ForgotPassword() {
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (email) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [email]); 

  return (
    <S.ForgotPasswordPage>
      <S.LeftWrapper>
        <img
          src={logoImg}
          alt="Uma carinha amarela feliz e um texto dizendo happy"
        />
        <S.Location>
          <S.Strong>Rio de Janeiro</S.Strong>
          <span>Rio de Janeiro</span>
        </S.Location>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.ContentWrapper>
          <S.Title>Esqueci a senha</S.Title>
          <S.Text>
            Sua redefinição de senha será enviada para o e-mail cadastrado.
          </S.Text>
          <S.Form className="create-orphanage-form">
            <S.InputField className="input-block">
              <S.InputLabel htmlFor="email">E-mail</S.InputLabel>
              <S.Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </S.InputField>
          </S.Form>
          <S.EnterButton disable={isDisable}>Entrar</S.EnterButton>
        </S.ContentWrapper>
        <S.BackButton to="/app">
          <FiArrowLeft size={26} color="15C3D6" strokeWidth={3} />
        </S.BackButton>
      </S.RightWrapper>
    </S.ForgotPasswordPage>
  );
}

export default ForgotPassword;

