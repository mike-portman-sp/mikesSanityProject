import { linkProjection } from "./linkProjection";

export const buttonQuery = `
  _key,
  _type,
  title,
  style,
  targetBlank,
  link{
    ${linkProjection}
  }
`;
