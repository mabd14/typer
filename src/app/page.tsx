'use client';
import React, { useState } from 'react';

export default function Home() {
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const [typingStatus, setTypingStatus] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    const lastChar = newInput[newInput.length - 1];
    
    const newTypingStatus = [...typingStatus];
    newTypingStatus[score] = text[score] === lastChar;
    
    setTypingStatus(newTypingStatus);
    setScore(score + 1);
    setInputValue(newInput);
  };

  return (
    <main className="relative flex h-screen justify-center items-center bg-selka pl-8 pr-8">
      <p className="text-2xl relative">
        {text.split('').map((char, index) => (
          <React.Fragment key={index}>
            {index < score ? (
              <span 
                className={typingStatus[index] ? 'text-green-500' : 'text-red-500'}
              >
                {char}
              </span>
            ) : (
              <span className="text-gray-400">
                {char}
              </span>
            )}
            {/* Add cursor after the current typing position */}
            {index === score && (
              <span className="inline-block h-7 w-0.5 bg-gray-100 animate-pulse mx-[1px] align-middle" />
            )}
          </React.Fragment>
        ))}
      </p>

      <input
        type="text"
        className="absolute top-0 left-0 w-full h-full opacity-0 caret-black focus:caret-indigo-500"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      />
    </main>
  );
}