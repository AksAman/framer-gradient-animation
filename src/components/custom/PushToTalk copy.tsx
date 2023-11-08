import { cn } from "@/lib/utils";
import React from "react";

interface PushToTalkButtonProps extends React.ComponentProps<"button"> {}

function Button({ children, className, ...props }: PushToTalkButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-2 font-medium bg-indigo-500 text-white w-fit shadow-[3px_3px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
