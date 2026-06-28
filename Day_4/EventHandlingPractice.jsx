import React, { useState } from 'react';

const EventHandlingPractice = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(true);
  const [bgColor, setBgColor] = useState('white');
  const [message, setMessage] = useState('Select a button');
  const [liked, setLiked] = useState(0);
  const [status, setStatus] = useState('Move the mouse over me');

  const handleAlert = () => alert('Button clicked!');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>2. Event Handling in React</h2>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 1</h3>
        <button onClick={handleAlert}>Show Alert</button>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 2</h3>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: '0 8px' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 3</h3>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here" />
        <p>You typed: {text}</p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 4</h3>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'} Message</button>
        {visible && <p>Toggle message is visible</p>}
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 5</h3>
        <button onClick={() => setBgColor('lightblue')}>Change Background</button>
        <div style={{ backgroundColor: bgColor, padding: '10px', marginTop: '8px' }}>Background color changes.</div>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 6</h3>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 7</h3>
        <button onClick={() => setMessage('First message')}>One</button>
        <button onClick={() => setMessage('Second message')}>Two</button>
        <button onClick={() => setMessage('Third message')}>Three</button>
        <p>{message}</p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 8</h3>
        <button onClick={() => setLiked(liked + 1)}>Like</button>
        <span style={{ marginLeft: '8px' }}>{liked} likes</span>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 9</h3>
        <p
          onMouseOver={() => setStatus('Mouse is over')}
          onMouseOut={() => setStatus('Mouse left')}
          style={{ display: 'inline-block', padding: '8px', border: '1px solid #ccc' }}
        >
          {status}
        </p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 10</h3>
        <button onClick={(event) => console.log(event)}>Log Event Object</button>
      </section>
    </div>
  );
};

export default EventHandlingPractice;
