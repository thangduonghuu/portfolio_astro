import type { ElementType, ComponentPropsWithoutRef } from 'react';
import cn, { type Argument as CSSClassAttribute } from 'classnames';

import '@/assets/sass/components/core/button.scss';

type Props<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C;
  variant?: 'primary' | 'secondary' | 'tertiary';
  light?: boolean;
  className?: CSSClassAttribute;
};

export default <C extends ElementType>({
  as,
  variant = 'primary',
  light = false,
  className,
  children,
  ...attrs
}: Props<C>) => {
  const Component = as || 'button';
  return (
    <Component
      {...attrs}
      className={cn(['button', `button--${variant}`, { 'button--light': light }, className])}
    >
      <span>{children}</span>
    </Component>
  );
};
