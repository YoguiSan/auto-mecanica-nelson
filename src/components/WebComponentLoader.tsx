'use client';
import { useEffect } from 'react';

export default function WebComponentLoader() {
  useEffect(() => {
    import('ethyl-ui');
    import('ethyl-ui/index.css');
  }, []);

  return null;
}
