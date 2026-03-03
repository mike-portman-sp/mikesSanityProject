export const linkProjection = `
  _type,
  linkType,
  external,
  openInNewTab,
  internal->{ slug{ current } },
  file{
    asset->{
      url
    }
  }
`;
