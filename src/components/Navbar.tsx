'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className='sticky top-0 z-50 transition-all duration-300'
      style={{
        background: scrolled ? 'rgba(250,246,238,0.96)' : 'rgba(250,246,238,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #dcd3bf',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className='max-w-[1180px] mx-auto px-7 flex items-center justify-between py-4'>
        {/* Brand */}
        {/* <Link href="/" className="flex items-center gap-3 group">
          <BrandMark />
          <div>
            <div
              className="text-[1.35rem] font-semibold leading-none"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#0c3b2e" }}
            >
              Takfeef
            </div>
            <div className="text-[0.7rem] tracking-wide" style={{ color: "#4c584f" }}>
              Travels &amp; Tours
            </div>
          </div>
        </Link> */}
        <Logo />

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-[0.95rem] pb-1 border-b-2 transition-all duration-150'
              style={{
                color: pathname === link.href ? '#0c3b2e' : '#16201b',
                borderColor: pathname === link.href ? '#c79a44' : 'transparent',
                fontWeight: pathname === link.href ? '600' : '400',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <a
            href='https://wa.me/2349022552931'
            className='text-[0.88rem] font-semibold transition-colors duration-150 hover:opacity-80'
            style={{ color: '#0c3b2e' }}
          >
            WhatsApp Us
          </a>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center px-6 py-3 rounded-sm text-[0.92rem] font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]'
            style={{ background: '#a3212b' }}
          >
            Book Your Slot
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className='md:hidden flex flex-col gap-[5px] p-1.5'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span
            className='block w-6 h-0.5 transition-transform duration-200 origin-center'
            style={{
              background: '#0c3b2e',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            className='block w-6 h-0.5 transition-opacity duration-200'
            style={{
              background: '#0c3b2e',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className='block w-6 h-0.5 transition-transform duration-200 origin-center'
            style={{
              background: '#0c3b2e',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className='md:hidden px-7 py-6 border-t flex flex-col gap-5'
          style={{ borderColor: '#dcd3bf', background: '#faf6ee' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-base font-medium'
              style={{ color: pathname === link.href ? '#0c3b2e' : '#4c584f' }}
            >
              {link.label}
            </Link>
          ))}
          <div className='flex flex-col gap-3 pt-3 border-t' style={{ borderColor: '#dcd3bf' }}>
            <a
              href='https://wa.me/2349022552931'
              className='inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold border-2 transition-all'
              style={{ borderColor: '#0c3b2e', color: '#0c3b2e' }}
            >
              WhatsApp Us
            </a>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold text-white'
              style={{ background: '#a3212b' }}
            >
              Book Your Slot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function BrandMark() {
  return (
    <svg width='40' height='40' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='22' cy='22' r='21' stroke='#c79a44' strokeWidth='1.2' />
      <path
        d='M14 27L22 12L30 27'
        stroke='#0c3b2e'
        strokeWidth='2'
        strokeLinejoin='round'
        fill='none'
      />
      <path
        d='M17.5 27L22 18L26.5 27'
        stroke='#a3212b'
        strokeWidth='2'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
