import React, { Suspense } from 'react';
import Hero from '../Hero';
import Library from './Library';
import LibrarySkeleton from './LibrarySkeleton';

const HomePage = () => {
    return (
        <>
        <Hero/>
        <Suspense fallback={<LibrarySkeleton/>}>

        <Library/>
        </Suspense>
        
        </>
    );
};

export default HomePage;