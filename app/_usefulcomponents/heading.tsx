type HeadingProps = React.ComponentPropsWithRef<"h2">;
export default function Heading({ className, children }: HeadingProps) {
  return (
    <h2
      className={`${className} md:text-left md:mb-0 mb-5 md:mx-0 mx-auto text-center font-syneBold sm:text-[3.5rem] sm:leading-[4.5rem] text-[2.5rem] leading-[3rem]`}
    >
      {children}
    </h2>
  );
}
