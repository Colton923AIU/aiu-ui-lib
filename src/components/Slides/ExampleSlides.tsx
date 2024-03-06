import * as React from 'react'
import type { Slide } from './Slides'
import Card from '../Card'
import Flex from '../Flex'
import Banner from '../Banner'

const ExampleSlide = (int: number) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003a4b',
        minWidth: '600px',
        minHeight: '600px',
      }}
    >
      <Banner bannerTitle="Example of the Banner Component" />
      <Card radius="sm" shadow="xs" bg={'#fafafa'}>
        <Flex>
          <h1
            style={{
              padding: '1rem',
            }}
          >
            {int}
          </h1>
          <span
            style={{
              padding: '1rem',
            }}
          >
            Test Example Slide
          </span>
        </Flex>
      </Card>
    </div>
  )
}

const arr = [0, 1, 2, 3]

const ExampleSlides = arr.map((num) => {
  return {
    children: ExampleSlide(num),
    title: num.toString(),
    time: 10,
  } as Slide
})

export default ExampleSlides
