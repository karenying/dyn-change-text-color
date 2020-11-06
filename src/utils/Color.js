import { textColors, contrastRatioPair, getLuminance } from './helper';

export default class Color {
  // takes in hex string without '#'
  constructor(hex) {
    this.hex = hex;
  }

  // returns luminance as a number between 0 and 1
  get luminance() {
    return getLuminance(this.hex);
  }

  /* returns contrast ratio with a second color,
  calls contrastRatioPair */
  contrastRatioWith(hex2) {
    return contrastRatioPair(this.hex, hex2);
  }

  // returns either textColors.BLACK / WHITE
  get textColor() {
    const { BLACK, WHITE } = textColors;

    return this.contrastRatioWith(BLACK) > this.contrastRatioWith(WHITE)
      ? BLACK
      : WHITE;
  }
}
