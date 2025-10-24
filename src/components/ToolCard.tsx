import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  link: string;
}

const colorClasses = {
  red: {
    border: "group-hover:border-red",
    gradient: "from-red/10",
    bg: "bg-red/10",
    text: "text-red",
    bar: "from-red",
  },
  primary: {
    border: "group-hover:border-primary",
    gradient: "from-primary/10",
    bg: "bg-primary/10",
    text: "text-primary",
    bar: "from-primary",
  },
  purple: {
    border: "group-hover:border-purple",
    gradient: "from-purple/10",
    bg: "bg-purple/10",
    text: "text-purple",
    bar: "from-purple",
  },
  orange: {
    border: "group-hover:border-orange",
    gradient: "from-orange/10",
    bg: "bg-orange/10",
    text: "text-orange",
    bar: "from-orange",
  },
};

const ToolCard = ({ icon, title, description, color, link }: ToolCardProps) => {
  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <Link to={link}>
      <div
        className={`group relative bg-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-border ${colors.border} overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div className="relative z-10 flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
          >
            <div className={`${colors.text} text-3xl`}>{icon}</div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bar} to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
        ></div>
      </div>
    </Link>
  );
};

export default ToolCard;
