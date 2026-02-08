import { ClipboardList, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "طلب وحجز",
    description: "تواصل معنا وحدد تفاصيل النقل واحصل على عرض سعر فوري",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "التغليف والفك",
    description: "فريقنا يقوم بتغليف العفش وفك الأثاث بعناية فائقة",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "النقل والتركيب",
    description: "نقل العفش بسيارات مجهزة وتركيبه فى المكان الجديد",
    icon: Truck,
  },
];

const WorkProcess = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">خطوات العمل</h6>
          <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2]">
            كيف ننقل عفشك بأمان
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-muted rounded-full" />
                <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <span className="text-primary text-xs font-bold tracking-widest mb-2">
                الخطوة {step.number}
              </span>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[280px] mx-auto leading-relaxed">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 -left-[50%] w-full h-[2px] border-t-2 border-dotted border-border z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
