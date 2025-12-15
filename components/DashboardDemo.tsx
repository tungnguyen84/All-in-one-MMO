import React, { useState } from 'react';
import { 
  Settings, Video, Image as ImageIcon, Zap, Command, 
  Save, Trash2, Plus, RefreshCw, Monitor, Layers, MoreVertical
} from 'lucide-react';
import { ApiKeyData } from '../types';

const MOCK_DATA: ApiKeyData[] = Array.from({ length: 15 }).map((_, i) => ({
  id: 38 - i,
  provider: 'gemini',
  key: `Alza••••${Math.random().toString(36).substring(7).toUpperCase()}`,
  status: 'Unchecked',
  quota: '0 / 250',
  model: 'gemini-1.5-flash'
}));

const SidebarItem: React.FC<{ label: string; icon?: React.ReactNode; active?: boolean; indent?: boolean; hasSub?: boolean }> = ({ 
  label, icon, active, indent, hasSub 
}) => (
  <div className={`
    flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm select-none
    ${active ? 'bg-mmo-700 text-mmo-accent font-medium border-l-2 border-mmo-accent' : 'text-gray-300 hover:bg-mmo-800'}
    ${indent ? 'pl-8' : ''}
  `}>
    {icon && <span className="w-4 h-4">{icon}</span>}
    <span className="flex-1 truncate">{label}</span>
    {hasSub && <span className="text-[10px] opacity-50">▶</span>}
  </div>
);

