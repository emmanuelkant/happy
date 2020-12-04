import React from 'react';
import * as S from './styles';
import { FiMapPin, FiAlertCircle, FiPower } from 'react-icons/fi';
import mapMarkerImg from '../../images/map-marker.svg';
import { useHistory, useLocation } from 'react-router-dom';

export default function SidebarDashboard() {
  const { goBack } = useHistory();
  const { pathname } = useLocation();
  const isRegistered = pathname.includes('registered');
  const isPending = pathname.includes('pending');

  return(
    <S.Aside>
      <S.Image src={mapMarkerImg} alt="Uma carinha feliz pintada de amarelo" />

      <div>
        <S.Button type="button" onClick={() => !isRegistered && goBack()} isActive={isRegistered}>
          <FiMapPin size={24} color={isRegistered ? '#0089A5' : '#FFF'} />
        </S.Button>
        <S.Button space="16px 0 0 0" type="button" onClick={() => !isPending && goBack()} isActive={isPending}>
          <FiAlertCircle size={24} color={isPending ? '#0089A5' : '#FFF'} />
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
