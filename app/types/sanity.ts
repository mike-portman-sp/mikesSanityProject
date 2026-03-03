export type LinkField = {
  _type?: string;
  linkType: "internal" | "external" | "file";
  external?: string;
  openInNewTab?: boolean;
  internal?: {
    slug?: {
      current: string;
    };
  };
  file?: {
    asset?: {
      url?: string;
    };
  };
};

export type ButtonField = {
  _key?: string;
  _type?: string;
  title: string;
  style?: string;
  targetBlank?: boolean;
  link?: LinkField;
};

export type ContentBlock = {
  _key: string;
  _type: string;
  [key: string]: unknown;
};
