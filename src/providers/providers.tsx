'use client'


import AuthProvider from '@/context/auth.context';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

//create client 

const queryClient = new QueryClient()

const Providers: React.FC<IProps> = ({ children }) => {

  return (
    <QueryClientProvider client = {queryClient}>
      <AuthProvider>
      <>
      {children}
      </>
      </AuthProvider>
    </QueryClientProvider>
  )
}


export default Providers;