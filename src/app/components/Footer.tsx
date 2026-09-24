import Image from 'next/image';
import React from 'react';
import footerLogo from '@/assets/logo.png';

const Footer = () => {
    return (
        <div className='w-full border-t border-gray-800 bg-gray-900'>
            <div className='container mx-auto px-4 py-6 md:px-6'>
                <div className='flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left'>
                    <div className='flex items-center gap-3 text-2xl font-black tracking-wider text-white'>
                        <Image 
                            src={footerLogo} 
                            alt='Footer logo' 
                            width={32} 
                            height={32} 
                            className='h-8 w-8 object-contain'
                        />
                        <h3>FITLOG</h3>
                    </div>
                    <div>
                        <p className='text-xs font-medium text-gray-400 sm:text-sm'>
                            © 2026 FitLog — Workout Library. Train hard, log honest.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;