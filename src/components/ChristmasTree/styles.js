import styled, { keyframes } from 'styled-components'

const lightKeyframes = (colorLightOff, colorLightOn) => keyframes`
  from{
    color: ${colorLightOff};
  }

  to{
    color: ${colorLightOn};
  }
`

export const Tree = styled.div`
  text-align: center;
  font-size: 2em;
  background-color: rgba(11, 11, 11, 0.8);
  padding: 14px;
  border-radius: 8px;
`

export const Trunk = styled.div`
  color: #5c3e36;
`

export const Sheets = styled.span`
  color: ${({ colorLightOff }) => colorLightOff || '#006400'};
  animation: ${({ time }) => `${time * 0.2}s`}
    ${({ colorLightOff, colorLightOn }) =>
      lightKeyframes(colorLightOff, colorLightOn)}
    ease-in-out infinite;
`
