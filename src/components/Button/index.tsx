import { ArrowDown } from "@phosphor-icons/react";

import { TypeButton } from "./button.type";

import { TvButton } from "./styles";

export const Button = ({ children, withIcon, styles, ...rest }: TypeButton) => {
  const { base, span, icon } = TvButton();
  return (
    <button
      className={`${base({
        styles: styles,
      })} group transition-transform duration-300`}
      {...rest}
    >
      {withIcon && (
        <div className={icon({ styles: styles })}>
          <ArrowDown
            size={24}
            className="rotate-[-50deg] group-hover:rotate-0 transition-transform duration-300"
          />
        </div>
      )}
      <span className={span({ styles: styles })}>{children}</span>
    </button>
  );
};
