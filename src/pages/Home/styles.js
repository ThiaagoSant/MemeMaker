import styled from "styled-components";

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.section`
  background: white;
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  margin-top: 15px;
  padding: 20px;
  width: 550px;

  h2 {
    color: #392d2d;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Templates = styled.nav`
  align-items: center;
  background: #eee;
  border-radius: 8px;
  display: flex;
  height: 90px;
  margin-bottom: 30px;
  padding: 0 15px;
  overflow-y: auto;
  width: 100%;

  button {
    background: transparent;
    border: 2px solid transparent;
    margin-right: 10px;

    &.selected {
      border-color: #4395d8; 
    }

    img {
      height: 53px;
      width: 53px;
    }
  }
`;

export const Form = styled.form`
  input {
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    font-size: 14px;
    height: 40px;
    margin-bottom: 10px;
    padding: 0 15px;
    width: 100%;
  }
`;

export const Button = styled.button`
  background: #4395d8;
  border: 0;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  transition: background 0.2s ease-in;
  width: 100%;

  &:hover {
    background: #3672a3;
  }
`;
