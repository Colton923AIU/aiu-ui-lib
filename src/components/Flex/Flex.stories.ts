import type { Meta, StoryObj } from '@storybook/react'
import Flex from './Flex'
import { Boxes } from '../../children/Box'

const meta = {
  title: 'aiu-ui-lib/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    children: Boxes(),
    dir: 'row',
    justify: 'space-between',
    align: 'center',
    h: '300px',
    w: '600px',
  },
  name: 'Row, space between, center, 300px h, 600px w',
}

export const Column: Story = {
  args: {
    children: Boxes(),
    dir: 'column',
    justify: 'center',
    align: 'center',
    h: '300px',
    w: '600px',
  },
  name: 'column, center, center, 300px h, 600px w',
}
