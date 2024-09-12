import BookingCard from "./booking-card";
import ThirdColumn from "./third-column";
import SecondColumn from "./second-column";

export default function Grid() {
  return (
    <div className="grid gap-5 lg:grid-cols-[2fr,1fr,1fr]  md:grid-cols-[2fr,1fr] md:grid-rows-[21.875rem,1fr] lg:mt-0 mt-10 grid-cols-1  lg:grid-rows-1 items-center lg:items-end">
      <BookingCard />
      <SecondColumn />
      <ThirdColumn />
    </div>
  );
}
