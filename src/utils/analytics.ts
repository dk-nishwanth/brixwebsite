// Google Analytics tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'engagement', `${buttonName} - ${location}`);
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent('phone_call', 'contact', 'header_phone');
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'header_email');
};

// Track downloads
export const trackDownload = (fileName: string) => {
  trackEvent('download', 'engagement', fileName);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  trackEvent('time_on_page', 'engagement', pageName, seconds);
};