const numerationsRemoval = (data) => {
  const words = data.split(' ');
  words.shift();
  return words.join(' ');
};

export { numerationsRemoval };
