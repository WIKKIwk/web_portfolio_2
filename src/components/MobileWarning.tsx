"use client";

export default function MobileWarning() {
    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-8 text-center lg:hidden">
            {/* Logo / icon */}
            <div className="mb-8">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="10" width="52" height="36" rx="4" stroke="white" strokeWidth="2" strokeOpacity="0.7" />
                    <rect x="8" y="46" width="40" height="4" rx="1" fill="white" fillOpacity="0.3" />
                    <rect x="20" y="50" width="16" height="3" rx="1" fill="white" fillOpacity="0.5" />
                    <rect x="8" y="16" width="40" height="24" rx="2" fill="white" fillOpacity="0.05" />
                    <line x1="28" y1="46" x2="28" y2="50" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
                    {/* Arrow up icon inside screen */}
                    <path d="M28 22 L24 27 M28 22 L32 27 M28 22 L28 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
                </svg>
            </div>

            {/* Title */}
            <h1 className="text-white text-2xl font-semibold tracking-wide mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                Desktop rejimida oching
            </h1>

            {/* Subtitle */}
            <p className="text-white/50 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-poppins)' }}>
                Bu vebsayt desktop qurilmalar uchun optimallashtirilgan. Yaxshi tajriba uchun kompyuter yoki noutbukdan foydalaning.
            </p>

            {/* Decorative bottom line */}
            <div className="mt-10 w-16 h-px bg-white/20" />
        </div>
    );
}
