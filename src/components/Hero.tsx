import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const scrollToTools = () => {
    const toolsSection = document.getElementById("tools");
    toolsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Essential Tools{" "}
              <span className="text-gradient">at Your Fingertips</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Discover a variety of powerful online tools to simplify your tasks
              and enhance your productivity.
            </p>
            <button
              onClick={scrollToTools}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 animate-pulse-glow"
            >
              Explore Tools
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-orange/20 blur-3xl rounded-full"></div>
            <img
              src={heroIllustration}
              alt="Productivity tools illustration"
              className="relative z-10 w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
