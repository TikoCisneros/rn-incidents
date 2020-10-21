import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import PropTypes from 'prop-types';

import Palette from '../../../styles/palette';

const customStyles = {
  wrapper: { backgroundColor: Palette.outerSpace },
  draggableIcon: { backgroundColor: Palette.secondary500 },
  container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
};

const BottomSheet = React.forwardRef(
  ({ height, children, ...otherProps }, ref) => (
    <RBSheet
      ref={ref}
      animationType="slide"
      closeOnDragDown
      closeOnPressMask={false}
      height={height}
      customStyles={customStyles}
      {...otherProps}>
      {children}
    </RBSheet>
  ),
);

BottomSheet.propTypes = {
  height: PropTypes.number.isRequired,
};

export default BottomSheet;
