import React from 'react'

export default function StatusBar() {
  return (
    <div className="bg-white h-[54px] overflow-hidden relative w-full max-w-[390px]" data-name="Type=IOS" data-node-id="612:331">
      <p className="absolute font-sf-pro font-semibold leading-normal left-4 text-[15px] text-neutral-n800 top-[18px] tracking-[-0.165px]">
        9:41
      </p>
      <div className="absolute h-3 right-4 top-[21px] w-[90px]">
        {/* Status bar icons - 간단한 SVG로 대체 */}
        <div className="flex items-center justify-end gap-1 h-full">
          <svg width="17" height="10" viewBox="0 0 17 10" fill="none">
            <path d="M1 5L3 3L5 5L7 2L9 5L11 3L13 5L15 2L16 3" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M1 5.5C1 3.5 2.5 2 4.5 2H6.5C7.5 2 8.5 2.5 9 3.5L9.5 4.5L10 5.5C10.5 6.5 11.5 7 12.5 7H13.5C14.5 7 15 7.5 15 8.5V9.5" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M11 4L13 6L15 4" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
            <rect x="1" y="2" width="20" height="7" rx="1" stroke="#1e293b" strokeWidth="1.5"/>
            <path d="M22 5.5H23" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="4" y="4" width="14" height="3" rx="0.5" fill="#1e293b"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
