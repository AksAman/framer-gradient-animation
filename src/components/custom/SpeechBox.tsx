import React from "react";
import { cn } from "@/lib/utils";
import PushToTalkButton from "@/components/custom/PushToTalk";
import { Input } from "@/components/ui/input";

interface SpeechBoxProps {}

const SpeechBox: React.FC<SpeechBoxProps> = () => {
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  const gradientRef1 = React.useRef<HTMLDivElement>(null);
  const gradientRef2 = React.useRef<HTMLDivElement>(null);
  const gradientRef3 = React.useRef<HTMLDivElement>(null);

  const toggleSpeaking = () => {
    setIsSpeaking((prev) => !prev);
    [gradientRef1, gradientRef2, gradientRef3].forEach((ref) => {
      if (ref.current) {
        ref.current.classList.toggle("grad-active");
      }
    });
    return;
  };

  const handlePushToTalk = () => {
    console.log("Push to talk action");
    // Add your custom push-to-talk logic here
    toggleSpeaking();
  };

  const handleRelease = () => {
    console.log("Release action");
    // Add your custom release logic here
    toggleSpeaking();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " ") {
      event.stopPropagation();
    }
  };

  return (
    <div className="flex-center min-h-screen bg-gray-s relative">
      <div className=" flex-center w-full h-screen  rounded-md relative isolate">
        <div
          className={cn(
            "absolute inset-0 grad grad-1"
            // isSpeaking && "grad-active"
          )}
          ref={gradientRef1}
        ></div>
        <div
          className={cn(
            "absolute inset-0 grad grad-2"
            // isSpeaking && "grad-active"
          )}
          ref={gradientRef2}
        ></div>
        <div
          className={cn(
            "absolute inset-0 grad grad-3"
            // isSpeaking && "grad-active"
          )}
          ref={gradientRef3}
        ></div>
        <div className="text-black font-bold text-6xl z-[1]">
          Hello
          <span className=" animate-pulse ">!</span>
        </div>
      </div>

      <div className="absolute bottom-20 flex-center w-fit px-4 gap-2 ">
        {/* <NeuButton  onClick={onSpeakClicked}>Speak</NeuButton> */}
        <PushToTalkButton
          className="w-[200px]"
          onPushToTalk={handlePushToTalk}
          onRelease={handleRelease}
        />
        <Input onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
};

export default SpeechBox;
