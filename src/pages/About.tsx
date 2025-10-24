import Navigation from "@/components/Navigation";
import { Target, Zap, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide accessible, high-quality online tools that empower users to accomplish tasks efficiently without complexity or cost barriers.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "All our tools are optimized for speed and performance, ensuring you get results instantly without unnecessary waiting.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "We prioritize your privacy. Your files and data are processed securely and never stored on our servers.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Built with user feedback in mind, our tools are designed to be intuitive and accessible for everyone.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 animate-fade-up">
          About <span className="text-gradient">Small Tools</span>
        </h1>
        
        <div className="max-w-4xl space-y-8 animate-fade-up">
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Small Tools is your go-to platform for powerful online utilities
              designed to simplify your daily tasks and boost productivity.
              Founded with the vision of making professional-grade tools accessible to everyone.
            </p>
            <p>
              We believe in providing easy-to-use, efficient tools that help you
              work smarter, not harder. Whether you need to convert documents,
              check grammar, rewrite content, or process images, we've got you covered
              with a comprehensive suite of utilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Why Choose <span className="text-gradient">Small Tools</span>?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>100% free to use with no hidden fees or subscriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>No registration required for most tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Regular updates and new tools added frequently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Mobile-friendly design for on-the-go productivity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Community-driven feature requests and improvements</span>
              </li>
            </ul>
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

export default About;
