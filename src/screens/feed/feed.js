import React from 'react';
import FeedComponent from '../../components/feed';

import { FeedsScreens } from '../../navigation/screens';

const newsData = Array(15)
  .fill()
  .map((_item, index) => ({
    id: `${index + 1}`,
    title: `Título de noticia demo ${index + 1}`,
    info: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis arcu erat. Cras posuere fringilla ipsum quis fringilla. Nulla fringilla erat vitae nisi venenatis, ac mollis massa tristique. Nulla viverra nulla sit amet facilisis maximus. Morbi dapibus augue ac ullamcorper pulvinar. Nulla fringilla id massa eget gravida. Duis vel posuere arcu. Proin aliquam vestibulum tellus eu pretium. Etiam bibendum hendrerit velit, eu bibendum diam imperdiet eu. Suspendisse in leo a odio consequat porta sit amet vel mauris. Morbi ut accumsan ipsum. Vestibulum eleifend justo vel varius lobortis. Morbi pretium semper sapien, vitae convallis libero tempor nec.',
      'Nam et turpis pharetra, porta orci non, congue metus. Etiam hendrerit, ligula et tincidunt consequat, nunc nibh fermentum tortor, at semper libero diam nec urna. Pellentesque vulputate fringilla lectus eu gravida. Suspendisse metus dolor, interdum vitae egestas vitae, varius at lorem. Integer lorem nisl, imperdiet at nisi sit amet, vestibulum efficitur sem. Donec ante nulla, tempor eget quam vel, mollis tristique magna. Sed maximus eget lorem ut pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'In quis dui eu felis venenatis egestas. Quisque malesuada eros libero, quis luctus dui tempor vitae. Morbi mauris magna, accumsan vel volutpat et, mattis sed tellus. Quisque ut cursus sapien. Mauris porttitor arcu nec leo molestie iaculis. Cras imperdiet sem quis gravida dapibus. Donec vitae commodo enim, at tincidunt mauris. Vestibulum sit amet imperdiet augue, at feugiat eros.',
    ],
    date: '21 jun 20',
    uri: 'https://dummyimage.com/960x540/D4D8E1/000',
    author: 'Demo Author',
  }));

const Feed = ({ navigation: { push } }) => {
  const handleItemPress = (item) => push(FeedsScreens.FeedDetail, { item });

  return <FeedComponent data={newsData} onItemPress={handleItemPress} />;
};

export default Feed;
