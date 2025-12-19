'use client';
import { useEffect } from 'react';

export default function WebComponentLoader() {
  useEffect(() => {
    import('ethyl-ui/loader').then((ethyl) => {
      ethyl.defineCustomElements(window);
    });
  }, []);

  return null;
}
