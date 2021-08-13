onmessage = function (e) {
  const [width, height, pixels, id] = e.data;
  let counter = 1;
  for (let r = 8; r <= 256; r += 8) {
    for (let g = 8; g <= 256; g += 8) {
      for (let b = 8; b <= 256; b += 8) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const off = (y * id.width + x) * 4;
        pixels[off] = r;
        pixels[off + 1] = g;
        pixels[off + 2] = b;
        pixels[off + 3] = 255;
        if (x > width / 2) {
          pixels[off + 3] = 255 * (1 - x / 10);
        }
        console.log(
          `R, G, B values for each pixel ${counter}`,
          r,
          g,
          b,
          "\n",
        );
        counter += 1;
      }
    }
  }
  postMessage([pixels]);
};
