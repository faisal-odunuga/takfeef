import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#0c3b2e', color: '#dce9df' }} className='pt-16 pb-7'>
      <div className='max-w-[1180px] mx-auto px-7'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14'>
          {/* Brand col */}
          <div>
            <Logo />
            <p className='text-[0.88rem] leading-relaxed max-w-[26ch]' style={{ color: '#a9bdaf' }}>
              Your Journey, Our Priority. Umrah and Hajj packages, handled from Nigeria to the
              Haramain.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h5
              className='text-white text-[0.95rem] mb-4 font-medium'
              style={{ fontFamily: 'var(--font-fraunces), serif' }}
            >
              Quick Links
            </h5>
            <ul className='space-y-2.5'>
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className='text-[0.88rem] transition-colors hover:text-[#c79a44]'
                    style={{ color: '#bcccc0' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h5
              className='text-white text-[0.95rem] mb-4 font-medium'
              style={{ fontFamily: 'var(--font-fraunces), serif' }}
            >
              Packages
            </h5>
            <ul className='space-y-2.5'>
              {['Sept–Nov Umrah', 'December Umrah', 'Ramadan Umrah', 'Visa Only'].map((p) => (
                <li key={p} className='text-[0.88rem]' style={{ color: '#bcccc0' }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className='text-white text-[0.95rem] mb-4 font-medium'
              style={{ fontFamily: 'var(--font-fraunces), serif' }}
            >
              Contact
            </h5>
            <ul className='space-y-2.5'>
              {[
                '+234 902 255 2931',
                '+234 810 170 4065',
                '+966 56 702 1266',
                'Ibadan, Oyo State',
              ].map((c) => (
                <li key={c} className='text-[0.88rem]' style={{ color: '#bcccc0' }}>
                  {c}
                </li>
              ))}
            </ul>
            <a
              href='https://wa.me/2349022552931'
              className='mt-5 inline-flex items-center gap-2 text-[0.88rem] font-semibold transition-colors hover:opacity-80'
              style={{ color: '#c79a44' }}
            >
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M3 21l1.4-4.2A8.5 8.5 0 1112 20.5c-1.4 0-2.7-.3-3.9-.9L3 21z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div
          className='pt-6 flex flex-wrap justify-between items-center gap-3 text-[0.8rem]'
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)', color: '#8ea497' }}
        >
          <span>© 2026 Takfeef Travels &amp; Tours. RC No: 9631291.</span>
          <span>Travel smart, travel Takfeef.</span>
        </div>
      </div>
    </footer>
  );
}
