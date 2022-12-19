import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 220px;
  width: 100px;

  @media only screen and (max-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    height: 100px;
    width: 220px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  padding: 0;
  height: 100%;
  width: 100%;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 10px #444400;
  background-color: #ffd700;
  color: #006400;
  font-size: ${({ fontSize }) => fontSize || '2em'};
  border: none;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 5px 8px #444400;
  }
  &:active {
    border-radius: 100%;
    box-shadow: inset 0px 0px 10px 0px #444400;
  }
`
