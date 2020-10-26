import React from 'react';
import { FeedList } from './feed.styles';
import PrincipalNews from './principalNews';
import SecondaryNews from './secondaryNews';

const INITIAL_INDEX = 0;

const renderItem = ({ item, index }) => {
  if (index === INITIAL_INDEX) {
    return <PrincipalNews {...item} />;
  }

  return <SecondaryNews {...item} />;
};

const Feed = ({ data }) => (
  <FeedList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
  />
);

export default Feed;