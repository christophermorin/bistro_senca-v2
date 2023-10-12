import * as React from "react";
import clsx from "clsx";

type SpecialsCardProps = {
  className?: string;
  children?: React.ReactNode;
};

type SpecialsBodyProps = {
  day: string;
  body: string;
};

export const SpecialsCard: React.FC<SpecialsCardProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx("flex gap-5 md:justify-center", className)}>
      {children}
    </div>
  );
};

export const SpecialsImg: React.FC<SpecialsCardProps> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx("w-20 h-20 bg-gray-300 rounded-full", className)}>
      {children}
    </div>
  );
};

export const SpecialsBody: React.FC<SpecialsBodyProps> = ({ day, body }) => {
  return (
    <div className="w-2/3">
      <h3 className="text-white text-xl font-bold">{day}</h3>
      <p className="text-white font-light">{body}</p>
    </div>
  );
};
