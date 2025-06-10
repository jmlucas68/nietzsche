
import React, { forwardRef, ReactNode } from 'react';

interface SectionContainerProps {
  title: string;
  children: ReactNode;
  titleClassName?: string;
  className?: string;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ title, children, titleClassName = "text-3xl font-bold text-gray-800 mb-6", className = "mb-12 py-8" }, ref) => {
    return (
      <section ref={ref} className={className}>
        <h2 className={`${titleClassName} mb-8`}>{title}</h2>
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
