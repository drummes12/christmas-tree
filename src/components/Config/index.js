import { useContext, useRef } from 'react'
import { Context } from '../../Context'
import { Container, Buttons, Button } from './styles'

export const Config = ({ children }) => {
  const container = useRef(null)
  const { layers, setLayers, time, setTime } = useContext(Context)

  const handleIncreaseLayers = () => {
    const heightContainer = container.current.offsetHeight
    const widthContainer = container.current.offsetWidth
    if (
      heightContainer + 100 < window.innerHeight &&
      widthContainer + 40 < window.innerWidth
    )
      setLayers(layers + 1)
  }

  const handleDecreaseLayers = () => {
    if (layers - 1 > 2) setLayers(layers - 1)
  }

  const handleIncreaseTime = () => {
    if (time + 1 < 10) setTime(time + 1)
  }

  const handleDecreaseTime = () => {
    if (time - 1 >= 0) setTime(time - 1)
  }

  return (
    <Container ref={container}>
      <Buttons>
        <Button onClick={handleIncreaseLayers} fontSize='2.5em'>
          🎄
        </Button>
        <Button onClick={handleDecreaseLayers} fontSize='1.5em'>
          🎄
        </Button>
      </Buttons>
      {children}
      <Buttons>
        <Button onClick={handleIncreaseTime} fontSize='2.5em'>
          💡
        </Button>
        <Button onClick={handleDecreaseTime} fontSize='1.5em'>
          💡
        </Button>
      </Buttons>
    </Container>
  )
}
