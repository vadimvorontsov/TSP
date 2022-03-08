function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomPoints(count: number, maxX = 100, maxY = 100) {
  return new Array(count).fill(0).map(() => {
    const x: number = randomInt(1, maxX - 1);
    const y: number = randomInt(1, maxY - 1);
    count -= 1;

    return { x: x, y: y, id: count };
  });
}
