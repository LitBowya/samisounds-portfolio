import Home from "./sections/Home";
import AboutMe from "@/app/sections/AboutMe";
import MyWorks from "@/app/sections/MyWorks";
import MyWorksPreload from "@/components/MyWorksPreload";
import ContactUs from "@/app/sections/ContactUs";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <MyWorksPreload />
      <MyWorks />
      <ContactUs />
      <Footer />
    </>
  );
};
export default Page;
