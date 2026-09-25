'use client';
import { useEffect } from 'react';

export default function WebComponentLoader() {
  useEffect(() => {
    import('e100-ui');
  }, []);

  return null;
}
