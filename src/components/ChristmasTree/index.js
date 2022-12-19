import { useContext } from 'react'
import { Context } from '../../Context'
import { Sheets, Tree, Trunk } from './styles'

export const ChristmasTree = ({ layers }) => {
  const { time } = useContext(Context)

  const layersTree = Array.from({ length: layers }, (v, i) => i + 1)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  let light = []

  return (
    <Tree>
      ⭐
      {layersTree.map((index) => {
        light = []
        return (
          <div key={index}>
            {Array(index * 3 - 2)
              .fill(0)
              .map((value, index2) => {
                const random = getRandomInt(4)
                light.push(random)
                if (index > 1 && random === 1 && light[index2 - 1] !== 1)
                  return (
                    <Sheets
                      key={`${index}_${index2}`}
                      colorLightOff='#440000'
                      colorLightOn='#FF0000'
                      time={time}
                    >
                      *
                    </Sheets>
                  )
                else if (index > 1 && random === 2 && light[index2 - 1] !== 2)
                  return (
                    <Sheets
                      key={`${index}_${index2}`}
                      colorLightOff='#444400'
                      colorLightOn='#FFD700'
                      time={time}
                    >
                      *
                    </Sheets>
                  )
                else if (index > 1 && random === 3 && light[index2 - 1] !== 3)
                  return (
                    <Sheets
                      key={`${index}_${index2}`}
                      colorLightOff='#444444'
                      colorLightOn='#C0C0C0'
                      time={time}
                    >
                      *
                    </Sheets>
                  )
                else return <Sheets key={`${index}_${index2}`}>*</Sheets>
              })}
          </div>
        )
      })}
      <Trunk>*</Trunk>
    </Tree>
  )
}
