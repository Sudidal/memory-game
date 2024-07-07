function playSound(path) {
  const sound = new Audio();
  sound.src = path;
  sound.play();
}

export { playSound };
