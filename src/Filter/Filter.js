import React from 'react';
import { connect } from 'react-redux'
import { enableFilter, disableFilter } from '../redux/actions'
import Title from '../Title/Title';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      if (ownProps.isEnabled) {
        dispatch(disableFilter(ownProps.id))
      } else {
        dispatch(enableFilter(ownProps.id))
      }
    }
  }
}

const Filter = ({type, value, isEnabled, onClick}) => {
  const classname = isEnabled ? 'isEnabled' : ''
  return (
    <li className={classname} onClick={onClick}>{value}</li>
  )
}

const FilterContainer = connect(null, mapDispatchToProps)(Filter)

const propTransformSort = prop => transform => {
  return (...props) => {
    const [ left, right ] = props.map(prop).map(transform)
    return ((left < right) ? -1 : ((left > right) ? 1 : 0))
  }
}

const FilterType = ({type, items}) => {
  return (
    <div className="filter">
      <Title title={type} level="3" />
      <ul>
        {
          items
            .sort(propTransformSort(x => x.value)(x => x.toLowerCase()))
            .map(filter => <FilterContainer key={filter.value} {...filter} /> )
        }
      </ul>
    </div>
  )
}

export default FilterType;
