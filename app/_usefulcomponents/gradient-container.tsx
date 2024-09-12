type GradientContainerProps = React.ComponentPropsWithRef<"div">;
export default function GradientContainer({
  className,
  children,
}: GradientContainerProps) {
  return (
    <div
      className={`w-full max-w-[82.5rem] mt-10 rounded-[2rem] bg-gradient-to-br from-[#5037E4] to-[#A576FF] mx-auto opacity-80 ${className}`}
    >
      {children}
    </div>
  );
}
