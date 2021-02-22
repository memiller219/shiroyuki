import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    display: flex;
    justify-content: center;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;

  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  ${getButtonStyles}

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.2px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
