import styled from 'styled-components';
import { Link } from 'react-router-dom';

import failImg from '../../images/fail.svg';

export const CreateOrphanageFailPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #FF669D;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: url(${failImg}) no-repeat 80% center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 900;
  line-height: 80px;
`;

export const Text = styled.p`
  width: 392px;

  margin: 32px 0px 60px;

  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
`;

export const BackButton = styled(Link)`
  width: 222px;
  height: 56px;
  background: #D6487B;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #fff;

  transition: all 0.2s;

  &:hover {
    background: #FF6EA2;
  }
`;

export const Strong = styled.strong`
  font-weight: 800;
`;