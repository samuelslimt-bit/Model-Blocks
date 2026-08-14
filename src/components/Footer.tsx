import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#2E3947] text-[#FFFFFF] border-t border-[#3C4857] py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-lg font-bold tracking-wider text-[#FFFFFF]">
            Modify Services Limited
          </div>
          <p className="text-xs text-[#9AA0A6] mt-0.5 tracking-wider uppercase italic">
            &ldquo;Securing the future of Nigerian infrastructure, one block at a time.&rdquo;
          </p>
        </div>
        <div className="text-xs text-[#9AA0A6] font-mono border-t md:border-t-0 border-[#3C4857] pt-3 md:pt-0 w-full md:w-auto">
          Modify Services Limited &copy; 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
