import React from 'react';
import * as S from './styles';

export default function CreateOrphanageFail() {
  return (
    <S.CreateOrphanageFailPage>
      <S.ContentWrapper>
        <S.Content>
          <S.Title>Ops!</S.Title>
          <S.Text>
            Ocorreu algum problema na hora de cadastrar o seu orfanato, por favor tente novamente :(
          </S.Text>
          <S.BackButton to="/app">
            <S.Strong>Voltar para o mapa</S.Strong>
          </S.BackButton>
        </S.Content>
      </S.ContentWrapper>
    </S.CreateOrphanageFailPage>
  )
}
