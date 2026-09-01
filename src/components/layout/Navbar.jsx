"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link href="/" className="brand" onClick={closeMenu}>
          <Image
            src="/images/logo/learvix-logo-v2.png"
            alt="LEARVIX icon"
            width={46}
            height={46}
            priority
          />

          <span>LEARVIX</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/ai-tools">AI Tools</Link>
          <Link href="/study-guides">Study Guides</Link>
          <Link href="/exam-prep">Exam Prep</Link>
          <Link href="/notes-pdfs">Notes & PDFs</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <Link href="/blog" className="nav-cta">
          Explore Guides
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav
          className="container mobile-nav-links"
          aria-label="Mobile navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/ai-tools" onClick={closeMenu}>
            AI Tools
          </Link>

          <Link href="/study-guides" onClick={closeMenu}>
            Study Guides
          </Link>

          <Link href="/exam-prep" onClick={closeMenu}>
            Exam Prep
          </Link>

          <Link href="/notes-pdfs" onClick={closeMenu}>
            Notes & PDFs
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>

          <Link
            href="/blog"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Explore Guides
          </Link>
        </nav>
      </div>
    </header>
  );
}