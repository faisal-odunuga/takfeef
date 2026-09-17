import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/images/logo.png' alt='Logo' width={35} height={35} className='w-14 h-auto' />
    </Link>
  );
};

export default Logo;
