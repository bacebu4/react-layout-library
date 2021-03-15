import React from "react";
import { withLayoutStyles } from "react-layout-library";

const FunctionComponentButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <button className={className} type="button">
      hey
    </button>
  );
};

export const FunctionComponentButtonWithStyles = withLayoutStyles(
  FunctionComponentButton
);
