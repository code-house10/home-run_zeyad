import { ArrowUpLeft, Shield, Clock, Headphones } from "lucide-react";

const QuoteFormSection = () => {
  return (
    <section className="relative bg-[#0F161B] overflow-hidden" id="contact">
      <div className="container relative z-10 px-6 py-20 lg:py-28 mx-auto">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0">
          {/* Why Choose Us */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">لماذا نحن</h6>
            <h2 className="text-white text-[36px] lg:text-[44px] font-bold leading-[1.2] mb-6">
              الطريق إلى نقل عفش أفضل يبدأ هنا
            </h2>
            <p className="text-[#687076] mb-10 leading-relaxed">
              نحن أكثر من مجرد شركة نقل عفش - نحن شريكك الموثوق فى كل عملية نقل. من أول خطوة حتى تسليم آخر قطعة أثاث، فريقنا المتخصص يضمن التعامل مع عفشك بعناية فائقة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1C242B] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-white text-lg font-bold">ضمان سلامة العفش</h4>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1C242B] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-white text-lg font-bold">التزام بالمواعيد</h4>
              </div>
            </div>

            <a href="tel:+201036591401" className="inline-flex items-center">
              <span className="bg-primary text-white py-4 px-8 text-[14px] font-bold rounded-s-lg">اتصل بنا الآن</span>
              <span className="bg-[#e85a3c] text-white p-4 rounded-e-lg flex items-center">
                <ArrowUpLeft className="w-5 h-5" />
              </span>
            </a>
          </div>

          {/* Quote Form */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-8 lg:p-10 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/85 z-0" />
              <div className="relative z-10">
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-8">اطلب عرض سعر مجاني</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="الاسم"
                      className="w-full bg-white/20 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
                    />
                    <input
                      type="tel"
                      placeholder="رقم الهاتف"
                      className="w-full bg-white/20 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <select className="w-full bg-white/20 border border-white/20 rounded-lg px-5 py-3.5 text-white appearance-none focus:outline-none focus:border-white/50">
                      <option className="bg-[#0F161B]">اختر الخدمة</option>
                      <option className="bg-[#0F161B]">نقل عفش</option>
                      <option className="bg-[#0F161B]">تغليف عفش</option>
                      <option className="bg-[#0F161B]">فك وتركيب</option>
                      <option className="bg-[#0F161B]">ونش هيدروليكي</option>
                    </select>
                    <select className="w-full bg-white/20 border border-white/20 rounded-lg px-5 py-3.5 text-white appearance-none focus:outline-none focus:border-white/50">
                      <option className="bg-[#0F161B]">اختر المنطقة</option>
                      <option className="bg-[#0F161B]">القاهرة</option>
                      <option className="bg-[#0F161B]">الجيزة</option>
                      <option className="bg-[#0F161B]">6 أكتوبر</option>
                      <option className="bg-[#0F161B]">التجمع الخامس</option>
                      <option className="bg-[#0F161B]">الشيخ زايد</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="تفاصيل إضافية..."
                    rows={3}
                    className="w-full bg-white/20 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-white/70 focus:outline-none focus:border-white/50 resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#0F161B] text-white py-4 px-10 text-[14px] font-bold rounded-lg hover:bg-[#1C242B] transition-colors"
                  >
                    ارسل الطلب
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
