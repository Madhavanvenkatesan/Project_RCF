"use client";

type HamburgerMenuProps = {
    isOpen: boolean; // Controlled by the parent component
    onClick: () => void; // Triggered when the burger is clicked
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
    return (
        <button className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none" onClick={onClick} aria-label="Toggle menu">
            <div className={`relative w-6 h-0.5 bg-slate-800 dark:bg-white rounded transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <span className={`absolute w-full h-full bg-slate-800 dark:bg-white rounded left-0 -top-2 transition-transform duration-300 ${isOpen ? "top-0 -rotate-[270deg]" : ""}`}>
                </span>
                <span className={`absolute w-full h-full bg-slate-800 dark:bg-white rounded left-0 top-2 transition-transform duration-300 ${isOpen ? "!top-0 rotate-[270deg]" : ""}`}>
                </span>
            </div>
        </button>
    );
};

export default HamburgerMenu;

