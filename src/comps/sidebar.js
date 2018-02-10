import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    const sidebarTitle = {
      color: 'white',
      fontWeight: 'lighter',
      fontSize: '22px',
      letterSpacing: '.5px',
      paddingTop: '30px',
    }

    const subtitle = {
      fontSize: '17px',
      opacity: 0.5,
      color: 'white',
      fontWeight: '300',
      letterSpacing: '.5px',
      marginTop: '30px',
      paddingBottom: '20px',
    }

    return (
      <div className="sidebar">
        <div className="sidebarContent">
          <h2 style={sidebarTitle}>Albin Groen's blog</h2>
          <p style={subtitle}>Posts</p>
          <ul>
            <ListItem number="1" path="/post1" item="Tomorrow is the day" />
          </ul>
        </div>
      </div>
    )
  }
}

class ListItem extends React.Component {
  render() {
    return (
      <Link to={this.props.path}>
        <li>
          {this.props.number}. {''}
          {this.props.item}
        </li>
      </Link>
    )
  }
}
