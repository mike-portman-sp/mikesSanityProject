import { linkProjection } from "./linkProjection";

export const footerQuery = `
  title,
  advancedText{
    content[]
  },
  footerItems[]{
    _key,
    _type,
    title,
    link{
      ${linkProjection}
    }
  }
`;
