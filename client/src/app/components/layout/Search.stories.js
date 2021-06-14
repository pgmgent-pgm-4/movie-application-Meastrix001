import SearchBar from './Search.js';
import React from 'react';

const ComponentWrapper = (Story) => {
    return <div style={{backgroundColor: 'pink'}}>
      <Story/>
    </div>
}

const StoryWrapper = (Story) => {
    return <div style={{margin: '2rem'}}>
      <Story/>
    </div>
}

export default {
    title: 'Search',
    component: Search,
    parameters: {
        backgrounds: {
            values: [
                {name: 'purple', value: 'purple'}
            ]
        }
    },
    decorators: [ComponentWrapper],
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary']
            }
        }
    }
}

const Template = (args) => <SearchBar {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    label: 'Primary label'
}
Primary.parameters = {
    backgrounds: {
        values: [
            {name: 'blue', value: 'blue'}
        ]
    }
}

Primary.decorators = [StoryWrapper]

export const Secondary = () => <SearchBar type='primary'/>

Secondary.storyName = 'Default';