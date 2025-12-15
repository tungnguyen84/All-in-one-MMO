import React from 'react';
import { Video, Image, Zap, MousePointer2, Mic, Cpu, FileText, Check } from 'lucide-react';
import { Feature } from '../types';

const IconMap: Record<string, React.ElementType> = {
  Video, Image, Zap, MousePointer2, Mic, Cpu, FileText
};

export const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = IconMap[feature.iconName] || Zap;
  
  return (
    <div className="bg-mmo-900/50 border border-mmo-700 p-6 rounded-lg hover:border-mmo-accent transition-all group hover:-translate-y-1 duration-300 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-mmo-800 flex items-center justify-center group-hover:bg-mmo-accent transition-colors shrink-0">
          <Icon className="text-mmo-accent group-hover:text-mmo-900" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
             {feature.category === 'Video' && <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">Video Factory</span>}
             {feature.category === 'Audio' && <span className="text-[10px] uppercase tracking-wider text-pink-400 font-bold">Audio Studio</span>}
             {feature.category === 'Image' && <span className="text-[10px] uppercase tracking-wider text-purple-400 font-bold">Graphics</span>}
             {feature.category === 'Automation' && <span className="text-[10px] uppercase tracking-wider text-green-400 font-bold">Operations</span>}
             {feature.category === 'System' && <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Core Tech</span>}
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 font-medium italic border-l-2 border-mmo-600 pl-3">
        "{feature.description}"
      </p>
      
      {feature.details && (
        <ul className="space-y-2 mt-auto">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
              <Check size={14} className="text-mmo-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};