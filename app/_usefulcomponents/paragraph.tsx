type ParagraphProps = React.ComponentPropsWithRef<"p">;
export default function Paragraph({
  ref,
  className,
  children,
}: ParagraphProps) {
  return (
    <p
      ref={ref}
      className={`${className} md:text-left md:ml-auto md:mx-0 mx-auto text-center  text-primary font-syneRegular sm:text-xl text-base`}
    >
      {children}
    </p>
  );
}
