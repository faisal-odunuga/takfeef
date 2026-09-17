'use client';

import { useState } from 'react';

const contactItems = [
  {
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
        <path
          d='M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <circle cx='12' cy='10' r='2.5' stroke='currentColor' strokeWidth='1.5' />
      </svg>
    ),
    label: 'Office address',
    value:
      'Shop 11, Oluwa Tosin Shopping Complex, beside NISER, UI/Ojoo Road, Ibadan, Oyo State, Nigeria',
  },
  {
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
        <path
          d='M3 5c0 9 7 16 16 16l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 1z'
          stroke='currentColor'
          strokeWidth='1.3'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Nigeria',
    value: '+234 902 255 2931 · +234 810 170 4065',
  },
  {
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
        <path
          d='M3 5c0 9 7 16 16 16l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 1z'
          stroke='currentColor'
          strokeWidth='1.3'
          strokeLinejoin='round'
        />
      </svg>
    ),
    label: 'Saudi Arabia',
    value: '+966 56 702 1266',
  },
  {
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
        <rect x='3' y='5' width='18' height='14' rx='2' stroke='currentColor' strokeWidth='1.5' />
        <path d='M3 7l9 6 9-6' stroke='currentColor' strokeWidth='1.5' />
      </svg>
    ),
    label: 'Email & social',
    value: 'takfeeftravels@gmail.com · @takfeeftravel on Instagram & TikTok',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className='py-16' style={{ background: '#faf6ee' }}>
      <div className='max-w-[1180px] mx-auto px-7'>
        {/* Header */}
        <div className='max-w-2xl mb-14'>
          <span
            className='block text-[1rem] mb-2.5'
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontStyle: 'italic',
              color: '#a3212b',
            }}
          >
            Get in touch
          </span>
          <h1
            className='text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.15] mb-4'
            style={{ fontFamily: 'var(--font-fraunces), serif', color: '#0c3b2e' }}
          >
            Let&apos;s plan your pilgrimage
          </h1>
          <p className='text-[1.02rem]' style={{ color: '#4c584f' }}>
            Reach us by phone, WhatsApp, or in person at our Ibadan office — whichever is easiest
            for you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14'>
          {/* Contact info */}
          <div>
            <div className='space-y-0'>
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className='flex items-start gap-4 py-5'
                  style={{ borderBottom: '1px solid #dcd3bf' }}
                >
                  <span className='mt-0.5 shrink-0' style={{ color: '#a3212b' }}>
                    {item.icon}
                  </span>
                  <div>
                    <h3
                      className='text-[0.95rem] mb-1'
                      style={{ fontFamily: 'var(--font-fraunces), serif', color: '#0c3b2e' }}
                    >
                      {item.label}
                    </h3>
                    <p className='text-[0.9rem]' style={{ color: '#4c584f' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className='mt-6 h-fit rounded-[6px] flex items-center justify-center text-[0.85rem]'
              style={{
                background:
                  'linear-gradient(135deg, rgba(21,87,67,0.06) 25%, transparent 25%) -10px 0 / 20px 20px, linear-gradient(225deg, rgba(21,87,67,0.06) 25%, transparent 25%) -10px 0 / 20px 20px, #e8efe9',
                border: '1px solid #dcd3bf',
                color: '#4c584f',
              }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.033636950435!2d3.908483910842368!3d7.46153071152092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed0ac168926f%3A0xec3cf4a85c9d9bb2!2sOluwa-Tosin%20Shopping%20Complex!5e0!3m2!1sen!2sng!4v1789682260817!5m2!1sen!2sng'
                width='600'
                height='450'
                style={{ border: '0' }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='strict-origin-when-cross-origin'
              ></iframe>
            </div>

            <a
              href='https://wa.me/2349022552931'
              className='mt-5 flex items-center justify-center gap-2 w-full py-4 rounded-sm text-white font-semibold transition-all hover:opacity-90 active:scale-[0.98]'
              style={{ background: '#a3212b' }}
            >
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M3 21l1.4-4.2A8.5 8.5 0 1112 20.5c-1.4 0-2.7-.3-3.9-.9L3 21z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinejoin='round'
                />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <div
            className='p-9 rounded-[6px]'
            style={{ background: '#fff', border: '1px solid #dcd3bf' }}
          >
            {submitted ? (
              <div className='flex flex-col items-center justify-center h-full py-12 text-center'>
                <div
                  className='w-16 h-16 rounded-full flex items-center justify-center mb-6'
                  style={{ background: '#e8efe9' }}
                >
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M5 13l4 4L19 7'
                      stroke='#0c3b2e'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <h3
                  className='text-[1.4rem] mb-3'
                  style={{ fontFamily: 'var(--font-fraunces), serif', color: '#0c3b2e' }}
                >
                  Message received!
                </h3>
                <p className='text-[0.95rem]' style={{ color: '#4c584f' }}>
                  We&apos;ll get back to you shortly. May Allah bless your journey.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className='space-y-5'
              >
                <div>
                  <label className='block text-[0.82rem] mb-1.5' style={{ color: '#4c584f' }}>
                    Full name
                  </label>
                  <input
                    id='contact-name'
                    type='text'
                    required
                    placeholder='Your full name'
                    className='w-full px-4 py-3 rounded-[4px] text-[0.95rem] transition-all outline-none'
                    style={{
                      border: '1px solid #dcd3bf',
                      background: '#faf6ee',
                      color: '#16201b',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#c79a44')}
                    onBlur={(e) => (e.target.style.borderColor = '#dcd3bf')}
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <div>
                    <label className='block text-[0.82rem] mb-1.5' style={{ color: '#4c584f' }}>
                      Phone number
                    </label>
                    <input
                      id='contact-phone'
                      type='tel'
                      required
                      placeholder='+234 000 000 0000'
                      className='w-full px-4 py-3 rounded-[4px] text-[0.95rem] transition-all outline-none'
                      style={{
                        border: '1px solid #dcd3bf',
                        background: '#faf6ee',
                        color: '#16201b',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#c79a44')}
                      onBlur={(e) => (e.target.style.borderColor = '#dcd3bf')}
                    />
                  </div>
                  <div>
                    <label className='block text-[0.82rem] mb-1.5' style={{ color: '#4c584f' }}>
                      Preferred package
                    </label>
                    <select
                      id='contact-package'
                      className='w-full px-4 py-3 rounded-[4px] text-[0.95rem] outline-none'
                      style={{
                        border: '1px solid #dcd3bf',
                        background: '#faf6ee',
                        color: '#16201b',
                      }}
                    >
                      <option>Sept–Nov Umrah</option>
                      <option>December Umrah</option>
                      <option>Ramadan Umrah</option>
                      <option>Visa Only</option>
                    </select>
                  </div>
                </div>

                <div
                  className='flex items-center gap-2 text-[0.82rem]'
                  style={{ color: '#4c584f' }}
                >
                  <input id='wa-toggle' type='checkbox' className='w-auto' />
                  <label htmlFor='wa-toggle'>This is also my WhatsApp number</label>
                </div>

                <div>
                  <label className='block text-[0.82rem] mb-1.5' style={{ color: '#4c584f' }}>
                    Message
                  </label>
                  <textarea
                    id='contact-message'
                    rows={4}
                    placeholder='Tell us about your trip...'
                    className='w-full px-4 py-3 rounded-[4px] text-[0.95rem] resize-none outline-none'
                    style={{
                      border: '1px solid #dcd3bf',
                      background: '#faf6ee',
                      color: '#16201b',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#c79a44')}
                    onBlur={(e) => (e.target.style.borderColor = '#dcd3bf')}
                  />
                </div>

                <button
                  type='submit'
                  id='contact-submit'
                  className='w-full py-4 rounded-sm text-white font-semibold text-[0.95rem] transition-all hover:opacity-90 active:scale-[0.98]'
                  style={{ background: '#a3212b' }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
