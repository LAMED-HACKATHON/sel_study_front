'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const QueryProvider = ({ children }: Props) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: (failureCount: number) => failureCount < 2,
          },
        },
      }),
    [],
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default QueryProvider;
