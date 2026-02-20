"use client";

import { useState } from "react";
import { Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCallButton() {
    const [step, setStep] = useState<1 | 2 | 3>(1);

    const handleInitialClick = () => {
        setStep(2);
    };

    const handleConfirmClick = () => {
        setStep(3);
    };

    const handleReset = () => {
        setStep(1);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
            {step === 2 && (
                <div className="animate-in slide-in-from-bottom-5 fade-in duration-300 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-border max-w-[280px] mb-2">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="mt-0.5 rounded-full bg-orange-100 p-1">
                            <AlertCircle className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm">تأكيد الاتصال</h4>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                هل أنت متأكد من رغبتك في التواصل معنا الآن لخدمات نقل العفش؟
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" onClick={handleConfirmClick} className="w-full">
                            نعم، أريد الاتصال
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleReset} className="w-full">
                            إلغاء
                        </Button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="animate-in slide-in-from-bottom-5 fade-in duration-300 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-border max-w-[280px] mb-2">
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="rounded-full bg-green-100 p-2">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm mb-1">تفضل بالاتصال بنا</h4>
                            <p className="text-xs text-muted-foreground mb-3">
                                اضغط على الرقم أدناه للاتصال مباشرة
                            </p>
                            <a
                                href="tel:01036591401"
                                onClick={handleReset}
                                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-bold transition-colors w-full"
                                dir="ltr"
                            >
                                <Phone className="w-4 h-4" />
                                01036591401
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={step === 1 ? handleInitialClick : handleReset}
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                aria-label="اتصل بنا"
            >
                <Phone className="w-6 h-6 animate-pulse" />
            </button>
        </div>
    );
}
