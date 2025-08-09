import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function HomeSimple() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <SEOHead
        title="Landis Ventures | Intelligent Automation for Finance"
        description="Unlock new levels of profitability and efficiency with Landis Ventures' intelligent automation solutions for financial services."
        canonicalUrl={`${window.location.origin}/`}
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Landis Ventures
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Intelligent Automation Solutions for Financial Services
          </p>
          <div className="bg-white/10 p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-white/90">
              Email: <a href="mailto:info@landisventures.com" className="underline">info@landisventures.com</a>
            </p>
            <p className="text-white/90 mt-2">
              Phone: +1 (555) LANDIS-1
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}