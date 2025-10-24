import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl font-heading font-bold mb-8 animate-fade-up">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <div className="max-w-3xl space-y-6 text-lg text-muted-foreground animate-fade-up">
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <p className="text-primary text-2xl font-semibold">
            contact@smalltools.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
