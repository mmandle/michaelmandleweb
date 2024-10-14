'use client';
import { usePathname } from 'next/navigation';
import Home from './home';
import About from './about/page'; 

export default function Page() {
    const pathname = usePathname();

    if (pathname === '/about') {
        return <About />;
    }

    return <Home />;
}
