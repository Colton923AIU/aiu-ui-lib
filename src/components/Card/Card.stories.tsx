import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import { Boxes } from '../../children'
import Banner from '../Banner'
import Flex from '../Flex'

const CardChildren = () => {
  return (
    <Flex w="100%" h="100%">
      <Flex dir="row" h="100%" w="100%" justify="space-between" align="center">
        <Boxes />
      </Flex>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Banner bannerTitle="Example w/ Boxes & Banner" />
      </div>
    </Flex>
  )
}

const meta = {
  title: 'aiu-ui-lib/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    bg: { control: 'color', description: 'Background Color' },
    radius: { control: 'select', description: 'Border Radius' },
    shadow: { control: 'select', description: 'Box Shadow' },
    h: { control: 'text', description: 'Height' },
    w: { control: 'text', description: 'Width' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    bg: 'var(--pec-primary-color-1)',
    radius: 'md',
    shadow: 'md',
    h: '300px',
    w: '600px',
  },
  name: 'Light - Md Radius - Md Shadow',
}

export const Dark: Story = {
  args: {
    bg: 'var(--pec-primary-color-9)',
    radius: 'md',
    shadow: 'md',
    h: '300px',
    w: '600px',
  },
  name: 'Dark - Md Radius - Md Shadow',
}

export const WithChildren: Story = {
  args: {
    bg: 'var(--pec-primary-color-3)',
    radius: 'lg',
    shadow: 'sm',
    h: '300px',
    w: '600px',
    children: CardChildren(),
  },
  name: 'Primary Color 5 - Lg Radius - Sm Shadow - With Children',
}
