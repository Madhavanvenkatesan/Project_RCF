"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../menuburger/page";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <nav className="flex justify-between items-center bg-inherit px-4 py-3">
                {/* Logo Section */}
                <div className="p-2">
                    <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                </div>

                {/* Navigation Links (Hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
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
                <div className="md:hidden text-center bg-inherit px-4 py-3 space-y-2">
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

