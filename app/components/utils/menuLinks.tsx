import { getLinkUrl } from "./linkHelpers";
import type { LinkField } from "../../types/sanity";

type MenuLink = {
  _key: string;
  _type: string;
  title: string;
  link?: LinkField;
};

type MenuLinksProps = {
  items: MenuLink[];
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function MenuLinks({
  items,
  className = "",
  linkClassName = "",
  onLinkClick,
}: MenuLinksProps) {
  return (
    <nav className={className}>
      {items.map((item) => (
        <a
          key={item._key}
          href={getLinkUrl(item.link)}
          className={linkClassName}
          onClick={onLinkClick}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}