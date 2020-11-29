import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import * as S from './styles';

import logoImg from '../../images/logo-login.svg';
import eyeImage from '../../images/eye.svg';
import eyeOffImage from '../../images/eye-off.svg';

function RedefinePassword() {
  const [isDisable, setIsDisable] = useState(true);
  const [shouldShowNewPassword, setShouldShowNewPassword] = useState(false);
  const [
    shouldShowNewPasswordConfirmation,
    setShouldShowNewPasswordConfirmation
  ] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  
  useEffect(() => {
    if (newPassword && newPasswordConfirmation) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [newPassword, newPasswordConfirmation]); 

  return (
    <S.RedefinePasswordPage>
      <S.LeftWrapper>
        <img src={logoImg} alt="Uma carinha amarela feliz e um texto dizendo happy"/>
        <S.Location>
          <S.Strong>Rio de Janeiro</S.Strong>
          <span>Rio de Janeiro</span>
        </S.Location>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.ContentWrapper>
          <S.Title>Redefinção de Senha</S.Title>
          <S.Text>
            Sua redefinição de senha será enviada para o e-mail cadastrado.
          </S.Text>
          <S.Form className="create-orphanage-form">
            <S.InputField className="input-block">
              <S.InputLabel htmlFor="newPassword">Nova Senha</S.InputLabel>
              <S.Input
                id="newPassword"
                type={shouldShowNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />
              <S.Eye
                src={shouldShowNewPassword ? eyeOffImage : eyeImage}
                alt={`Simbolo do um olho ${
                  shouldShowNewPassword ? ('riscado') : 'aberto'
                }`}
                onClick={() => setShouldShowNewPassword(!shouldShowNewPassword)}
              />
            </S.InputField>
            <S.InputField className="input-block">
              <S.InputLabel htmlFor="newPasswordConfirmation">
                Repetir Senha
              </S.InputLabel>
              <S.Input
                id="newPasswordConfirmation"
                type={shouldShowNewPasswordConfirmation ? 'text' : 'password'}
                value={newPasswordConfirmation}
                onChange={e => setNewPasswordConfirmation(e.target.value)}
              />
              <S.Eye
                src={shouldShowNewPasswordConfirmation ? eyeOffImage : eyeImage}
                alt={`Simbolo do um olho ${
                  shouldShowNewPasswordConfirmation ? ('riscado') : 'aberto'
                }`}
                onClick={() => setShouldShowNewPasswordConfirmation(!shouldShowNewPasswordConfirmation)}
              />
            </S.InputField>
          </S.Form>
          <S.EnterButton disable={isDisable}>Entrar</S.EnterButton>
        </S.ContentWrapper>
        <S.BackButton to="/app">
          <FiArrowLeft size={26} color="15C3D6" strokeWidth={3} />
        </S.BackButton>
      </S.RightWrapper>
    </S.RedefinePasswordPage>
  );
}

export default RedefinePassword;

