import { cn } from "@/lib/utils";
import React from "react";
import { useEffect, useState } from "react";

interface PushToTalkButtonProps {
  className?: string;
  onPushToTalk: () => void;
  onRelease: () => void;
}

function PushToTalkButton({
  onPushToTalk,
  onRelease,
  className,
}: PushToTalkButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " " && !isPressed) {
        setIsPressed(true);
        onPushToTalk();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === " " && isPressed) {
        setIsPressed(false);
        onRelease();
      }
    };

    const handleMouseDown = () => {
      if (!isPressed) {
        setIsPressed(true);
        onPushToTalk();
      }
    };

    const handleMouseUp = () => {
      if (isPressed) {
        setIsPressed(false);
        onRelease();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // You can attach these mouse event listeners to the button element.
    // Make sure to pass a ref to the button and use that ref here.
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      buttonElement.addEventListener("mousedown", handleMouseDown);
      buttonElement.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      if (buttonElement) {
        buttonElement.removeEventListener("mousedown", handleMouseDown);
        buttonElement.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [isPressed, onPushToTalk, onRelease]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] transition-colors",
        isPressed &&
          "bg-red-600 shadow-none translate-x-[3px] translate-y-[3px]",
        className
      )}
    >
      {isPressed ? "Speaking" : "Push to talk"}
    </button>
  );
}

export default PushToTalkButton;
