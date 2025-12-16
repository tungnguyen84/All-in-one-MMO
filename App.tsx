import React from 'react';
import { Play, CheckCircle, Download, Cpu, Shield, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { DashboardDemo } from './components/DashboardDemo';
import { FeatureCard } from './components/FeatureCard';
import { ChatWidget } from './components/ChatWidget';
import { Feature } from './types';

const FEATURES: Feature[] = [
  {
    id: '1',
    category: 'Video',
    title: 'AI Video Factory',
    description: 'Biến ý tưởng thành video chuyên nghiệp với tốc độ công nghiệp.',
    iconName: 'Video',
    details: [
      "Tích hợp Veo3, Sora 2: Tạo video từ văn bản (Prompt to Video).",
      "Ghép Video Dài: Tự động nối intro/outro, lồng nhạc, logo, watermark.",
      "YouTube Shorts: Tự động cắt, tối ưu 9:16, tạo hook giữ chân người xem.",
      "Auto Subtitles: Whisper AI tạo phụ đề karaoke chuẩn xác.",
      "Lip-Sync AI: Nhép miệng nhân vật theo file âm thanh."
    ]
  },
  {
    id: '2',
    category: 'Automation', // Mapped to Content for icon
    title: 'Content Intelligence',
    description: 'Không bao giờ bí ý tưởng với trợ lý nội dung AI mạnh mẽ.',
    iconName: 'FileText',
    details: [
      "Viết nội dung đa năng: Blog, kịch bản, social post theo giọng văn riêng.",
      "Sáng tạo hàng loạt: Sinh hàng trăm bài viết từ danh sách từ khóa.",
      "Rewrite thông minh: Paraphrase tránh bản quyền, giữ nguyên ý nghĩa.",
      "Phân tích kịch bản: Gemini AI tối ưu hóa kịch bản video."
    ]
  },
  {
    id: '3',
    category: 'Audio',
    title: 'Audio Studio',
    description: 'Giọng đọc tự nhiên, cảm xúc như người thật.',
    iconName: 'Mic',
    details: [
      "Voice Cloning: Nhân bản giọng chính chủ hoặc người nổi tiếng.",
      "TTS Đa ngôn ngữ: Kho giọng đa dạng, tùy chỉnh tốc độ/ngữ điệu.",
      "Xử lý hàng loạt: Áp mẫu giọng cho hàng loạt kịch bản cùng lúc."
    ]
  },
  {
    id: '4',
    category: 'Image',
    title: 'Graphics & Design',
    description: 'Tạo visual ấn tượng mà không cần kỹ năng Photoshop.',
    iconName: 'Image',
    details: [
      "Thumbnail tự động: Thiết kế hình thu nhỏ YouTube tăng CTR.",
      "Logo & Banner Maker: Tạo bộ nhận diện kênh nhanh chóng.",
      "AI Image Gen: Tích hợp Google Banana, Whisk sinh ảnh từ mô tả.",
      "Edit hàng loạt: Thay nền, upscale, blend màu, thêm hiệu ứng."
    ]
  },
  {
    id: '5',
    category: 'Automation',
    title: 'Channel Operation',
    description: 'Quản lý hệ thống kênh MMO hiệu quả.',
    iconName: 'Zap',
    details: [
      "Trend Radar: Quét từ khóa/video thịnh hành để bắt trend.",
      "Quản lý KOL AI: Tạo nhân vật ảo nhất quán (mặt, giọng, tính cách).",
      "Reup & Download: Tải và đăng lại đa nền tảng (tự đổi MD5, hashtag).",
      "Tracking: Theo dõi view, sub và cảnh báo sự cố."
    ]
  },
  {
    id: '6',
    category: 'System',
    title: 'Công nghệ Lõi',
    description: 'Được xây dựng để hoạt động bền bỉ và ổn định.',
    iconName: 'Cpu',
    details: [
      "Smart Key Rotation: Xoay vòng API Key tránh gián đoạn.",
      "Multi-threading: Tối ưu GPU/CPU, xử lý nhanh gấp nhiều lần.",
      "Bảo mật Hardware: Khóa bản quyền theo Fingerprint thiết bị."
    ]
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-mmo-950 text-gray-200 font-sans selection:bg-mmo-accent selection:text-mmo-950">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-mmo-950/90 backdrop-blur-md border-b border-mmo-700">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-mmo-accent to-yellow-600 rounded flex items-center justify-center text-mmo-950 font-bold">A</div>
            <span className="font-bold text-xl tracking-tight text-white">AllInOne<span className="text-mmo-accent">MMO</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-mmo-accent transition-colors">Tính năng</a>
            <a href="#demo" className="hover:text-mmo-accent transition-colors">Demo</a>
            <a href="#pricing" className="hover:text-mmo-accent transition-colors">Bảng giá</a>
            <a href="#contact" className="hover:text-mmo-accent transition-colors">Liên hệ</a>
          </div>

          <a href="http://allinonemmo.tophostingchoice.com/data/Allinonemmo.zip" className="bg-mmo-accent text-mmo-950 px-5 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition-colors">
            Tải ngay
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mmo-800/20 via-mmo-950 to-mmo-950 -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mmo-800/50 border border-mmo-700 text-mmo-accent text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mmo-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mmo-accent"></span>
            </span>
            Phiên bản v1.0.0.73
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Giải pháp Tự động hóa <br/> 
            Toàn diện cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-mmo-accent to-yellow-200">Content Creator</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Hợp nhất sức mạnh của AI và Tự động hóa vào một công cụ duy nhất. Từ viết kịch bản, tạo giọng đọc, sinh hình ảnh/video cho đến vận hành kênh hàng loạt – tất cả chỉ trong một cú nhấp chuột.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="http://allinonemmo.tophostingchoice.com/data/Allinonemmo.zip" className="h-12 px-8 bg-mmo-accent text-mmo-950 font-bold rounded flex items-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105">
              <Download size={20} /> Tải bản dùng thử
            </a>
            <a href="https://www.youtube.com/channel/UCeoi_gTMgowKgUr-cjT0vJA" target="_blank" rel="noreferrer" className="h-12 px-8 bg-mmo-900 text-white font-medium rounded border border-mmo-700 hover:border-red-600 hover:text-red-500 transition-colors flex items-center gap-2">
              <Play size={18} /> Xem Demo YouTube
            </a>
          </div>
        </div>

        {/* Hero Interactive Demo */}
        <div className="max-w-6xl mx-auto relative px-2" id="demo">
          <div className="absolute -inset-1 bg-gradient-to-r from-mmo-accent to-teal-500 rounded-xl blur opacity-20"></div>
          <DashboardDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-mmo-950 relative" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">6 Trụ Cột Sức Mạnh</h2>
            <p className="text-gray-400">Thay thế cả đội ngũ Media chỉ bằng một phần mềm.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-mmo-900/20" id="pricing">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Bảng giá đơn giản</h2>
            <div className="grid md:grid-cols-2 gap-8">
               {/* Standard */}
               <div className="p-8 bg-mmo-900 rounded-xl border border-mmo-700 hover:border-gray-500 transition-colors">
                  <h3 className="text-xl font-bold text-white">Gói Cơ Bản</h3>
                  <div className="my-4 text-4xl font-bold text-white">450k<span className="text-lg text-gray-500 font-normal">/tháng</span></div>
                  <ul className="space-y-3 mb-8 text-gray-400 text-sm">
                    <li className="flex gap-2"><CheckCircle size={16}/> Sử dụng trên 1 Máy</li>
                    <li className="flex gap-2"><CheckCircle size={16}/> Edit Video cơ bản</li>
                    <li className="flex gap-2"><CheckCircle size={16}/> 50 Ảnh AI / ngày</li>
                  </ul>
                  <button className="w-full py-3 bg-mmo-800 text-white rounded font-medium hover:bg-mmo-700 transition-colors">Chọn gói này</button>
               </div>

               {/* Pro */}
               <div className="p-8 bg-mmo-800 rounded-xl border-2 border-mmo-accent relative transform md:-translate-y-4 shadow-xl shadow-mmo-950/50">
                  <div className="absolute top-0 right-0 bg-mmo-accent text-mmo-950 text-xs font-bold px-3 py-1 rounded-bl rounded-tr">PRO</div>
                  <h3 className="text-xl font-bold text-white">Gói Chuyên Nghiệp</h3>
                  <div className="my-4 text-4xl font-bold text-mmo-accent">1tr2<span className="text-lg text-gray-400 font-normal">/tháng</span></div>
                  <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Sử dụng 3 Máy</li>
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Full tính năng (Video, Audio, Image)</li>
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Không giới hạn tạo ảnh AI</li>
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Hỗ trợ 1-1 qua Zalo</li>
                  </ul>
                  <a href="https://zalo.me/g/fqyure824" target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-mmo-accent text-mmo-950 rounded font-bold hover:bg-yellow-400 transition-colors shadow-lg">Liên hệ Mua Ngay</a>
               </div>
            </div>
         </div>
      </section>

      {/* Contact / Community Section */}
      <section className="py-20 bg-gradient-to-b from-mmo-950 to-mmo-900 border-t border-mmo-800" id="contact">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Tham gia Cộng đồng & Hỗ trợ</h2>
           <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Kết nối trực tiếp với đội ngũ phát triển và cộng đồng người dùng. Cập nhật các tuts, tricks và hướng dẫn mới nhất.</p>
           
           <div className="flex flex-wrap justify-center gap-6">
              <a href="https://zalo.me/g/fqyure824" target="_blank" rel="noreferrer" 
                 className="flex flex-col items-center justify-center w-40 h-40 bg-[#0068FF]/10 border border-[#0068FF]/30 rounded-xl hover:bg-[#0068FF] hover:text-white transition-all group">
                 <div className="w-12 h-12 mb-3 bg-[#0068FF] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#0068FF] text-white transition-colors">
                    <MessageCircle size={24} className="fill-current"/>
                 </div>
                 <span className="font-bold text-[#0068FF] group-hover:text-white">Nhóm Zalo</span>
                 <span className="text-xs text-gray-400 group-hover:text-blue-100 mt-1">Hỗ trợ nhanh</span>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61566123992783" target="_blank" rel="noreferrer"
                 className="flex flex-col items-center justify-center w-40 h-40 bg-[#1877F2]/10 border border-[#1877F2]/30 rounded-xl hover:bg-[#1877F2] hover:text-white transition-all group">
                 <div className="w-12 h-12 mb-3 bg-[#1877F2] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#1877F2] text-white transition-colors">
                    <Facebook size={24} className="fill-current"/>
                 </div>
                 <span className="font-bold text-[#1877F2] group-hover:text-white">Facebook</span>
                 <span className="text-xs text-gray-400 group-hover:text-blue-100 mt-1">Fanpage chính thức</span>
              </a>

              <a href="https://www.youtube.com/channel/UCeoi_gTMgowKgUr-cjT0vJA" target="_blank" rel="noreferrer"
                 className="flex flex-col items-center justify-center w-40 h-40 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-xl hover:bg-[#FF0000] hover:text-white transition-all group">
                 <div className="w-12 h-12 mb-3 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#FF0000] text-white transition-colors">
                    <Youtube size={24} className="fill-current"/>
                 </div>
                 <span className="font-bold text-[#FF0000] group-hover:text-white">YouTube</span>
                 <span className="text-xs text-gray-400 group-hover:text-red-100 mt-1">Video hướng dẫn</span>
              </a>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mmo-950 border-t border-mmo-800 py-12 px-4 text-center text-gray-600 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-mmo-accent">Điều khoản sử dụng</a>
          <a href="#" className="hover:text-mmo-accent">Chính sách bảo mật</a>
        </div>
        <p>&copy; 2025 MMO All-in-One Pro. Nền tảng tự động hóa dành cho Content Creator.</p>
      </footer>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;