"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    author: "أحمد محمد",
    role: "نقل من المعادي للتجمع",
    content: "خدمة ممتازة من البداية للنهاية. الفريق كان محترف جداً فى التغليف والنقل. العفش وصل سليم تماماً بدون أى خدش. أنصح بيهم بشدة.",
  },
  {
    author: "سارة حسن",
    role: "نقل من الدقي للشيخ زايد",
    content: "تعاملت معاهم فى نقل شقة كاملة والحمد لله كل حاجة تمام. الونش كان ممتاز والعمال متعاونين جداً. السعر كان مناسب مقارنة بالخدمة.",
  },
  {
    author: "محمد عبد الرحمن",
    role: "نقل من مصر الجديدة لـ 6 أكتوبر",
    content: "من أفضل شركات النقل اللى اتعاملت معاها. المواعيد محترمة والتغليف ممتاز والأسعار معقولة. شكراً على الخدمة المتميزة.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">آراء العملاء</h6>
          <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2]">
            ماذا يقول عملاؤنا
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Names list */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-right p-5 rounded-xl transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-secondary hover:bg-gray-100"
                }`}
              >
                <h4 className={`text-lg font-bold ${active === i ? "text-white" : "text-secondary"}`}>
                  {t.author}
                </h4>
                <p className={`text-xs ${active === i ? "text-white/80" : "text-muted-foreground"}`}>
                  {t.role}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xl font-medium italic leading-relaxed text-secondary">
              &ldquo;{testimonials[active].content}&rdquo;
            </p>
            <div className="flex gap-3 mt-2">
              <button onClick={prev} className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronRight size={18} />
              </button>
              <button onClick={next} className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all">
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
