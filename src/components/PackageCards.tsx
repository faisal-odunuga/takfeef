import Link from 'next/link';

const CheckIcon = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
    <path d='M5 13l4 4L19 7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

const packages = [
  {
    popular: true,
    name: 'Sept–Nov Umrah',
    duration: '4 days Madinah · 10 days Makkah · No food',
    price: '₦2.8M',
    note: 'per person',
    features: [
      'Flight, visa & transport included',
      'Accommodation close to the Haram',
      'Ziyārah & spiritual guidance',
    ],
  },
  {
    popular: false,
    name: 'December Umrah',
    duration: '4 days Madinah · 10 days Makkah · With food',
    price: '₦3M',
    note: 'per person',
    features: [
      'All meals throughout your stay',
      'Accommodation close to the Haram',
      'Ziyārah & spiritual guidance',
    ],
  },
  {
    popular: false,
    name: 'Umrah Visa Only',
    duration: 'For travelers arranging their own trip',
    price: '₦600K',
    note: 'per person',
    features: [
      'Multiple-entry Umrah visa',
      'Guidance through documentation',
      'Flights & hotel arranged by you',
    ],
  },
  {
    popular: false,
    name: 'Ramadan Umrah',
    duration: 'For travelers arranging their own trip',
    price: '₦4.5M',
    note: 'per person',
    features: [
      'Multiple-entry Umrah visa',
      'Flights to Makkah',
      'Accommodation in Makkah',
      'Guidance through documentation',
      'Flights & hotel arranged by you',
    ],
  },
];

export default function PackageCards() {
  return (
    <section className='py-22' style={{ backgroundColor: '#faf6ee' }}>
      <div className='max-w-[1180px] mx-auto px-7'>
        {/* Section header */}
        <div className='max-w-2xl mb-12'>
          <span
            className='block text-[1rem] mb-2.5'
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontStyle: 'italic',
              color: '#034593',
            }}
          >
            This season&apos;s packages
          </span>
          <h2
            className='text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.18] mb-3'
            style={{ fontFamily: 'var(--font-fraunces), serif', color: '#034494' }}
          >
            Three ways to travel with Takfeef
          </h2>
          <p className='text-[1.02rem]' style={{ color: '#4c584f' }}>
            Every package is built to make your journey easy — from the moment you register to the
            moment you return home.
          </p>
        </div>

        {/* Cards grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {packages.map((pkg, i) => (
            <div
              key={i}
              className='rounded-[6px] relative flex flex-col'
              style={{
                background: '#fff',
                border: `1px solid ${pkg.popular ? '#c79a44' : '#dcd3bf'}`,
                boxShadow: pkg.popular
                  ? '0 4px 24px rgba(199,154,68,0.15)'
                  : '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              {pkg.popular && (
                <span
                  className='absolute -top-3 left-6 text-[0.72rem] font-semibold text-white px-3 py-1 rounded-sm tracking-wide'
                  style={{ background: '#034494' }}
                >
                  Most popular
                </span>
              )}

              {/* Top */}
              <div className='p-7 pb-6'>
                <h3
                  className='text-[1.2rem] mb-1.5'
                  style={{ fontFamily: 'var(--font-fraunces), serif', color: '#034494' }}
                >
                  {pkg.name}
                </h3>
                <p className='text-[0.85rem]' style={{ color: '#4c584f' }}>
                  {pkg.duration}
                </p>
                <div className='mt-5 flex items-baseline gap-2'>
                  <span
                    className='text-[2rem] font-semibold'
                    style={{ fontFamily: 'var(--font-fraunces), serif', color: '#034494' }}
                  >
                    {pkg.price}
                  </span>
                  <span className='text-[0.8rem]' style={{ color: '#4c584f' }}>
                    {pkg.note}
                  </span>
                </div>
              </div>

              {/* Perforation */}
              <div className='perforation mx-0' />

              {/* Bottom */}
              <div className='p-7 pt-6 flex flex-col flex-1'>
                <ul className='space-y-2.5 flex-1'>
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className='flex items-start gap-2.5 text-[0.9rem]'
                      style={{ color: '#4c584f' }}
                    >
                      <span className='mt-0.5 shrink-0' style={{ color: '#034494' }}>
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href='/services'
                  className='mt-5 block w-full text-center py-3 rounded-sm text-[0.92rem] font-semibold transition-all hover:opacity-90 active:scale-[0.98]'
                  style={
                    pkg.popular
                      ? { background: '#034494', color: '#fff' }
                      : { border: '1.5px solid #034494', color: '#034494' }
                  }
                >
                  See full details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className='mt-9 pt-6 flex flex-wrap justify-between items-center gap-4 text-[0.9rem]'
          style={{ borderTop: '1px solid #dcd3bf', color: '#4c584f' }}
        >
          <span>
            <span className='font-semibold' style={{ color: '#034494' }}>
              Limited slots
            </span>{' '}
            remain for this season — early registration secures your gift package.
          </span>
          <Link href='/services' className='font-semibold underline' style={{ color: '#034494' }}>
            View every package →
          </Link>
        </div>
      </div>
    </section>
  );
}
