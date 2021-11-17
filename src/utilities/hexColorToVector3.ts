import { Vector3 } from "three";

export const hexColorToVector3 = (color: string): Vector3 => {
  color = color[0] === "#" ? color.slice(1, 8) : color.slice(0, 7);
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);
  return new Vector3(red / 255.0, green / 255.0, blue / 255.0);
};
