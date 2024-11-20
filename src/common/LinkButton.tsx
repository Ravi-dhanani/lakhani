type Props = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  textSize?: "small" | "medium" | "large";
  textColor?: "primary" | "secondary" | "default";
  icon?: React.ReactNode;
};

export default function LinkButton({
  className,
  icon,
  children,
  textSize = "medium",
  textColor = "default",
}: Props) {
  let textColorClass;
  let textSizeClass;
  switch (textColor) {
    case "primary":
      textColorClass =
        "bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text";
      break;
    case "secondary":
      textColorClass = "text-[#57007B]";
      break;
    default:
      textColorClass = "text-black";
  }

  switch (textSize) {
    case "small":
      textSizeClass = "text-sm";
      break;
    case "large":
      textSizeClass = "text-lg";
      break;
    default:
      textSizeClass = "text-base";
  }

  return (
    <div className="group/main flex items-center cursor-pointer">
      <button
        className={`relative inline-flex items-center gap-x-1 font-medium ${
          className ? className : ""
        } ${textColorClass} ${textSizeClass}`}
      >
        {children}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/main:w-full"></span>
      </button>
      <div className="transition duration-300 group-hover/main:translate-x-1">
        {icon}
      </div>
    </div>
  );
}
