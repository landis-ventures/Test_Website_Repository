import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import ValuesSection from "@/components/values-section";
import ContactSection from "@/components/contact-section-static";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function Home() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <SEOHead
        title="Landis Ventures - Intelligent Automation for Financial Services"
        description="Transform your financial services operations with intelligent automation solutions. RPA, IDP, data processing, and workflow automation designed for banks, insurance, and fintech companies."
        canonicalUrl={`${window.location.origin}/`}
        ogTitle="Landis Ventures - Financial Services Automation Experts"
        ogDescription="Unlock new levels of profitability and efficiency with intelligent automation solutions that streamline operations and drive measurable growth."
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
