import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header">About</a>
        <a href="https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN">Store</a>
      </div>
      <div className="header-right">
        <a href="https://accounts.google.com/v3/signin/accountchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&emr=1&ifkv=AdBytiOVRtx0ueINtsKV8r69yrHxzla2mlE2hzzupDjfU1l3f3M1AiC2_A2-8MyQnKYiiGhda0Mc&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S2013327218%3A1749209237172660">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">Images</a>
        <img src="./images/icon1.png" alt="Icon 1" className="header-icon1" />
        <img src="./images/icon2.png" alt="Icon 2"  className="header-icon" />
      </div>
    </div>
  );
}