import React from 'react';

export default function DefaultLayout({ children }) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-700">
      {children}
    </div>
  );
}
