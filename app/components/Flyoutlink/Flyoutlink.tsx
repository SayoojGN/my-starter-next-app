import React from 'react'
import { useState } from 'react';

const Flyoutlink = ({children, href, FlyoutContent}) => {
    const [Open, setOpen] = useState(false);

    const showFlyout = Open && FlyoutContent;;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="group relative h-fit w-fit"
      >
        <a href={href} className="relative">
          {children}
          <span
            style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
            className="absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left rounded-full bg-black transition-transform duration-300 ease-out"
          />
        </a>
        {showFlyout && (
          <div className="absolute pt-10 left-1/2 -translate-x-1/2">
            <FlyoutContent />
          </div>
        )}
      </div>
    );
}

export default Flyoutlink