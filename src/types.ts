export interface LogoSettings {
  color: {
    outerRadius: number;
    outerX: number;
    outerY: number;
    circleRadius: number;
    greenX: number;
    greenY: number;
    redX: number;
    redY: number;
    blueX: number;
    blueY: number;
  };
  mono: {
    outerRadius: number;
    outerX: number;
    outerY: number;
    strokeWidth: number;
    outerStrokeWidth: number;
  };
}

// 'cropped' = the color prism tightly cropped to its outer circle (no padding) —
// use it for inline composition (og:image, README hero, nav) so the mark renders
// at a predictable size next to other logos.
export type LogoVariant = 'color' | 'mono' | 'white' | 'cropped' | 'animated';
export type LogoFormat = 'svg' | 'dataUrl' | 'base64';

export interface LogoOptions {
  variant?: LogoVariant;
  format?: LogoFormat;
  size?: number;
}