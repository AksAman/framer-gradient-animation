import FramerSpeechBox from "./components/custom/FramerSpeechBox";
export default function App() {
  return (
    <div className="flex-center min-h-screen bg-gray-800 relative ">
      <FramerSpeechBox />
      <div className="text-black font-bold text-6xl z-[1] w-full flex-center">
        Hello
        <span className=" animate-pulse ">!</span>
      </div>
    </div>
  );
}
