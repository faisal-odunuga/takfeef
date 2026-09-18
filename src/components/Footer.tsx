import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#f1efe7', color: '#16201b' }} className='relative pt-16 pb-8 border-t border-[#dcd3bf]'>
      {/* Top pop-out color divider strip */}
      <div
        className='absolute top-0 left-0 right-0 h-[4px]'
        style={{
          background: 'linear-gradient(90deg, #034494 0%, #034494 50%, #c79a44 50%, #c79a44 100%)',
        }}
      />

      <div className='max-w-[1180px] mx-auto px-7'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14'>
          {/* Brand col */}
          <div>
            <Logo />
            <p className='text-[0.88rem] leading-relaxed max-w-[26ch] mt-4' style={{ color: '#4c584f' }}>
              Your Journey, Our Priority. Umrah and Hajj packages, handled from Nigeria to the
              Haramain.
            </p>
          </div>

          {/* Quick links */}
          <div className='lg:border-l lg:border-[#dcd3bf] lg:pl-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='w-2 h-2 rounded-full' style={{ background: '#c79a44' }} />
              <h5
                className='text-[1rem] font-semibold'
                style={{ fontFamily: 'var(--font-fraunces), serif', color: '#034494' }}
              >
                Quick Links
              </h5>
            </div>
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
                    className='text-[0.88rem] transition-colors hover:text-[#034494] font-medium'
                    style={{ color: '#4c584f' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className='lg:border-l lg:border-[#dcd3bf] lg:pl-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='w-2 h-2 rounded-full' style={{ background: '#034494' }} />
              <h5
                className='text-[1rem] font-semibold'
                style={{ fontFamily: 'var(--font-fraunces), serif', color: '#034494' }}
              >
                Packages
              </h5>
            </div>
            <ul className='space-y-2.5'>
              {['Sept–Nov Umrah', 'December Umrah', 'Ramadan Umrah', 'Visa Only'].map((p) => (
                <li key={p} className='text-[0.88rem]' style={{ color: '#4c584f' }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='lg:border-l lg:border-[#dcd3bf] lg:pl-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='w-2 h-2 rounded-full' style={{ background: '#25D366' }} />
              <h5
                className='text-[1rem] font-semibold'
                style={{ fontFamily: 'var(--font-fraunces), serif', color: '#034494' }}
              >
                Contact
              </h5>
            </div>
            <ul className='space-y-2.5'>
              {[
                '+234 902 255 2931',
                '+234 810 170 4065',
                '+966 56 702 1266',
                'Ibadan, Oyo State',
              ].map((c) => (
                <li key={c} className='text-[0.88rem]' style={{ color: '#4c584f' }}>
                  {c}
                </li>
              ))}
            </ul>
            <a
              href='https://wa.me/2349022552931'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5 inline-flex items-center gap-2 text-[0.88rem] font-semibold transition-colors hover:opacity-85'
              style={{ color: '#169c46' }}
            >
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M3 21l1.4-4.2A8.5 8.5 0 1112 20.5c-1.4 0-2.7-.3-3.9-.9L3 21z'
                  stroke='currentColor'
                  strokeWidth='1.6'
                />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider with color accents */}
        <div
          className='pt-6 flex flex-wrap justify-between items-center gap-3 text-[0.82rem]'
          style={{ borderTop: '1px solid #dcd3bf', color: '#5b6b61' }}
        >
          <span>© 2026 Takfeef Travels &amp; Tours. RC No: 9631291.</span>
          <span className='font-medium' style={{ color: '#034494' }}>Travel smart, travel Takfeef.</span>
        </div>
      </div>
    </footer>
  );
}
