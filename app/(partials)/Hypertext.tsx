import HyperText from "@/components/ui/hyper-text";

export function HyperTextDemo() {
  return (
    <HyperText
      // className="text-5xl sm:text-8xl font-bold whitespace-pre-wrap"
      className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-t from-[#e6f429] to-green-500 bg-clip-text text-center text-9xl font-bold leading-none tracking-tighter text-transparent"
      text="Gallery Arts"
    />
  );
}
