import styled from 'styled-components';

interface ButtonProps {
  space?: string; 
};

export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 48px;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: #12AFCB;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: ${({ space }: ButtonProps) => (space ? space : '0')};

  &:hover {
    background: #17D6EB;
  }
`;
