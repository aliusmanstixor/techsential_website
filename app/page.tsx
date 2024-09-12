import Footer from "./_components/footer";
import ContactUs from "./_components/footer/components/contact-us";
import FQA from "./_components/footer/components/fqa";
import Header from "./_components/header";
import Partners from "./_components/partners";
import Project from "./_components/project";
import Services from "./_components/services";
import Stack from "./_components/stack";
import Work from "./_components/work";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto ">
        <Header />
        <Partners />
        <Work />
        <Services />
        <Stack />
        <Project />
      </main>
      <Footer>
        <FQA />
        <ContactUs />
      </Footer>
    </>
  );
}
