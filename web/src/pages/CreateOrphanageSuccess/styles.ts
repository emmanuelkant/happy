import styled from 'styled-components';
import { Link } from 'react-router-dom';

import successImg from '../../images/success.svg';

export const CreateOrphanageSuccessPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #37C77F;
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

  background: url(${successImg}) no-repeat 80% center;
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

export const LoginButton = styled(Link)`
  width: 222px;
  height: 56px;
  background: #31B272;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #fff;

  transition: all 0.2s;

  &:hover {
    background: #3BD689;
  }
`;

export const Strong = styled.strong`
  font-weight: 800;
`;