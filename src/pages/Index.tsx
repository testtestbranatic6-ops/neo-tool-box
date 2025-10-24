import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";
import CircleToolCard from "@/components/CircleToolCard";
import {
  FileText,
  Type,
  Search,
  Edit3,
  CheckCircle2,
  Hash,
  Archive,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <section id="tools" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center animate-fade-up">
            Popular Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            <ToolCard
              icon={<FileText />}
              title="PDF Converter"
              description="Convert files to and from PDF format"
              color="red"
              link="/pdf-converter"
            />
            <ToolCard
              icon={<Type />}
              title="Paragraph Rewriter"
              description="Rewrite paragraphs with ease"
              color="primary"
              link="/paragraph-rewriter"
            />
            <ToolCard
              icon={<Search />}
              title="Plagiarism Checker"
              description="Detect and prevent plagiarism"
              color="purple"
              link="/plagiarism-checker"
            />
            <ToolCard
              icon={<Edit3 />}
              title="Text Editor"
              description="Edit and format text with ease"
              color="orange"
              link="/text-editor"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center animate-fade-up">
            Explore More Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <CircleToolCard
              icon={<CheckCircle2 />}
              title="Grammar Checker"
              color="orange"
              link="/grammar-checker"
            />
            <CircleToolCard
              icon={<Hash />}
              title="Word Counter"
              color="purple"
              link="/word-counter"
            />
            <CircleToolCard
              icon={<Archive />}
              title="File Compressor"
              color="primary"
              link="/file-compressor"
            />
          </div>
        </div>
      </section>

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

export default Index;
