import React from 'react';
import FeedDetails from '../../components/feedDetails';

const FeedDetail = ({
  route: {
    params: { item },
  },
}) => <FeedDetails {...item} />;

export default FeedDetail;
