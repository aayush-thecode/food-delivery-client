'use client'

import React from 'react'
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import { usePathname } from 'next/navigation'

interface IProps {
    children:React.ReactNode;
}

const Layout:React.FC<IProps> = ({children}) => {

  const pathname = usePathname();
  const hideNav = pathname === "/login" || pathname === "/register" || pathname ==="/forgot-password" || pathname ==="/reset-password";

  return (
    
         <div className='min-h-screen flex flex-col bg-white'>
            {!hideNav && (
              <div>
                <Header />
          </div>
              )}
           <div className='flex-grow'>
               {children}
            </div>
          {/* footer */}
            {!hideNav && <Footer />}
          </div>
          
  )};

export default Layout;