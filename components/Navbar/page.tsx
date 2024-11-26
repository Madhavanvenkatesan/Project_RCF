"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../Menuburger/page";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="w-full">
            <nav className="flex justify-between items-center  bg-slate-100 shadow-sm">
                {/* Logo Section */}
                <div className="py-2 px-4">
                    <Image src="/logo.svg" alt="Logo" width={65} height={65} />
                </div>

                {/* Navigation Links (Hidden on mobile) */}
                <div className="hidden md:flex space-x-8 text-sm">
                    <Link href="/" className="p-3 text-gray-600 hover:text-gray-900 dark:text-slate-400">
                        Accueil
                    </Link>
                    <Link href="/about" className="p-3 text-gray-600 hover:text-gray-900 dark:text-slate-400">
                        Services
                    </Link>
                    <Link href="/services" className="p-3 text-gray-600 hover:text-gray-900 dark:text-slate-400">
                        À Propos
                    </Link>
                    <Link href="/contact" className="p-3 text-gray-600 hover:text-gray-900 dark:text-slate-400">
                        Contact
                    </Link>
                </div>

                {/* Hamburger Menu (Visible on mobile) */}
                <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
            </nav>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
    <div className="absolute top-12 left-0 w-full bg-inherit text-center px-4 py-3 space-y-2 z-50 md:hidden">
        <Link
            href="/"
            className="block text-gray-600 hover:text-gray-900 dark:text-slate-400"
            onClick={closeMenu}
        >
            Accueil
        </Link>
        <Link
            href="/about"
            className="block text-gray-600 hover:text-gray-900 dark:text-slate-400"
            onClick={closeMenu}
        >
            Services
        </Link>
        <Link
            href="/services"
            className="block text-gray-600 hover:text-gray-900 dark:text-slate-400"
            onClick={closeMenu}
        >
            À Propos
        </Link>
        <Link
            href="/contact"
            className="block text-gray-600 hover:text-gray-900 dark:text-slate-400"
            onClick={closeMenu}
        >
            Contact
        </Link>
    </div>
)}

        </header>
    );
}

