import PropTypes from 'prop-types';
import React from 'react'

const DateHeader = ({ label, drilldownView, onDrillDown }) => {
    if (!drilldownView) {
      return (<span>{label}</span>)
    }

    return (
      <button className="rbc-link" onClick={onDrillDown}>
        {label}
      </button>
    )
}

DateHeader.propTypes = {
  label: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  drilldownView: PropTypes.string,
  onDrillDown: PropTypes.func,
  isOffRange: PropTypes.bool
}

export default DateHeader
