type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  bgColor?: "primary" | "secondary" | "default";
  size?: "small" | "medium" | "large";
  textColor?: "white" | "black" | "gray" | "default";
};

export default function Button({
  onClick,
  className,
  children,
  bgColor = "default",
  size = "medium",
  textColor = "white",
}: ButtonProps) {
  let colorClass;
  let hoverClass;
  switch (bgColor) {
    case "primary":
      colorClass = "bg-primary";
      hoverClass =
        "bg-gradient-to-r from-[#F76680]  to-[#57007B] animate-gradient";
      break;
    case "secondary":
      colorClass =
        "bg-gradient-to-r from-[#57007B]  to-[#6675F7] animate-gradient";
      break;
    default:
      colorClass = "bg-[#3D63EA]";
      hoverClass = "hover:bg-[#213782] transition-all duration-300 delay-150";
  }

  let sizeClass;
  switch (size) {
    case "small":
      sizeClass = "px-3 py-2 text-xs";
      break;
    case "large":
      sizeClass = "px-8 py-4 text-lg";
      break;
    default:
      sizeClass = "px-5 py-3 text-sm";
  }

  let textColorClass;
  switch (textColor) {
    case "black":
      textColorClass = "text-black";
      break;
    case "gray":
      textColorClass = "text-gray-600";
      break;
    default:
      textColorClass = "text-white";
  }

  return (
    <button
      onClick={onClick}
      className={`text-sm font-semibold rounded-[5px] shadow-lg px-[25px] py-[14px] ${hoverClass} ${textColorClass} ${colorClass} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
}
