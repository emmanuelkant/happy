import styled from 'styled-components';
import { Link } from 'react-router-dom';

import landingImg from '../../images/landing.svg';

export const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 80% center;
`;

export const Main = styled.main`
  max-width: 350px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Text = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const Strong = styled.strong`
  font-weight: 800;
`;

export const EnterAppButton = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #96FEFF;
  }
`;
