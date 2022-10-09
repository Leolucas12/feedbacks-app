import styled from "styled-components";
import mapImage from '../../assets/map.png';
import clouds from '../../assets/clouds.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FormSection = styled.section`
  height: 86%;
  display: flex;
  align-items: stretch;
  background: url(${clouds}) no-repeat center;
  background-size: cover;
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  width: 35%;
  
  @media (max-width: 1200px) {
    background-color: #FFFFFF;
    width: 100%;
    margin-left: 0;
    padding: 10%;
    align-items: center;
  }
`;

export const FormTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  margin-bottom: 30px;
`;

export const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  width: 35%;
  
  @media (max-width: 1200px) {
    background-color: #FFFFFF;
    width: 100%;
    margin-left: 0;
    padding: 10%;
    align-items: center;
  }
`;

export const MapImage = styled.div`
  flex: 1;
  background: url(${mapImage}) no-repeat center;
  background-size: cover;
  clip-path: circle(61.1% at 83% 46%);
`;

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 14%;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  display: flex;

  @media (max-width: 1200px) {
    display: flex;
    place-content: center;
  }
`;

export const SocialNewtorks = styled.div`
  margin-left: 20%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #696969;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    width: 20%;
  }
`;

export const GoodieRedBottom = styled.img`
  height: 16vh;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 600px) {
    height: 10vh;
  }
`;

export const GoodieYellowRight = styled.img`
  height: 10vh;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 10%;
`;

export const GoodieUpsideDown = styled.img`
  height: 7vh;
  position: absolute;
  right: 8%;
  top: 0;
`;

export const GoodieRedRight = styled.img`
  position: absolute;
  top: 55%;
  right: 28%;
  height: 25%;

  @media (max-width: 1200px) {
    z-index: -1;
  }
`;

export const GoodieYellow = styled.img`
  position: absolute;
  top: 53%;
  right: 40%;
  height: 11%;

  @media (max-width: 1200px) {
    z-index: -1;
  }
`;

export const GoodieYellowTop = styled.img`
  width: 9%;
  position: absolute;
  top: 1%;
  left: 1%;
`;