import Navigation from "@/components/Navigation";
import { Mail, MessageSquare, Bug, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactReasons = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "General Inquiries",
      description: "Questions about our tools or services",
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Report a Bug",
      description: "Found an issue? Let us know",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Feature Request",
      description: "Suggest a new tool or feature",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Business Inquiry",
      description: "Partnership or collaboration opportunities",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 animate-fade-up">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        
        <div className="max-w-5xl">
          <p className="text-xl text-muted-foreground mb-12 animate-fade-up">
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactReasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-up"
              >
                <div className="text-primary mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-up">
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Direct Contact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:contact@smalltools.com"
                      className="text-lg text-primary hover:text-primary/80 transition-colors"
                    >
                      contact@smalltools.com
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Quick Links
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="/tools" className="hover:text-primary transition-colors">
                      Browse All Tools
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-primary transition-colors">
                      Learn More About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      FAQ & Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-border mt-20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Small Tools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
