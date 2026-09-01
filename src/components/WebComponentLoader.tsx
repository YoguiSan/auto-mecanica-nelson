'use client';
import { useEffect } from 'react';

export default function WebComponentLoader() {
  useEffect(() => {
    import('ethyl-ui');
  }, []);

  return null;
}
