import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-location">India</div>
      <div className="footer-links-container">
        <div className="footer-links-left">
          <a href="https://business.google.com/in/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
          <a href="https://business.google.com/in/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Business</a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
        </div>
        <div className="footer-links-right">
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </div>
  );
}