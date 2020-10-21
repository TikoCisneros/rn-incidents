/* eslint-disable no-underscore-dangle */
import React from 'react';
import BottomSheet from '../../common/bottomSheet';
import Typography from '../../common/typography';

import { ItemContainer, ItemsList } from './bottomSheetSelectList.styles';

import { getDeviceHeight } from '../../../common/util';

const height = getDeviceHeight() / 2;

const BottomSheetSelectList = React.forwardRef(
  ({ onItemPress, items }, ref) => {
    const renderItem = ({ item, item: { value } }) => (
      <ItemContainer onPress={() => onItemPress(item)}>
        <Typography>{value}</Typography>
      </ItemContainer>
    );

    return (
      <BottomSheet ref={ref} height={height}>
        <ItemsList
          data={items}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      </BottomSheet>
    );
  },
);

export default BottomSheetSelectList;
