import React from 'react';
import * as S from './styles';

export default function CreateOrphanageSuccess() {
  return (
    <S.CreateOrphanageSuccessPage>
      <S.ContentWrapper>
        <S.Content>
          <S.Title>Ebaaa!</S.Title>
          <S.Text>
            O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
          </S.Text>
          <S.LoginButton to="/app">
            <S.Strong>Voltar para o mapa</S.Strong>
          </S.LoginButton>
        </S.Content>
      </S.ContentWrapper>
    </S.CreateOrphanageSuccessPage>
  )
}
