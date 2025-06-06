import React, { useState, useRef } from 'react';

export default function SearchBar() {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const recognitionRef = useRef(null);

  const handleMicClick = () => {
    if (isListening) {
      stopVoiceRecognition();
      return;
    }

    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support speech recognition");
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setIsListening(false);
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
  };

  const stopVoiceRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleLensClick = async () => {
    try {
      setShowCamera(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera");
      setShowCamera(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setShowCamera(false);
  };

  return (
    <div className="search-container">
      <div className="google-title">
        <span className="google-letter">G</span>
        <span className="google-letter">o</span>
        <span className="google-letter">o</span>
        <span className="google-letter">g</span>
        <span className="google-letter">l</span>
        <span className="google-letter">e</span>
      </div>
      
      <div className="search-box">
        <img 
          src="/images/search-icon.png" 
          alt="Search" 
          className="search-icon" 
        />
        
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search Google or type a URL"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="right-icons">
          <img 
            src="/images/lens-icon.png" 
            alt="Search by image" 
            className="icon lens-icon"
            onClick={handleLensClick}
          />
          
          <img 
            src="/images/mic-icon.png" 
            alt="Voice search" 
            className={`icon mic-icon ${isListening ? 'active' : ''}`}
            onClick={handleMicClick}
          />
        </div>
        
        {showCamera && (
          <div className="camera-modal">
            <video ref={videoRef} autoPlay playsInline className="camera-feed"></video>
            <div className="camera-controls">
              <button onClick={stopCamera}>Close Camera</button>
              <button className="capture-btn">Search This Image</button>
            </div>
          </div>
        )}
        
        <div className="buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </div>
      
      <p className="suggestion">Google Gemini, create a cricket quiz game to play with my friend</p>
      
      <div className="language-section">
        <div className="language-links">Google offered in:
          <a href="#">हिन्दी</a>
          <a href="#">বাংলা</a>
          <a href="#">தமிழ்</a>
          <a href="#">తెలుగు</a>
          <a href="#">मराठी</a>
          <a href="#">ગુજરાતી</a>
        </div>
      </div>
    </div>
  );
}