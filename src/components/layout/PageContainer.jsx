import React from 'react';

export default function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#3E2C22] selection:bg-[#651F30] selection:text-[#F8F3EA]">
      {children}
    </div>
  );
}

