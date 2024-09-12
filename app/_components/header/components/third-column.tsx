import Image from "next/image";

export default function ThirdColumn() {
  return (
    <div className="lg:flex lg:col-start-3 lg:col-end-4 lg:row-end-2 lg:row-start-1  gap-y-10  block  lg:flex-col flex-row sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 md:justify-self-center">
      <div className="w-full h-full ">
        <Image
          src={"/header/office.png"}
          width={308}
          height={468}
          alt="techsential offile png"
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-right lg:block hidden">
        <h3 className="xl:text-5xl text-2xl text-secondary font-semibold xl:mb-5 font-inter mb-2">
          5431+
        </h3>
        <p className="xl:text-xl text-primary text-base">
          Success Stories of partners and clients, across the world.
        </p>
      </div>
    </div>
  );
}
