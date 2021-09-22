import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Component } from '~/components/example-component'

export default {
  title: 'Example',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => <Component />

export const AllTag = Template.bind({})

AllTag.args = {}

AllTag.storyName = '示例'
