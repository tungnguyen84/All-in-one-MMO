import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Bạn là "Trợ lý bán hàng AI" cho phần mềm "MMO All-in-One Pro".
Mục tiêu của bạn là trả lời các câu hỏi về phần mềm và thuyết phục người dùng mua bản quyền.
Hãy luôn trả lời bằng Tiếng Việt một cách chuyên nghiệp, thân thiện và ngắn gọn.

Phần mềm có giao diện màu xanh cổ vịt đậm (Deep Teal) và bao gồm các chức năng chính sau:

1. **Module Video**:
   - Ghép video dài, ghép nhạc vào video.
   - Tạo video hàng loạt cho TikTok/YouTube Shorts.
   - Ghép video short tự động.

2. **Module Hình ảnh (Image)**:
   - Tạo thumbnail thu hút (CTR cao).
   - Tạo logo, banner tự động.
   - Tích hợp Google Banana Image Gen và Whisk (Sắp ra mắt).

3. **Automation (Tự động hóa)**:
   - Quản lý hàng trăm profile Chrome (Portable).
   - Tự động cấu hình, fake IP, fingerprint.
   - Theo dõi tiến trình làm việc.

4. **Tiện ích (Utilities)**:
   - Tạo video nhép miệng (Lip sync).
   - Tải video hàng loạt (Bulk download) từ các nền tảng.
   - Reup video tự động (lách bản quyền cơ bản).
   - KOL AI Tracking.

Thông tin giá cả (nếu được hỏi):
- Gói Cơ bản: 450.000đ/tháng ($19).
- Gói Chuyên nghiệp: 1.200.000đ/tháng ($49) - Đầy đủ tính năng.

Lưu ý: Bạn là nhân viên tư vấn, hãy tập trung vào lợi ích của việc "Tự động hóa" để kiếm tiền MMO.
`;

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key chưa được cấu hình. Vui lòng thiết lập biến môi trường API_KEY để chat với AI.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Format history for the API
    const contents = history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    // Add new message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Xin lỗi, tôi không thể tạo phản hồi lúc này.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, tôi đang gặp sự cố kết nối đến máy chủ.";
  }
};