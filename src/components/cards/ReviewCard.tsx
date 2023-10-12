import * as React from "react";
import clsx from "clsx";

type ReviewCardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 justify-items-center gap-6 py-9  bg-black rounded-md shadow-md shadow-black text-white z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ReviewCardTitle: React.FC<ReviewCardProps> = ({
  className,
  children,
}) => {
  return <h4 className={clsx("", className)}>{children}</h4>;
};

export const ReviewCardBody: React.FC<ReviewCardProps> = ({
  className,
  children,
}) => {
  return (
    <p className={clsx("text-center font-medium w-2/3", className)}>
      {children}
    </p>
  );
};

export const ReviewCardAuthor: React.FC<ReviewCardProps> = ({
  className,
  children,
}) => {
  return <p className={clsx("place-self-end mr-10", className)}>{children}</p>;
};
