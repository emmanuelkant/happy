import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type LoginButtonProps = {
  disable: boolean;
}

type RememberMeInputProps = {
  checked: boolean;
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginPage = styled(FlexDiv)`
  width: 100vw;
  height: 100vh;
`;

export const LeftWrapper = styled(FlexDiv)`
  flex: 4;
  flex-direction: column;

  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  height: 100vh;
`;

export const Location = styled.div`
  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  margin-top: 100px;

  text-align: center;
`;

export const Strong = styled.strong`
  font-weight: 800;
`;

export const RightWrapper = styled(FlexDiv)`
  flex: 2;

  background: #FFF;

  height: 100vh;
`;

export const ContentWrapper = styled(FlexDiv)`
  width: 70%;

  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;

  margin-bottom: 40px;

  font-size: 34px;
  font-weight: 700;
  line-height: 34px;

  text-align: left;

  color: #5C8599;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputField = styled.div`
  margin-top: 24px;
`;

export const InputLabel = styled.label`
  display: flex;
  color: #8FA7B3;
  margin-bottom: 8px;
  line-height: 24px;

  span {
    font-size: 14px;
    color: #8FA7B3;
    margin-left: 24px;
    line-height: 24px;
  }
`;

const DefaultInput = styled.input`
  width: 100%;
  background: #F5F8FA;
  border: 1px solid #D3E2E5;
  border-radius: 20px;
  outline: none;
  color: #5C8599;
`;

export const Input = styled(DefaultInput)`
  height: 64px;
  padding: 0 16px;
`;

export const UtilityWrapper = styled.div`
  width: 100%;

  margin-top: 24px;

  display: flex;
  justify-content: space-between;

  color: #8FA7B3;
  font-size: 16px;
  line-height: 22px;
`;

export const RememberMe = styled.div`
  position: relative;

  cursor: pointer;

  input {
    display: none;
  }
`;

export const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;

  background: ${({ checked }: RememberMeInputProps) => checked ? '#37C77F' : '#F5F8FA' };

  border: 1px solid #D3E2E5;
  box-sizing: border-box;
  border-radius: 8px;

  ${({ checked }: RememberMeInputProps) => checked && css`
    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  ` }

`;

export const RememberMeText = styled.span`
  margin-left: 35px;
`;

export const ForgotPassword = styled(Link)`
  text-decoration: none;
  color: #8FA7B3;
`;

export const LoginButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  opacity: ${({ disable }: LoginButtonProps) => disable ? '0.5' : '1'};
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background: #36CF82;
  }

  svg {
    margin-right: 16px;
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 40px;
  right: 43px;

  width: 48px;
  height: 48px;
  background: #EBF2F5;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #96FEFF;
  }
`;