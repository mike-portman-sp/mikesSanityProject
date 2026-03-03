import { ExternalLink } from 'lucide-react';
import { getLinkUrl } from "../utils/linkHelpers";
import { getButtonStyles } from "../utils/buttonStyles";
import type { ButtonField } from "../../types/sanity";

type ButtonProps = {
  button: ButtonField;
};

export default function Button({ button }: ButtonProps) {
  return (
    
     <a href={getLinkUrl(button.link)}
      target={button.targetBlank ? '_blank' : '_self'}
      rel={button.targetBlank ? 'noopener noreferrer' : undefined}
      className={getButtonStyles(button.style)}
    >
      {button.title}   {button.link?.linkType === 'external' && <ExternalLink size={16} />}
    </a>
  );
}