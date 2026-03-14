export const linkProjection = `
  _type,
  linkType,
  external,
  openInNewTab,
  internal->{ _type, slug{ current } },
  file{
    asset->{
      url
    }
  }
`;
