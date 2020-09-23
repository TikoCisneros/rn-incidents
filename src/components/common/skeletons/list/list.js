import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './listItem/listItem';

const List = ({ numberOfItems, isLoading, children }) => {
  if (isLoading) {
    return [...new Array(numberOfItems)].map((_item, index) => (
      <ListItem key={`li-${index + 1}`} />
    ));
  }

  return children;
};

List.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default List;
