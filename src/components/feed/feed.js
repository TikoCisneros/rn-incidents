import React from 'react';
import { FeedList } from './feed.styles';
import PrincipalNews from './principalNews';
import SecondaryNews from './secondaryNews';
import InfoPrompt from './infoPrompt';

const INITIAL_INDEX = 0;

const Feed = ({ data, onItemPress, promptVisible, onHidePrompt }) => {
  const renderItem = ({ item, index }) => {
    if (index === INITIAL_INDEX) {
      return <PrincipalNews {...item} onPress={() => onItemPress(item)} />;
    }

    return <SecondaryNews {...item} onPress={() => onItemPress(item)} />;
  };

  return (
    <>
      <FeedList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <InfoPrompt visible={promptVisible} onHidePrompt={onHidePrompt} />
    </>
  );
};

export default Feed;