export const DashboardDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('config');

  return (
    <div className="w-full max-w-7xl mx-auto h-[700px] bg-mmo-950 border border-mmo-700 rounded-lg shadow-2xl flex overflow-hidden font-mono text-sm relative group">
      {/* Overlay to indicate it's a demo */}
      <div className="absolute top-4 right-4 z-20">
         <div className="bg-mmo-accent text-mmo-950 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider animate-pulse">
            Bản Demo Tương tác
         </div>
      </div>

      {/* Left Sidebar - Recreating the tree structure */}
      <div className="w-64 bg-mmo-900 border-r border-mmo-700 flex flex-col">
        <div className="p-3 bg-mmo-950 border-b border-mmo-700 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 font-bold text-mmo-accent">ALL IN ONE MMO</span>
        </div>
        
        <div className="overflow-y-auto flex-1 py-2">
           <SidebarItem icon={<Settings size={14} />} label="Hệ thống" active />
           <SidebarItem label="Cấu hình" indent active />
           
           <div className="mt-2 mb-1 px-3 text-xs text-mmo-accent/50 uppercase font-bold tracking-wider">Modules</div>
           <SidebarItem icon={<Video size={14} />} label="Video" />
           <SidebarItem label="Ghép video dài" indent />
           <SidebarItem label="Ghép video âm nhạc" indent />
           <SidebarItem label="Ghép video short" indent />
           
           <SidebarItem icon={<ImageIcon size={14} />} label="Hình ảnh" className="mt-2" />
           <SidebarItem label="Tạo thumbnail" indent />
           <SidebarItem label="Tạo logo-banner" indent />
           <SidebarItem label="Tạo ảnh Google banana" indent />
           
           <SidebarItem icon={<Zap size={14} />} label="Automation" className="mt-2" />
           <SidebarItem label="Cấu hình tự động" indent />
           <SidebarItem label="Theo dõi tiến trình" indent />

           <SidebarItem icon={<Layers size={14} />} label="Tiện ích" className="mt-2" />
           <SidebarItem label="Tạo video nhép miệng" indent />
           <SidebarItem label="Tải hàng loạt" indent />
        </div>

        <div className="p-2 border-t border-mmo-700 text-xs text-center text-gray-500">
           v2.5.1 | Đã kết nối
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-mmo-900/50">
        {/* Top Bar */}
        <div className="h-10 bg-mmo-900 border-b border-mmo-700 flex items-center px-4 justify-between">
          <span className="text-gray-300">Module: <span className="text-mmo-accent font-bold">Cấu hình</span></span>
          <div className="flex gap-2">
            <button className="p-1 hover:text-white"><RefreshCw size={14}/></button>
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 p-2 flex gap-2 overflow-hidden">
          
          {/* Left Panel: Configuration Form */}
          <div className="w-80 flex flex-col gap-2">
            
            {/* API Key Panel */}
            <div className="bg-mmo-900 border border-mmo-700 rounded p-3 flex flex-col gap-3">
              <div className="flex items-center gap-2 border-l-4 border-mmo-accent pl-2">
                <span className="font-bold text-white">Thêm / Sửa API key</span>
              </div>
              
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Provider:</label>
                  <select className="w-full bg-mmo-950 border border-mmo-700 rounded px-2 py-1 text-white outline-none focus:border-mmo-accent">
                    <option>gemini</option>
                    <option>openai</option>
                    <option>claude</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">API Key:</label>
                  <input type="text" className="w-full bg-mmo-950 border border-mmo-700 rounded px-2 py-1 text-white outline-none focus:border-mmo-accent" placeholder="sk-..." />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Model:</label>
                  <input type="text" className="w-full bg-mmo-950 border border-mmo-700 rounded px-2 py-1 text-white outline-none focus:border-mmo-accent" placeholder="gemini-2.5-flash" />
                </div>
              </div>

              <div className="flex gap-1 mt-2">
                <button className="flex-1 bg-mmo-700 hover:bg-mmo-600 text-white py-1 rounded text-xs border border-transparent hover:border-mmo-accent transition-colors">Lưu</button>
                <button className="flex-1 bg-mmo-950 hover:bg-mmo-800 text-gray-300 py-1 rounded text-xs border border-mmo-700">Kiểm tra</button>
                <button className="px-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 border border-red-900/50 rounded"><Trash2 size={12}/></button>
              </div>
            </div>

            {/* Profile Config */}
            <div className="bg-mmo-900 border border-mmo-700 rounded p-3 flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2 border-l-4 border-mmo-accent pl-2">
                <span className="font-bold text-white">Cấu hình Chrome (Profiles)</span>
              </div>
              
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Tên profile:</label>
                  <input type="text" defaultValue="v14" className="w-full bg-mmo-950 border border-mmo-700 rounded px-2 py-1 text-white outline-none focus:border-mmo-accent" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Loại profile:</label>
                  <select className="w-full bg-mmo-950 border border-mmo-700 rounded px-2 py-1 text-white outline-none focus:border-mmo-accent">
                    <option>Banana</option>
                    <option>Facebook</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full mt-auto border border-mmo-accent/50 text-mmo-accent hover:bg-mmo-accent hover:text-mmo-950 py-2 rounded transition-all font-medium">
                Tạo bằng Đăng nhập
              </button>
            </div>
          </div>

          {/* Right Panel: Data Grid */}
          <div className="flex-1 bg-mmo-900 border border-mmo-700 rounded flex flex-col">
             <div className="flex bg-mmo-800 border-b border-mmo-700 text-xs">
                <button className="px-4 py-2 text-white bg-mmo-700 border-t-2 border-mmo-accent font-bold">Danh sách API key</button>
                <button className="px-4 py-2 text-gray-400 hover:text-white">Profile (Chrome)</button>
             </div>
             
             {/* Table Header */}
             <div className="grid grid-cols-12 gap-1 px-2 py-1 bg-mmo-950 border-b border-mmo-700 text-xs font-bold text-gray-300">
               <div className="col-span-1">ID</div>
               <div className="col-span-2">Provider</div>
               <div className="col-span-3">Key</div>
               <div className="col-span-2">Trạng thái</div>
               <div className="col-span-2">Hạn mức</div>
               <div className="col-span-2">Model</div>
             </div>

             {/* Table Body */}
             <div className="flex-1 overflow-y-auto bg-mmo-800/30">
               {MOCK_DATA.map((item, idx) => (
                 <div key={item.id} className={`grid grid-cols-12 gap-1 px-2 py-1.5 text-xs border-b border-mmo-700/50 hover:bg-mmo-700/50 ${idx % 2 === 0 ? 'bg-mmo-900/40' : ''}`}>
                   <div className="col-span-1 text-gray-400">{item.id}</div>
                   <div className="col-span-2 text-mmo-accent">{item.provider}</div>
                   <div className="col-span-3 font-mono text-gray-400">{item.key}</div>
                   <div className="col-span-2 text-gray-400">{item.status === 'Unchecked' ? 'Chưa kiểm tra' : item.status}</div>
                   <div className="col-span-2 text-gray-300">{item.quota}</div>
                   <div className="col-span-2 text-blue-300">{item.model}</div>
                 </div>
               ))}
             </div>
          </div>

        </div>

        {/* Status Bar */}
        <div className="h-6 bg-mmo-950 border-t border-mmo-700 flex items-center px-2 text-[10px] text-gray-500 justify-between">
            <span>Sẵn sàng</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Trực tuyến</span>
        </div>
      </div>
    </div>
  );
};