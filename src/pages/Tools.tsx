import Navigation from "@/components/Navigation";
import ToolCard from "@/components/ToolCard";
import {
  FileText,
  Type,
  Search,
  Edit3,
  CheckCircle2,
  Hash,
  Archive,
  Image,
  FileCode,
  Scissors,
  Download,
  ScanText,
  Languages,
  Calculator,
  QrCode,
  Palette,
} from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: <FileText />,
      title: "PDF Converter",
      description: "Convert files to and from PDF format with ease",
      color: "red",
      link: "/pdf-converter",
    },
    {
      icon: <Type />,
      title: "Paragraph Rewriter",
      description: "Rewrite paragraphs with AI-powered suggestions",
      color: "primary",
      link: "/paragraph-rewriter",
    },
    {
      icon: <Search />,
      title: "Plagiarism Checker",
      description: "Detect and prevent plagiarism in your content",
      color: "purple",
      link: "/plagiarism-checker",
    },
    {
      icon: <Edit3 />,
      title: "Text Editor",
      description: "Edit and format text with powerful tools",
      color: "orange",
      link: "/text-editor",
    },
    {
      icon: <CheckCircle2 />,
      title: "Grammar Checker",
      description: "Check and fix grammar mistakes instantly",
      color: "orange",
      link: "/grammar-checker",
    },
    {
      icon: <Hash />,
      title: "Word Counter",
      description: "Count words, characters, and sentences",
      color: "purple",
      link: "/word-counter",
    },
    {
      icon: <Archive />,
      title: "File Compressor",
      description: "Compress files to reduce size efficiently",
      color: "primary",
      link: "/file-compressor",
    },
    {
      icon: <Image />,
      title: "Image Converter",
      description: "Convert images between different formats",
      color: "red",
      link: "/image-converter",
    },
    {
      icon: <FileCode />,
      title: "Code Formatter",
      description: "Format and beautify your code automatically",
      color: "primary",
      link: "/code-formatter",
    },
    {
      icon: <Scissors />,
      title: "Text Splitter",
      description: "Split text into smaller chunks efficiently",
      color: "orange",
      link: "/text-splitter",
    },
    {
      icon: <Download />,
      title: "Video Downloader",
      description: "Download videos from various platforms",
      color: "red",
      link: "/video-downloader",
    },
    {
      icon: <ScanText />,
      title: "OCR Scanner",
      description: "Extract text from images using OCR",
      color: "purple",
      link: "/ocr-scanner",
    },
    {
      icon: <Languages />,
      title: "Language Translator",
      description: "Translate text between multiple languages",
      color: "primary",
      link: "/translator",
    },
    {
      icon: <Calculator />,
      title: "Unit Converter",
      description: "Convert between different units of measurement",
      color: "orange",
      link: "/unit-converter",
    },
    {
      icon: <QrCode />,
      title: "QR Code Generator",
      description: "Generate custom QR codes instantly",
      color: "purple",
      link: "/qr-generator",
    },
    {
      icon: <Palette />,
      title: "Color Picker",
      description: "Pick and convert colors between formats",
      color: "red",
      link: "/color-picker",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
          All <span className="text-gradient">Tools</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl animate-fade-up">
          Explore our complete collection of powerful online utilities designed to simplify your daily tasks.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              color={tool.color}
              link={tool.link}
            />
          ))}
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

export default Tools;
