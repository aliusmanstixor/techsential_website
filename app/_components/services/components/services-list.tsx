import Image from "next/image";

export default function ServicesList() {
  return (
    <div className="grid md:grid-cols-2  grid-cols-1 gap-7 justify-items-center">
      {[
        "Web development",
        "App Development",
        "Blockchain Development",
        "AI &ML Development",
        "UI/UX Design",
        "Digital Marketing",
      ].map((service, index) => {
        return (
          <div key={index} className={`w-full p-7  rounded-[32px] bg-services`}>
            <div className="flex justify-between items-center ">
              <div className="lg:basis-[120px]  lg:h-[120px] md:basis-[100px] md:h-[100px] sm:h-[90px] sm:basis-[90px] h-[70px] w-[70px] bg-secondary flex justify-center items-center rounded-2xl">
                <Image
                  src={`/services/icon${index + 1}.svg`}
                  height={78}
                  width={78}
                  alt="Services Icons"
                  quality={100}
                  className="object-cover lg:p-3 p-5"
                />
              </div>
              <h3 className="text-right lg:max-w-[250px] md:max-w-[200px] max-w-[180px] text-secondary lg:text-[40px] lg:leading-[52px]  sm:text-3xl text-[23px] font-semibold">
                {service}
              </h3>
            </div>
            <div className="w-full  rounded-2xl ">
              <Image
                src={`/services/image${index + 1}.png`}
                height={566}
                width={468}
                alt=" Services Images png"
                quality={100}
                className="mx-auto w-full   md:mt-10 mt-5 rounded-2xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
