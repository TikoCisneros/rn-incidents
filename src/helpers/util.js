const numerationsRemoval = (data) => {
  const words = data.split(' ');

  if (words.length === 1){
    return data;
  }

  words.shift();
  return words.join(' ');
};

// eslint-disable-next-line import/prefer-default-export
export { numerationsRemoval };
