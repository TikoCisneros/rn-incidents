import React, { useLayoutEffect } from 'react';

import FeedDetails from '../../components/feedDetails';
import NavButton from '../../components/common/navButton';
import Icons from '../../styles/icons';

const FeedDetail = ({
  route: {
    params: { item },
  },
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavButton iconName={Icons.share} onPress={() => alert('Compartir')} />
      ),
    });
  }, [navigation]);

  return <FeedDetails {...item} />;
};

export default FeedDetail;
