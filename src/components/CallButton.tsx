
import React from 'react';
import { Phone } from 'lucide-react';

interface CallButtonProps {
  phoneNumber: string;
  className?: string;
}

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber, className = '' }) => {
  const handleCall = () => {
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17082191580/CFMSCOmrrcgaENydttE_'
      });
    }
    
    // Open dialer
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className={`call-button ${className}`}
    >
      <Phone size={18} />
      Call Now: {phoneNumber}
    </button>
  );
};

export default CallButton;
