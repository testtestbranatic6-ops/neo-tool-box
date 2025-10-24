import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl font-heading font-bold mb-8 animate-fade-up">
          About <span className="text-gradient">Small Tools</span>
        </h1>
        <div className="max-w-3xl space-y-6 text-lg text-muted-foreground animate-fade-up">
          <p>
            Small Tools is your go-to platform for powerful online utilities
            designed to simplify your daily tasks and boost productivity.
          </p>
          <p>
            We believe in providing easy-to-use, efficient tools that help you
            work smarter, not harder. Whether you need to convert documents,
            check grammar, or rewrite content, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
