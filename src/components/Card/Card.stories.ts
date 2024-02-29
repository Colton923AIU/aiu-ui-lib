import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta = {
  title: 'aiu-ui-lib/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    h: '300px',
    w: '600px',
    bg: '#A7E1FF',
    radius: 'md',
    shadow: 'md',
  },
  name: 'light-md',
}

export const Dark: Story = {
  args: {
    h: '300px',
    w: '600px',
    bg: '#0065A4',
    radius: 'md',
    shadow: 'md',
  },
  name: 'dark-md',
}
