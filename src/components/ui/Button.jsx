import React from "react";

const Button = ({
  children,
  className,
}) => {
  return (
    <div className={`px-6 py-2 bg-black text-white ${className}`}>
      {children}
    </div>
  );
};

export default Button;
