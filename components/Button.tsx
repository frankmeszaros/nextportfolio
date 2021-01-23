import { MouseEvent } from "react";

interface ButtonProps {
  backgroundColor?: string;
  className?: string;
  content: React.ReactNode | string;
  onClick: (e: MouseEvent) => void;
  primary?: boolean;
  round?: boolean;
  secondary?: boolean;
  secondaryColor?: string;
  textColor?: string;
}

const Button = ({
  backgroundColor,
  className,
  content,
  onClick,
  primary,
  round,
  secondary,
  secondaryColor,
  textColor,
}: ButtonProps) => {
  const primaryButton = primary
    ? `${backgroundColor || "bg-primary"} ${textColor || "text-white"}`
    : "";
  const secondaryButton = secondary ? `border ${secondaryColor}` : "";
  const rounded = round ? "rounded-full" : "rounded";
  const baseStyle = className ? className : "p-2 font-semibold shadow";

  return (
    <button
      className={[baseStyle, rounded, primaryButton, secondaryButton].join(" ")}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: "",
  className: "",
  priamry: false,
  secondary: false,
  secondaryColor: "text-primary border-primary",
  textColor: "",
};

export default Button;
