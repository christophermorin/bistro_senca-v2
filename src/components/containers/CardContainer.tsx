import * as React from 'react';
import clsx from 'clsx';

type CardsContainerProps = {
  className?: string,
  children?: React.ReactNode;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({className, children}) => {
  return (
  <section
    className={clsx("p-6 md:p-24 lg:p-32", className)}
  >
    {children}
  </section>
  )
} 