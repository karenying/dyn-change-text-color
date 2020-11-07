export const textColors = {
  BLACK: '000000',
  WHITE: 'ffffff',
};

// calculates contrast ratio between two hex strings
export function contrastRatioPair(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);

  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

// takes in hex string and converts to decimal number
function hexToDecimal(hex_string) {
  return parseInt(hex_string, 16);
}

/* converts a hex string to an object with 'r', 'g', 'b' 
as the keys and their respective values */
function hexToRGB(hex) {
  const r = hexToDecimal(hex.substring(0, 2));
  const g = hexToDecimal(hex.substring(2, 4));
  const b = hexToDecimal(hex.substring(4, 6));

  return { r, g, b };
}

// calculates relative luminance given a hex string
export function getLuminance(hex) {
  const rgb = hexToRGB(hex);

  for (const key in rgb) {
    let c = rgb[key];
    c /= 255;

    c = c > 0.03928 ? Math.pow((c + 0.055) / 1.055, 2.4) : (c /= 12.92);

    rgb[key] = c;
  }

  return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
}
