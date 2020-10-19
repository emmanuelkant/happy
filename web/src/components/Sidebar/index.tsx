import React from 'react';
import * as S from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import mapMarkerImg from '../../images/map-marker.svg';
import { useHistory } from 'react-router-dom';

export default function Sidebar() {
  const { goBack } = useHistory();

  return(
    <S.Aside>
      <S.Image src={mapMarkerImg} alt="Uma carinha feliz pintada de amarelo" />

      <footer>
        <S.BackButton type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </S.BackButton>
      </footer>
    </S.Aside>
  );
}