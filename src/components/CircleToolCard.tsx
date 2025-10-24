import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CircleToolCardProps {
  icon: ReactNode;
  title: string;
  color: string;
  link: string;
}

const colorClasses = {
  orange: {
    bg: "bg-orange/20",
    hoverBg: "group-hover:bg-orange/30",
    text: "text-orange",
    shadow: "group-hover:shadow-orange/50",
  },
  purple: {
    bg: "bg-purple/20",
    hoverBg: "group-hover:bg-purple/30",
    text: "text-purple",
    shadow: "group-hover:shadow-purple/50",
  },
  primary: {
    bg: "bg-primary/20",
    hoverBg: "group-hover:bg-primary/30",
    text: "text-primary",
    shadow: "group-hover:shadow-primary/50",
  },
};

const CircleToolCard = ({ icon, title, color, link }: CircleToolCardProps) => {
  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <Link to={link}>
      <div className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105">
        <div
          className={`w-24 h-24 rounded-full ${colors.bg} ${colors.hoverBg} flex items-center justify-center transition-all duration-300 group-hover:shadow-lg ${colors.shadow}`}
        >
          <div className={`${colors.text} text-4xl transition-transform duration-300 group-hover:rotate-12`}>
            {icon}
          </div>
        </div>
        <p className="text-center font-heading font-medium text-foreground group-hover:text-primary transition-colors">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default CircleToolCard;
