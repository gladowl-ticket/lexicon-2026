import { useState, useEffect } from "react";
import { X } from "lucide-react";

type ModalContent = "pgdm" | "mba" | "enquire" | null;

const IFRAME_URLS = {
    pgdm: "https://widgets.nopaperforms.com/register?&w=174a4eb7995b0ae309767c180740d364",
    mba: "https://widgets.nopaperforms.com/register?&w=eadbbaa6cdb1fc07bce7d8f9f0072b2a",
    enquire: "https://widgets.nopaperforms.com/register?&w=104bf25d3c65c756d2c4175bdddcc6c5",
};

const MODAL_TITLES = {
    pgdm: "PGDM Brochure",
    mba: "MBA Global Brochure",
    enquire: "Enquire Now",
};

const IconBtn = ({
    label,
    onClick,
    href,
    children,
}: {
    label: string;
    onClick?: () => void;
    href?: string;
    children: React.ReactNode;
}) => {
    const cls =
        "group relative flex items-center justify-center w-12 h-12 rounded-lg bg-[#1a1a2e] hover:bg-[#004E7E] text-white hover:text-white shadow-lg transition-all duration-200 cursor-pointer border border-white/10";

    const tooltip = (
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1a1a2e] text-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-white/10">
            {label}
        </span>
    );

    if (href) {
        return (
            <li>
                <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {tooltip}
                    {children}
                </a>
            </li>
        );
    }

    return (
        <li>
            <button type="button" onClick={onClick} className={cls}>
                {tooltip}
                {children}
            </button>
        </li>
    );
};

const FloatingActions = () => {
    const [activeModal, setActiveModal] = useState<ModalContent>(null);

    useEffect(() => {
        const enquireHandler = () => setActiveModal("enquire");
        const pgdmHandler = () => setActiveModal("pgdm");
        const mbaHandler = () => setActiveModal("mba");

        window.addEventListener("openEnquireModal", enquireHandler);
        window.addEventListener("openPgdmModal", pgdmHandler);
        window.addEventListener("openMbaModal", mbaHandler);

        return () => {
            window.removeEventListener("openEnquireModal", enquireHandler);
            window.removeEventListener("openPgdmModal", pgdmHandler);
            window.removeEventListener("openMbaModal", mbaHandler);
        };
    }, []);

    return (
        <>
            {/* Icon Sidebar */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {/* PGDM Brochure */}
                    <IconBtn label="PGDM Brochure" onClick={() => setActiveModal("pgdm")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </IconBtn>

                    {/* MBA Brochure */}
                    <IconBtn label="MBA Global Brochure" onClick={() => setActiveModal("mba")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </IconBtn>

                    {/* Virtual Tour */}
                    {/* <IconBtn label="Virtual Tour" href="https://maps.app.goo.gl/RwFxw3jBKy4CD6FV8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </IconBtn> */}

                    {/* Enquire Now */}
                    <IconBtn label="Enquire Now" onClick={() => setActiveModal("enquire")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    </IconBtn>
                </ul>
            </div>

            {/* Modal */}
            {activeModal && (
                <div
                    className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={(e) => e.target === e.currentTarget && setActiveModal(null)}
                >
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between px-5 py-4 border-b bg-[#1a1a2e]">
                            <h2 className="text-lg font-bold text-white tracking-wide">{MODAL_TITLES[activeModal]}</h2>
                            <button
                                onClick={() => setActiveModal(null)}
                                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        <div>
                            <iframe
                                frameBorder="0"
                                width="100%"
                                height="480px"
                                className="w-full"
                                src={IFRAME_URLS[activeModal]}
                                title={MODAL_TITLES[activeModal]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingActions;
