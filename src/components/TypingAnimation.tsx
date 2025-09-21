import React, { useState, useEffect } from 'react';

const TypingAnimation: React.FC = () => {
  const words = ['Explore', 'Travel Smart', 'Stay Safe'];
  const colors = ['text-green-300', 'text-blue-300', 'text-yellow-300'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typeSpeed, words]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      <span className={colors[currentWordIndex]}>
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
      <span className="block text-white">Uttarakhand</span>
    </h1>
  );
};

export default TypingAnimation;