import Hero from "./components/Hero";
import ShippingIssues from "./components/ShippingIssues";
import ComparisonTable from "./components/ComparisonTable";
import SuccessStories from "./components/SuccessStories";
import CustomerService from "./components/CustomerService";
import PostPurchase from "./components/PostPurchase";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Integrations from "./components/Integrations";
import Navbar from "./components/Navbar";
import CustomerLoyalty from "./components/CustomerLoyalty";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShippingIssues />
      <CustomerLoyalty />
      <PostPurchase />
      <div id="how-we-work">
        <HowItWorks />
      </div>
      <CustomerService />
      <div id="case-studies">
        <SuccessStories />
      </div>
      <Integrations />
      <Testimonials />
      <ComparisonTable />
      <div id="file-a-claim">
        <Footer />
      </div>
    </>
  );
}
