import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './velociraptor.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const { author, twitter } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`A velociraptor`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>{author}</strong> who lives and works in Maplewood building useless things.{' '}
          <a href={`https://twitter.com/svahtml`}>
            You cannot follow him on Twitter....
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
