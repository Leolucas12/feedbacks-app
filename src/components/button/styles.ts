import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

export const CustomButton = styled.button`
  background-color: #FAD34F;
  border-radius: 500px;
  padding: 28px 52px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  width: 100%;
  margin-top: 26px;
  border: 0;

  svg {
    animation-name: ${spin};
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
  }
`;