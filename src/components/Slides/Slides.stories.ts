import type { Meta, StoryObj } from '@storybook/react'
import Slides from './Slides'
import ExampleSlides from './ExampleSlides'

const meta = {
  title: 'aiu-ui-lib/Slides',
  component: Slides,
  tags: ['autodocs'],
} satisfies Meta<typeof Slides>

export default meta
type Story = StoryObj<typeof meta>

export const SlideStory: Story = {
  args: {
    slides: ExampleSlides,
  },
  name: 'Example 1',
}
