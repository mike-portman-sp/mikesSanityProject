type HeadingProps = {
  level?: number;
  text?: string;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Heading({ level, text }: HeadingProps) {
  const Tag = `h${level ?? 2}` as HeadingTag;
  return <Tag>{text}</Tag>;
}
