import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'
import { Box, Boxes } from '../../../children/Box'
import Card from '../../Card'

const meta = {
  title: 'aiu-ui-lib/data-display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Box',
        dropdownContent: Box(),
      },
      {
        label: 'Boxes',
        dropdownContent: Boxes(),
      },
      {
        label: 'Card',
        dropdownContent: Card({ h: '200px', w: '200px' }),
      },
    ],
  },
  name: 'Default Accordion',
}
