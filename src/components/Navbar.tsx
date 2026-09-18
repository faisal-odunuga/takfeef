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
        <Logo />

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-[0.95rem] pb-1 border-b-2 transition-all duration-150'
              style={{
                color: pathname === link.href ? '#034494' : '#16201b',
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
            target='_blank'
            rel='noopener noreferrer'
            className='text-[0.88rem] font-semibold transition-colors duration-150 hover:opacity-80'
            style={{ color: '#034494' }}
          >
            WhatsApp Us
          </a>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center px-6 py-3 rounded-sm text-[0.92rem] font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]'
            style={{ background: '#034494' }}
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
              background: '#034494',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            className='block w-6 h-0.5 transition-opacity duration-200'
            style={{
              background: '#034494',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className='block w-6 h-0.5 transition-transform duration-200 origin-center'
            style={{
              background: '#034494',
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
              style={{ color: pathname === link.href ? '#034494' : '#4c584f' }}
            >
              {link.label}
            </Link>
          ))}
          <div className='flex flex-col gap-3 pt-3 border-t' style={{ borderColor: '#dcd3bf' }}>
            <a
              href='https://wa.me/2349022552931'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold border-2 transition-all'
              style={{ borderColor: '#034494', color: '#034494' }}
            >
              WhatsApp Us
            </a>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold text-white'
              style={{ background: '#034494' }}
            >
              Book Your Slot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

