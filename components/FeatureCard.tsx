import React from 'react';
import { Video, Image, Zap, MousePointer2 } from 'lucide-react';
import { Feature } from '../types';

const IconMap: Record<string, React.ElementType> = {
  Video, Image, Zap, MousePointer2
};

export const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = IconMap[feature.iconName] || Zap;
  
  return (
    <div className="bg-mmo-900/50 border border-mmo-700 p-6 rounded-lg hover:border-mmo-accent transition-all group hover:-translate-y-1 duration-300">
      <div className="w-12 h-12 rounded-lg bg-mmo-800 flex items-center justify-center mb-4 group-hover:bg-mmo-accent transition-colors">
        <Icon className="text-mmo-accent group-hover:text-mmo-900" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {feature.category === 'Video' && <span className="px-2 py-0.5 text-xs bg-blue-900/30 text-blue-400 rounded border border-blue-900">Xử lý Video</span>}
        {feature.category === 'Image' && <span className="px-2 py-0.5 text-xs bg-purple-900/30 text-purple-400 rounded border border-purple-900">Tạo ảnh AI</span>}
        {feature.category === 'Automation' && <span className="px-2 py-0.5 text-xs bg-green-900/30 text-green-400 rounded border border-green-900">Tự động</span>}
        {feature.category === 'Utility' && <span className="px-2 py-0.5 text-xs bg-yellow-900/30 text-yellow-400 rounded border border-yellow-900">Tiện ích</span>}
      </div>
    </div>
  );
};