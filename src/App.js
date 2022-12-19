import { GlobalStyle } from './styles/GlobalStyles.js'
import { Config } from './components/Config'
import { ChristmasTree } from './components/ChristmasTree/index'
import { Context } from './Context'
import { useContext } from 'react'

export const App = () => {
  const { layers } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Config>
        <ChristmasTree layers={layers} key='tree' />
      </Config>
    </>
  )
}
