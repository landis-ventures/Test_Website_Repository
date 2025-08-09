import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";

const consultationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  automationNeeds: z.string().min(1, "Please select your automation needs"),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to receive communications"),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

export default function ContactSectionStatic() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      automationNeeds: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true);
    
    try {
      // For GitHub Pages deployment, we'll use Formspree or similar service
      // This creates a mailto link as fallback
      const emailBody = `
New Consultation Request:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company}
Automation Needs: ${data.automationNeeds}

Message:
${data.message || 'No additional message'}

This inquiry was submitted through the Landis Ventures website.
      `;
      
      const subject = `Consultation Request from ${data.firstName} ${data.lastName} - ${data.company}`;
      const mailtoUrl = `mailto:info@landisventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      setIsSubmitted(true);
      toast({
        title: "Request Prepared",
        description: "Your email client will open with the consultation request. Please send the email to complete your submission.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue preparing your request. Please contact us directly at info@landisventures.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-landis-bg via-landis-bg/95 to-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-landis-text mb-4">Thank You!</h2>
            <p className="text-lg text-landis-text/80 max-w-2xl mx-auto">
              Your email client should have opened with your consultation request. Please send the email to complete your submission.
            </p>
            <p className="text-sm text-landis-text/60 mt-4">
              If your email client didn't open, you can reach us directly at{" "}
              <a href="mailto:info@landisventures.com" className="text-landis-primary underline">
                info@landisventures.com
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-landis-bg via-landis-bg/95 to-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-landis-text mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-landis-text/80 max-w-3xl mx-auto">
            Schedule your free consultation today and discover how intelligent automation 
            can drive measurable growth for your financial services organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-landis-accent/10 rounded-2xl p-8 border border-landis-accent/20">
              <h3 className="text-2xl font-semibold text-landis-text mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-landis-primary/20 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-landis-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-landis-text mb-1">Email Us</h4>
                    <p className="text-landis-text/70">info@landisventures.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-landis-primary/20 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-landis-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-landis-text mb-1">Call Us</h4>
                    <p className="text-landis-text/70">+1 (555) LANDIS-1</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-landis-primary/20 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-landis-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-landis-text mb-1">Business Hours</h4>
                    <p className="text-landis-text/70">Monday - Friday: 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-landis-primary/20 to-landis-accent/20 rounded-2xl p-8 border border-landis-primary/30">
              <h4 className="text-lg font-semibold text-landis-text mb-3">Free Consultation Includes:</h4>
              <ul className="space-y-2 text-landis-text/80">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-landis-primary flex-shrink-0" />
                  Process evaluation and automation opportunity assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-landis-primary flex-shrink-0" />
                  Custom recommendations for your specific needs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-landis-primary flex-shrink-0" />
                  ROI projections and implementation timeline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-landis-primary flex-shrink-0" />
                  No obligation - completely free of charge
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-landis-card rounded-2xl p-8 border border-landis-accent/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-landis-text mb-6">Request Your Free Consultation</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-landis-text">First Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your first name" 
                            {...field} 
                            className="bg-landis-bg border-landis-accent/30 text-landis-text placeholder:text-landis-text/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-landis-text">Last Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your last name" 
                            {...field} 
                            className="bg-landis-bg border-landis-accent/30 text-landis-text placeholder:text-landis-text/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-landis-text">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your.email@company.com" 
                          {...field} 
                          className="bg-landis-bg border-landis-accent/30 text-landis-text placeholder:text-landis-text/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-landis-text">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+1 (555) 123-4567" 
                          {...field} 
                          className="bg-landis-bg border-landis-accent/30 text-landis-text placeholder:text-landis-text/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-landis-text">Company Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company name" 
                          {...field} 
                          className="bg-landis-bg border-landis-accent/30 text-landis-text placeholder:text-landis-text/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="automationNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-landis-text">Primary Automation Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-landis-bg border-landis-accent/30 text-landis-text">
                            <SelectValue placeholder="Select your primary interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-landis-card border-landis-accent/30">
                          <SelectItem value="rpa">Robotic Process Automation (RPA)</SelectItem>
                          <SelectItem value="idp">Intelligent Document Processing</SelectItem>
                          <SelectItem value="workflow">Workflow Automation</SelectItem>
                          <SelectItem value="data">Data Processing & Analytics</SelectItem>
                          <SelectItem value="customer">Customer Onboarding</SelectItem>
                          <SelectItem value="compliance">Compliance & Reporting</SelectItem>
                          <SelectItem value="integration">System Integration</SelectItem>
                          <SelectItem value="other">Other / Multiple Areas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-landis-text">Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your current processes, challenges, or specific automation goals..." 
                          rows={4} 
                          {...field} 
                          className="bg-landis-bg border-landis-accent/30 text-landis-text placeholder:text-landis-text/50 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-landis-accent/50"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-landis-text/90">
                          I agree to receive communications from Landis Ventures regarding this consultation request and related services. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-landis-primary to-landis-accent hover:from-landis-primary/90 hover:to-landis-accent/90 text-white font-semibold py-4 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Preparing Request...
                    </div>
                  ) : (
                    'Send Consultation Request'
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}