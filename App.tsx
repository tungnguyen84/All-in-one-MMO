import React from 'react';
import { Play, CheckCircle, ArrowRight, Shield, Download, Cpu } from 'lucide-react';
import { DashboardDemo } from './components/DashboardDemo';
import { FeatureCard } from './components/FeatureCard';
import { ChatWidget } from './components/ChatWidget';
import { Feature } from './types';

const FEATURES: Feature[] = [
  {
    id: '1',
    category: 'Video',
    title: 'Ghép Video & Edit',
    description: 'Tự động ghép video dài, chèn nhạc, và tạo Shorts/Reels hàng loạt. Hỗ trợ render tốc độ cao cho TikTok và YouTube.',
    iconName: 'Video'
  },
  {
    id: '2',
    category: 'Image',
    title: 'Thiết kế Thumbnail AI',
    description: 'Tạo thumbnail CTR cao và logo chuyên nghiệp chỉ với 1 click bằng các model GenAI tích hợp sẵn như Google Banana.',
    iconName: 'Image'
  },
  {
    id: '3',
    category: 'Automation',
    title: 'Quản lý Profile Chrome',
    description: 'Nuôi hàng trăm tài khoản trình duyệt. Tự động đăng nhập, quản lý cookie và thực thi kịch bản nuôi nick.',
    iconName: 'MousePointer2'
  },
  {
    id: '4',
    category: 'Utility',
    title: 'Reup & Tải hàng loạt',
    description: 'Quét và tải nội dung từ các nền tảng lớn, tự động lách bản quyền hình ảnh và âm thanh để reup an toàn.',
    iconName: 'Zap'
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
          </div>

          <button className="bg-mmo-accent text-mmo-950 px-5 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition-colors">
            Bắt đầu ngay
          </button>
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
            Đã ra mắt phiên bản v2.5
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Thống lĩnh thị trường MMO <br/>
            với <span className="text-transparent bg-clip-text bg-gradient-to-r from-mmo-accent to-yellow-200">Tự động hóa</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Bộ công cụ tối thượng cho người làm MMO. Tự động hóa chỉnh sửa video, tạo ảnh AI và quản lý hàng nghìn tài khoản chỉ trên một giao diện.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="h-12 px-8 bg-mmo-accent text-mmo-950 font-bold rounded flex items-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105">
              <Download size={20} /> Tải bản dùng thử
            </button>
            <button className="h-12 px-8 bg-mmo-900 text-white font-medium rounded border border-mmo-700 hover:border-mmo-accent hover:text-mmo-accent transition-colors flex items-center gap-2">
              <Play size={18} /> Xem hướng dẫn
            </button>
          </div>
        </div>

        {/* Hero Interactive Demo - The "Screenshot" comes to life */}
        <div className="max-w-6xl mx-auto relative px-2" id="demo">
          <div className="absolute -inset-1 bg-gradient-to-r from-mmo-accent to-teal-500 rounded-xl blur opacity-20"></div>
          <DashboardDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-mmo-950 relative" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Mọi thứ bạn cần để mở rộng quy mô</h2>
            <p className="text-gray-400">Thay thế 10 công cụ trả phí khác nhau chỉ bằng một phần mềm duy nhất.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs / Capabilities */}
      <section className="py-20 bg-mmo-900/30 border-y border-mmo-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1 space-y-8">
              <h3 className="text-3xl font-bold text-white">Dành cho <span className="text-mmo-accent">Power Users</span></h3>
              <div className="space-y-4">
                 {[
                   "Xử lý đa luồng (Multi-thread) tốc độ cao",
                   "Tích hợp sẵn quản lý Proxy & Fingerprint",
                   "Kết nối API: Gemini 2.5, GPT-4, Claude",
                   "Theo dõi lợi nhuận & Analytics thời gian thực"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-gray-300">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="p-6 bg-mmo-900 rounded border border-mmo-700 flex flex-col items-center text-center">
                 <Cpu size={32} className="text-blue-400 mb-2"/>
                 <div className="text-2xl font-bold text-white">400+</div>
                 <div className="text-xs text-gray-500 uppercase">Tác vụ mỗi ngày</div>
              </div>
              <div className="p-6 bg-mmo-900 rounded border border-mmo-700 flex flex-col items-center text-center">
                 <Shield size={32} className="text-green-400 mb-2"/>
                 <div className="text-2xl font-bold text-white">100%</div>
                 <div className="text-xs text-gray-500 uppercase">Thời gian hoạt động</div>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4" id="pricing">
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
                  <div className="absolute top-0 right-0 bg-mmo-accent text-mmo-950 text-xs font-bold px-3 py-1 rounded-bl rounded-tr">TỐT NHẤT</div>
                  <h3 className="text-xl font-bold text-white">Gói Chuyên Nghiệp</h3>
                  <div className="my-4 text-4xl font-bold text-mmo-accent">1tr2<span className="text-lg text-gray-400 font-normal">/tháng</span></div>
                  <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Sử dụng 3 Máy</li>
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Xử lý Video & Nhạc nâng cao</li>
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Không giới hạn ảnh AI</li>
                    <li className="flex gap-2 text-white"><CheckCircle size={16} className="text-mmo-accent"/> Truy cập API không giới hạn</li>
                  </ul>
                  <button className="w-full py-3 bg-mmo-accent text-mmo-950 rounded font-bold hover:bg-yellow-400 transition-colors shadow-lg">Mua Trọn Đời</button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-mmo-950 border-t border-mmo-800 py-12 px-4 text-center text-gray-600 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-mmo-accent">Điều khoản sử dụng</a>
          <a href="#" className="hover:text-mmo-accent">Chính sách bảo mật</a>
          <a href="#" className="hover:text-mmo-accent">Liên hệ hỗ trợ</a>
        </div>
        <p>&copy; 2024 MMO All-in-One Tool. Bảo lưu mọi quyền.</p>
      </footer>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;