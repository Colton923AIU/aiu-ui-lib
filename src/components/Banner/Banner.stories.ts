import type { Meta, StoryObj } from '@storybook/react'
import Banner from './Banner'

const meta = {
  title: 'aiu-ui-lib/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    bannerTitle: 'Banner Title',
  },
  name: 'default',
}
