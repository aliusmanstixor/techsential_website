import type { NavItems, WorkLists, FaqData } from "@/lib/type";

export const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about-us" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
] as NavItems[];

export const workList = [
  {
    number: "689M",
    title: "Happy Customer",
  },
  {
    number: "4.9/5",
    title: "Average Rating",
  },
  {
    number: "689M",
    title: "Features",
  },
  {
    number: "689M",
    title: "Active Users",
  },
] as WorkLists[];
export const faqData = [
  {
    question: "What does TECHSENTIAL specialize in?",
    answer:
      "TECHSENTIAL specializes in providing a comprehensive range of technology solutions, including AI services, App Development, Blockchain expertise, Website Design and Development, Digital Marketing, and N solutions.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "The cost of our services varies depending on the project scope and requirements. We offer customized solutions, tailored to each client's specific needs. To get an accurate quote, we encourage you to reach out to our team and discuss your project in detail.",
  },
  {
    question: "Do you charge any hidden fees?",
    answer:
      "No, we believe in transparency and honesty. We do not have any hidden fees. We provide a detailed breakdown of the costs involved before starting any project, so you know exactly what to expect.",
  },
  {
    question: "How do you ensure the quality of your products?",
    answer:
      "At Techsential, we have a rigorous quality assurance process. Our team of experienced professionals follows industry best practices and conducts thorough testing at every stage of development. We strive to deliver high-quality products that meet or exceed our clients' expectations.",
  },
  {
    question: "What if I am not satisfied with the product's quality?",
    answer:
      "Client satisfaction is our top priority. If you are not satisfied with the quality of our product, we offer revisions to address any concerns. Our team will work closely with you to ensure that the final product meets your expectations.",
  },
  {
    question: "How can I get started with Techsential?",
    answer:
      "Contact us today for a free consultation! We'll discuss your project goals, assess your needs, and provide you with a personalized quote. We're excited to help you achieve your technology success!",
  },
] as FaqData[];

export const quickLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Case Studies", path: "/" },
  { title: "Process", path: "/" },
  { title: "Resources", path: "/" },
  { title: "Contact", path: "/" },
] as NavItems[];

export const itServices: NavItems[] = [
  { title: "Software Development", path: "/" },
  { title: "Web Development", path: "/" },
  { title: "App Development", path: "/" },
  { title: "AI & ML Development", path: "/" },
  { title: "Blockchain Development", path: "/" },
  { title: "QA Testing & Automation", path: "/" },
  { title: "Web Design", path: "/" },
  { title: "Digital Marketing", path: "/" },
];
export const contactLinks = [
  {
    title: "Email: contact@techsential.com",
    path: "mailto:contact@techsential.com",
  },
  { title: "Phone: +123-456-7890", path: "tel:+1234567890" },
  {
    title: "Location",
    path: "https://www.google.com/maps/place/Central+Park,+New+York,+NY,+USA",
  },
  { title: "Privacy Policy", path: "/" },
] as NavItems[];

export const socialLinks = [
  { title: "Instagram", path: "" },
  { title: "Linkedin", path: "" },
  { title: "Twitter", path: "" },
  { title: "Github", path: "" },
] as NavItems[];
