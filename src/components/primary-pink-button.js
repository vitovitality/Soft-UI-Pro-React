import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className={`primary-pink-button-container ${props.rootClassName} `}>
      <button className="primary-pink-button-button button ButtonSmall">
        {props.login}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  rootClassName: '',
  login: 'Login',
}

PrimaryPinkButton.propTypes = {
  rootClassName: PropTypes.string,
  login: PropTypes.string,
}

export default PrimaryPinkButton
