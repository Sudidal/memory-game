function scatter(arr) {
  const length = arr.length;
  let newArr = Array(length);
  let indexes = Array(length - 1);

  for (let i = 0; i < length; i++) {
    indexes[i] = i;
  }

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * indexes.length);
    newArr[i] = arr[indexes[random]];
    indexes.splice(random, 1);
  }

  return newArr;
}

export { scatter };
