import React from 'react';
import { 
  Home, Bot, FileText, Mic, Video, Image as ImageIcon, 
  Settings, Activity, Check, LayoutDashboard
} from 'lucide-react';

// Custom interface for sidebar items
interface SidebarItemProps {
  icon?: React.ElementType;
  label: string;
  active?: boolean;
  sub?: boolean;
  warning?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active = false, sub = false, warning = false }) => (
  <div className={`
    flex items-center gap-2 px-3 py-1.5 text-xs cursor-pointer select-none transition-colors border-l-2 
    ${active 
      ? 'bg-mmo-800 text-white border-mmo-accent font-medium' 
      : 'border-transparent text-gray-400 hover:text-white hover:bg-mmo-800/50'}
    ${sub ? 'pl-8' : ''}
    ${warning ? 'text-mmo-accent border-l-2 border-mmo-accent mt-1' : ''}
  `}>
    {Icon && <Icon size={14} className={active ? 'text-mmo-accent' : ''} />}
    <span className="truncate flex-1">{label}</span>
  </div>
);

// Custom card for the grid layout
const FeatureCard: React.FC<{ title: string; items: React.ReactNode[] }> = ({ title, items }) => (
  <div className="bg-mmo-900/40 border border-mmo-700 rounded-lg p-3 flex flex-col h-full hover:border-mmo-accent/50 transition-colors">
    <div className="flex items-center gap-2 mb-2 border-l-2 border-mmo-accent pl-2">
      <h3 className="font-bold text-white text-sm">{title}</h3>
    </div>
    <ul className="space-y-1.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-300 leading-snug">
           <Check size={12} className="text-mmo-accent min-w-[12px] mt-0.5" />
           <span className="break-words">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const DashboardDemo: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto h-[800px] bg-mmo-950 border border-mmo-700 rounded-lg shadow-2xl flex overflow-hidden font-sans text-sm relative select-none">
       {/* Sidebar */}
       <div className="w-64 bg-mmo-950 border-r border-mmo-700 flex flex-col overflow-y-auto custom-scrollbar pt-2 gap-0.5">
          <div className="mb-4 px-3 flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-mmo-accent flex items-center justify-center text-mmo-950 font-bold text-xs">A</div>
             <span className="text-white font-bold text-xs uppercase tracking-wider">ALL IN ONE MMO</span>
             <span className="px-1 py-0.5 bg-mmo-accent text-mmo-950 text-[10px] font-bold rounded">PRO</span>
          </div>
          
          <div className="px-3 py-2 bg-mmo-800 border-l-2 border-mmo-accent mb-2 mx-2 rounded-r flex items-center gap-2 text-white font-bold">
            <Home size={14} /> Tổng quan
          </div>
          
          <div className="mt-2 px-3 text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1"><Bot size={10}/> AI Automation</div>
          <SidebarItem label="All in one veo3 V1" sub />
          <SidebarItem label="Tạo video veo 3" sub />
          <SidebarItem label="All in one veo3 V3" sub />

          <div className="mt-2 px-3 text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1"><FileText size={10}/> Nội dung</div>
          <SidebarItem label="Tạo nội dung" sub />
          <SidebarItem label="Tạo nội dung hàng loạt" sub />
          <SidebarItem label="Tạo lại nội dung" sub />
          <SidebarItem label="Tạo lại nội dung hàng loạt" sub />

          <div className="mt-2 px-3 text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1"><Mic size={10}/> Audio</div>
          <SidebarItem label="Nhân bản giọng" sub />
          <SidebarItem label="Nhân bản giọng hàng loạt" sub />

          <div className="mt-2 px-3 text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1"><Video size={10}/> Video</div>
          <SidebarItem label="Ghép video dài" sub />
          <SidebarItem label="Ghép video âm nhạc" sub />
          <SidebarItem label="Ghép video âm nhạc hàng loạt" sub />
          <SidebarItem label="Ghép video short" sub />

          <div className="mt-2 px-3 text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1"><ImageIcon size={10}/> Hình ảnh</div>
          <SidebarItem label="Tạo thumbnail" sub />
          <SidebarItem label="Tạo logo-banner" sub />
          <SidebarItem label="Tạo ảnh Google banana" sub />
          <SidebarItem label="Chỉnh sửa ảnh (đang xây dựng)" sub />

          <div className="mt-4 pt-2 border-t border-mmo-800/50">
            <div className="px-3 text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1"><Settings size={10}/> Automation</div>
            <SidebarItem label="Cấu hình tự động(đang xây dựng)" warning sub />
            <SidebarItem label="Theo dõi tiến trình(đang xây dựng)" warning sub />
          </div>
       </div>

       {/* Main Content */}
       <div className="flex-1 bg-mmo-950 flex flex-col overflow-hidden">
          {/* Top Header */}
          <div className="h-8 bg-mmo-900 border-b border-mmo-700 flex items-center px-4 text-xs text-gray-300">
             Module: <span className="font-bold text-white ml-1">Tổng quan</span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
             {/* Hero Box */}
             <div className="p-4 border border-mmo-700 rounded-lg bg-mmo-800/30 mb-4">
                 <h1 className="text-2xl font-bold text-white mb-1">All in one MMO</h1>
                 <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="bg-mmo-accent text-mmo-950 font-bold px-2 py-0.5 rounded">v1.0.0.73</span>
                    <span>Bộ công cụ tự động hóa nội dung, hình ảnh, audio, video, vận hành kênh — tất cả trong một.</span>
                 </div>
             </div>

             <div className="p-3 border border-mmo-700 rounded-lg bg-mmo-900/40 mb-4">
                <h2 className="text-sm font-bold text-white mb-1 border-l-2 border-mmo-accent pl-2">Tổng quan</h2>
                <p className="text-xs text-mmo-accent pl-2">✓ Ảnh toàn cảnh các khả năng chính, truy cập nhanh đến mọi module.</p>
             </div>

             {/* Grid Area */}
             <div className="grid grid-cols-2 gap-4">
                <FeatureCard 
                  title="Nội dung" 
                  items={[
                    "Tạo nội dung: soạn bài viết/ngắn dài theo chủ đề, giọng điệu và mục tiêu cụ thể.",
                    "Tạo nội dung hàng loạt: nhập danh sách chủ đề/brief → sinh nhiều bài cùng lúc.",
                    "Viết lại nội dung: paraphrase, tinh gọn, đổi giọng điệu, chống trùng lặp.",
                    "Viết lại nội dung hàng loạt: rewriting nhiều bài theo preset chất lượng/định dạng."
                  ]} 
                />
                
                <FeatureCard 
                  title="Audio" 
                  items={[
                    "Tạo giọng nói: TTS đa ngôn ngữ, tuỳ tốc độ/ngữ điệu.",
                    "Tạo giọng nói hàng loạt: chuyển text → audio theo lô.",
                    "Nhân bản giọng: clone giọng mẫu để giữ nhận diện thương hiệu.",
                    "Nhân bản giọng hàng loạt: áp mẫu giọng cho nhiều script/audio cùng lúc."
                  ]} 
                />

                <FeatureCard 
                  title="Hình ảnh" 
                  items={[
                    "Tạo prompt ảnh: trợ lý viết prompt chất lượng (phong cách, ánh sáng, bố cục...).",
                    "Tạo ảnh Google banana: tạo ảnh qua pipeline tích hợp.",
                    "Tạo ảnh Whisk: sinh ảnh qua nền tảng Whisk, hỗ trợ tham chiếu nhân vật.",
                    "Chỉnh sửa ảnh: thay nền, upscale, blend, hiệu ứng, lọc hàng loạt."
                  ]} 
                />

                <FeatureCard 
                  title="Video" 
                  items={[
                    "Tạo prompt video: kịch bản theo scene, thoại, nhạc nền, chuyển cảnh.",
                    "Tạo video Veo3/Sora: kết nối model video AI, xuất nhanh theo template.",
                    "Ghép video dài: nối intro/outro, chèn phụ đề, nhạc, logo, watermark.",
                    "Ghép video short: cắt dọc, thêm hook/Caption auto, tối ưu 9:16/1:1."
                  ]} 
                />

                <FeatureCard 
                  title="Automation" 
                  items={[
                    "Cấu hình tự động: lịch chạy, xoay API key, quota, preset dự án.",
                    "Theo dõi tiến trình: monitoring job theo thời gian thực, log lỗi & retry.",
                    "Tự động tạo video nhạc từ Suno"
                  ]} 
                />

                <FeatureCard 
                  title="Tiện ích" 
                  items={[
                    "Tạo video nhép miệng: lip-sync theo voice/script có sẵn.",
                    "Tải hàng loạt: download assets/videos từ nguồn tích hợp theo lô.",
                    "Reup hàng loạt: đăng lại nội dung theo lịch, đổi tiêu đề/hashtag/thumb tự động.",
                    "KOL AI: quản lý nhân vật/KOL cố định (khuôn mặt, phong cách, giọng nói).",
                    "Theo dõi kênh: track hiệu suất kênh, video, nhắc lịch đăng & cảnh báo."
                  ]} 
                />

                <FeatureCard 
                  title="Hệ thống" 
                  items={[
                    "Cấu hình: Key, kênh, thư mục làm việc, GPU/FFmpeg, mặc định xuất file.",
                    <span key="device-id" className="underline text-gray-400 decoration-dotted cursor-help">Mã thiết bị: wygnksgDHCs67mkx9SkEg_sfZrabsalKiXZJ998xaJA</span>
                  ]} 
                />

                <FeatureCard 
                  title="Nhật ký" 
                  items={[
                    "Log toàn bộ thao tác, trạng thái job, lỗi & thời gian chạy để truy vết nhanh."
                  ]} 
                />
             </div>
          </div>

          {/* Bottom Footer Panel */}
          <div className="p-3 border-t border-mmo-700 bg-mmo-900/30 text-[11px] text-gray-400">
             <p><strong className="text-white">All in one MMO</strong> hợp nhất sáng tạo nội dung – ảnh – audio – video và tự động hóa vận hành kênh vào một công cụ duy nhất. Từ viết nội dung, tạo giọng nói, sinh ảnh/clip bằng AI cho đến ghép – đăng – theo dõi hàng loạt, tất cả được chuẩn hoá theo KOL/brand của bạn, giúp giảm thời gian thao tác lặp xuống còn một cú nhấp.</p>
          </div>
       </div>
    </div>
  );
};