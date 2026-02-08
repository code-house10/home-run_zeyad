"use client";

const tickerItems = [
  "نقل عفش",
  "تغليف احترافي",
  "فك وتركيب",
  "ونش هيدروليكي",
  "سيارات مجهزة",
  "عمالة مدربة",
  "أسعار مناسبة",
  "خدمة سريعة",
];

const ScrollingTicker = () => {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden py-4 border-y border-border/30 bg-white">
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-[marque_20s_linear_infinite]">
          {items.map((text, i) => (
            <div key={i} className="flex items-center shrink-0 px-8">
              <span className="w-3 h-3 bg-primary rounded-full ml-4" />
              <span className="text-xl lg:text-2xl font-extrabold text-secondary">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marque {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ScrollingTicker;
