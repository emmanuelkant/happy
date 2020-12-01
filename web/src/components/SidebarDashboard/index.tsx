import React from 'react';
import * as S from './styles';
import { FiMapPin, FiAlertCircle, FiPower } from 'react-icons/fi';
import mapMarkerImg from '../../images/map-marker.svg';
import { useHistory } from 'react-router-dom';

export default function SidebarDashboard() {
  const { goBack } = useHistory();

  return(
    <S.Aside>
      <S.Image src={mapMarkerImg} alt="Uma carinha feliz pintada de amarelo" />

      <div>
        <S.Button type="button" onClick={goBack}>
          <FiMapPin size={24} color="#FFF" />
        </S.Button>
        <S.Button space="16px 0 0 0" type="button" onClick={goBack}>
          <FiAlertCircle size={24} color="#FFF" />
        </S.Button>
      </div>

      <footer>
        <S.Button type="button" onClick={goBack}>
          <FiPower size={24} color="#FFF" />
        </S.Button>
      </footer>
    </S.Aside>
  );
}
