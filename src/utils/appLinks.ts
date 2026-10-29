import { BRAND_CONFIG } from '../data/websiteData';

/**
 * Mobile Device Detection Helpers
 */
export const isAndroid = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return /Android/i.test(navigator.userAgent);
};

export const isIOS = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return (
    /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    // iPadOS on Safari masquerades as MacIntel but has maxTouchPoints > 1
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
};

export const isMobileDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return isAndroid() || isIOS() || /mobile|tablet/i.test(navigator.userAgent);
};

/**
 * Returns formatted Google Play Store URL with UTM attribution parameters
 */
export const getPlayStoreTrackedUrl = (_source = 'website'): string => {
  return BRAND_CONFIG.playStoreUrl;
};

/**
 * Smart App Download Handler
 * - On Android: Triggers direct native Google Play Store app opening (via market:// intent)
 *               with fallback to browser Play Store link and UTM tracking.
 * - On iOS: Gracefully routes to Web App (PWA) or triggers the iOS PWA guide modal.
 * - On Desktop: Opens the official Google Play web page in a new tab.
 */
export const triggerSmartDownload = (
  e?: React.MouseEvent,
  source = 'hero',
  onShowIOSModal?: () => void
): void => {
  if (e) {
    e.preventDefault();
  }

  // 1. iOS Visitor Handling
  if (isIOS()) {
    if (onShowIOSModal) {
      onShowIOSModal();
      return;
    }
    // Direct fallback to Web App
    window.open(BRAND_CONFIG.webAppUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  // 2. Android Visitor Handling (1-Tap Native Google Play App Intent)
  if (isAndroid()) {
    const marketUrl = 'market://details?id=space.nearestate.twa';
    const webFallback = getPlayStoreTrackedUrl(source);

    // Attempt market:// scheme first for immediate native app store popup
    const start = Date.now();
    window.location.href = marketUrl;

    // Fallback to web link if market:// is blocked or not installed
    setTimeout(() => {
      if (Date.now() - start < 1500) {
        window.open(webFallback, '_blank', 'noopener,noreferrer');
      }
    }, 600);
    return;
  }

  // 3. Desktop / Default Handling
  window.open(getPlayStoreTrackedUrl(source), '_blank', 'noopener,noreferrer');
};
