type HeadingProps = React.ComponentPropsWithRef<"h1">;
export default function SubHeading({ className, children }: HeadingProps) {
  return (
    <h1
      className={`${className} max-w-[41.75rem]  md:mb-0 mb-5 md:mx-0 mx-auto text-center font-syneBold sm:text-[4rem] sm:leading-[4.75rem] text-[2.5rem] leading-[3rem]`}
    >
      {children}
    </h1>
  );
}
