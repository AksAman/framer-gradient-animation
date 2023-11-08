import PushToTalkButton from "@/components/custom/PushToTalk";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface FramerSpeechBoxProps {}

const DURATION = {
  TOTAL: 1,
};

const FramerSpeechBox: React.FC<FramerSpeechBoxProps> = () => {
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const toggleSpeaking = () => {
    setIsSpeaking((prev) => !prev);
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
    <>
      <div className="">
        <AnimatePresence initial={false}>
          {isSpeaking && (
            <>
              <motion.div
                className="absolute inset-8 grad grad-1 border border-yellow-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: DURATION.TOTAL,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key="grad-1"
              ></motion.div>
              <motion.div
                className="absolute inset-8 grad grad-2 border border-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: DURATION.TOTAL,
                  ease: "easeInOut",
                  delay: DURATION.TOTAL * 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key="grad-2"
              ></motion.div>
              <motion.div
                className="absolute inset-8 grad grad-3 border border-red-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: DURATION.TOTAL,
                  ease: "easeInOut",
                  delay: DURATION.TOTAL * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key="grad-3"
              ></motion.div>
            </>
          )}
        </AnimatePresence>
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
    </>
  );
};

export default FramerSpeechBox;
