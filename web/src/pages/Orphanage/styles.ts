import styled from 'styled-components';

interface OpenOnWeekendsProps {
  isOpen: boolean;
}

interface ImageProps {
  isActive: boolean;
}

export const OrphanagePage = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`;

export const ButtonImage = styled.button`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: ${({ isActive }: ImageProps) => isActive ? '1' : '0.6'};
`;

export const Image = styled(Img)`
  width: 100%;
  height: 88px;
  object-fit: cover;
`;

export const OrphanageDetailsContent = styled.div`
  padding: 80px;
`;

export const Name = styled.h1`
  color: #4D6F80;
  font-size: 54px;
  line-height: 54px;
  margin-bottom: 8px;
`;

export const About = styled.p`
  line-height: 28px;
  color: #5C8599;
  margin-top: 24px;
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: #E6F7FB;
  border: 1px solid #B3DAE2;
  border-radius: 20px;
`;

export const FooterMapContainer = styled.footer`
  padding: 20px 0;
  text-align: center;
`;

export const MapContainerLink = styled.a`
  line-height: 24px;
  color: #0089A5;
  text-decoration: none;
`;

export const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background: #D3E2E6;
  margin: 64px 0;
`;

export const VisitInstructions = styled.h2`
  font-size: 36px;
  line-height: 46px;
  color: #4D6F80;
`;

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

export const OpenDetailsDiv = styled.div`
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;

  svg {
    display: block;
    margin-bottom: 20px;
  }
`;

export const Hour = styled(OpenDetailsDiv)`
  background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
  border: 1px solid #B3DAE2;
  color: #5C8599;
`;

export const OpenOnWeekends = styled(OpenDetailsDiv)`
  background: linear-gradient(154.16deg, ${({ isOpen }: OpenOnWeekendsProps) => isOpen ? '#EDFFF6' : '#FDF0F5' } 7.85%, #FFFFFF 91.03%);
  border: 1px solid ${({ isOpen }: OpenOnWeekendsProps) => isOpen ? '#A1E9C5' : '#FFBCD4' };
  color: ${({ isOpen }: OpenOnWeekendsProps) => isOpen ? '#37C77F' : '#FF669D' };
`;

export const ContentButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
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
