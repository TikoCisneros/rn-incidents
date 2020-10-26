import React from 'react';
import FeedComponent from '../../components/feed';

const newsData = Array(15)
  .fill()
  .map((_item, index) => ({
    id: `${index + 1}`,
    title: `Título de noticia demo ${index + 1}`,
    date: '21 jun 20',
    uri: 'https://dummyimage.com/960x540/000/fff',
  }));

const Feed = () => <FeedComponent data={newsData} />;

export default Feed;
