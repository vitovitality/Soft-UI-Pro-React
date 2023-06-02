import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <div className="list-item-container1">
        <svg viewBox="0 0 1024 1024" className="list-item-icon">
          <path d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"></path>
        </svg>
        <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
      </div>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.',
  new_prop: '1. Listen to Social Conversations',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
