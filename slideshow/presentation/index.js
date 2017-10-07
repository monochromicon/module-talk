// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            ES Modules
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            Something something standards
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>
            Packaging JavaScript
          </Heading>
          <List>
            <ListItem>IIFEs</ListItem>
            <ListItem>CommonJS</ListItem>
            <ListItem>Bundling</ListItem>
            <ListItem>ES Modules</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={1} textColor='secondary'>
            IIFEs
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={1} textColor='secondary' caps>
            Bundling
          </Heading>
          <List>
            <ListItem>webpack</ListItem>
            <ListItem>Rollup</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='tertiary'>
          <BlockQuote>
            <Quote>"webpack is scary"</Quote>
            <Cite>Probably You</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={1} textColor='secondary' caps>
            The Future
          </Heading>
          <List>
            <ListItem>Native ES Modules</ListItem>
            <ListItem>HTTP2</ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
