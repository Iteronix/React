import React from 'react';

const JSXPractice = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const items = ['Book', 'Pen', 'Notebook'];
  const isLoggedIn = true;
  const styles = {
    color: 'green',
    fontSize: '18px',
    backgroundColor: '#f3f3f3',
    padding: '8px',
    borderRadius: '6px',
  };
  const today = new Date().toLocaleDateString();

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>1. Understanding JSX</h2>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 1</h3>
        <header>
          <img src="https://via.placeholder.com/60" alt="logo" style={{ width: '60px' }} />
          <nav>
            <a href="#home" style={{ marginRight: '8px' }}>Home</a>
            <a href="#about" style={{ marginRight: '8px' }}>About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 2</h3>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 3</h3>
        <p>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 4</h3>
        <p>You have {items.length} items</p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 5</h3>
        <p style={styles}>Styled text with an inline style object.</p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 6</h3>
        <input type="text" placeholder="Enter your name" />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 7</h3>
        <>
          <p>First fragment item</p>
          <p>Second fragment item</p>
        </>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 8</h3>
        <div>
          {/* This is a JSX comment inside the return statement */}
          <p>Comment example</p>
        </div>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 9</h3>
        <table border="1" cellPadding="8">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Age</td>
            </tr>
            <tr>
              <td>Alice</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 10</h3>
        <p>Current date: {today}</p>
      </section>
    </div>
  );
};

export default JSXPractice;
