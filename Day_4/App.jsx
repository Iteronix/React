import React from 'react';
import JSXPractice from './JSXPractice';
import EventHandlingPractice from './EventHandlingPractice';
import SpreadPropsPractice from './SpreadPropsPractice';
import DestructuringPractice from './DestructuringPractice';

const App = () => {
  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Day 4: React-Specific JavaScript Practice</h1>
      <JSXPractice />
      <EventHandlingPractice />
      <SpreadPropsPractice />
      <DestructuringPractice />
    </div>
  );
};

export default App;
