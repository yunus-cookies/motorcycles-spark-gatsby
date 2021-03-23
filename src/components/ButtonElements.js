import styled, { css } from "styled-components"

export const Button = styled.button`
  transition: all 0.3s ease-out;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  letter-spacing: 2px;
  ${props =>
    props.hero &&
    css`
      background-color: transparent;
      color: #ff0000;
      padding: 12px 40px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
      background-color: rgba(255, 0, 0, 0.2);
      border-radius: 100% 100px;
      &:hover {
        transition: all 0.2s ease-out;
        background-color: rgba(0, 0, 0, 1);
        color: #ffffff;
      }
    `}
  ${props =>
    props.nav &&
    css`
      background-color: transparent;
      color: ${({ isScroll }) => (isScroll ? "#ffffff" : "#ff0000")};
      padding: 12px 40px;
      transition: all 0.3s ease-out;
      &:hover {
        background-color: ${({ isScroll }) =>
          isScroll ? "rgba(0,0,0,1 )" : "rgba(255, 0, 0, 0.2)"};
        border-radius: 100% 100px;
        transition: all 0.2s ease-out;
      }
    `}
  ${props =>
    props.mobile &&
    css`
      background-color: rgba(255, 0, 0, 0.2);
      color: #ff0000;
      text-align: center;
      border-radius: 4px;
      width: 100%;
      text-decoration: none;
      border-radius: 100% 100px;
      font-size: 1.5rem;
      padding: 14px 20px;
      transition: all 0.3s ease-out;
    `}
`
