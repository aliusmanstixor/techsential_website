import Image from "next/image";

export default function SecondColumn() {
  return (
    <div className="flex lg:flex-col lg:col-start-2 lg:col-end-3 lg:row-end-2 lg:row-start-1 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 md:flex-row -mt-10 gap-y-5 items-center md:self-end flex-col  sm:items-end">
      <div className="w-full h-full">
        <Image
          src={"/header/laptop.png"}
          width={401}
          height={434}
          quality={100}
          alt="grid png"
          className="object-cover w-full h-full  lg:scale-125 lg:-ml-5 lg:mb-10"
        />
      </div>
      <div className="w-full h-full">
        <Image
          src={"/header/graph.png"}
          width={309}
          height={221}
          quality={100}
          alt="graph png"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

// color: transparent;
// scale: 1.3;
// margin-bottom: 50px;
// margin-left: -20px;
// margin-top: 50px;
