import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color?: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, desc, color = "blue" }) => {
  // Mapping simple pour les classes de couleur Tailwind dynamiques (pour éviter que Tailwind ne purge les classes)
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    yellow: "bg-yellow-50 text-yellow-600",
    indigo: "bg-indigo-50 text-indigo-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
    purple: "bg-purple-50 text-purple-600",
  };

  const bgClass = colorClasses[color] || colorClasses.blue;

  return (
    <div className="flex items-start p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`p-3 rounded-lg mr-4 flex-shrink-0 ${bgClass}`}>
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
        <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
};
