import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function AdminStatic() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <SEOHead
        title="Admin Dashboard - Landis Ventures"
        description="Administrative dashboard for Landis Ventures consultation requests."
        canonicalUrl={`${window.location.origin}/admin`}
      />
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-landis-text mb-4">
              Admin Dashboard
            </h1>
            <p className="text-lg text-landis-text/70">
              Consultation Request Management
            </p>
          </div>

          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-landis-text">
              <strong>Static Site Notice:</strong> This is a static version of the site deployed on GitHub Pages. 
              Consultation requests are handled via email instead of database storage. 
              All form submissions will open the user's email client to send the request directly to info@landisventures.com.
            </AlertDescription>
          </Alert>

          <Card className="bg-landis-card border-landis-accent/20">
            <CardHeader>
              <CardTitle className="text-landis-text">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-landis-text/80">
                <p>
                  <strong>Email:</strong> info@landisventures.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) LANDIS-1
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday - Friday: 9AM - 6PM EST
                </p>
                <p className="text-sm mt-4 p-4 bg-landis-accent/10 rounded-lg">
                  <strong>Note:</strong> To enable full database functionality with consultation request storage, 
                  this site needs to be deployed with a backend server (Node.js/Express) and database connection. 
                  The static GitHub Pages version uses email-based form submission as a fallback.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}