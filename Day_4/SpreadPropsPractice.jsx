import React from 'react';

const Button = ({ label, ...props }) => <button {...props}>{label}</button>;

const Card = ({ title, color = 'blue', ...props }) => (
  <div {...props} style={{ padding: '12px', border: '1px solid #ccc', color, ...props.style }}>
    {title}
  </div>
);

const Wrapper = ({ children, ...props }) => <div {...props}>{children}</div>;

const SpreadPropsPractice = () => {
  const config = { title: 'Profile', color: 'purple', disabled: false };
  const override = { color: 'red' };
  const styleArray = [{ color: 'white' }, { backgroundColor: 'teal' }, { padding: '8px' }];
  const buttonProps = {
    onClick: () => alert('Passed from parent'),
    className: 'btn-primary',
  };
  const htmlProps = { id: 'card-1', title: 'Card title' };
  const stateData = { name: 'Riya', role: 'Developer' };
  const extraProps = { age: 22 };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>3. Spread Operator in Props</h2>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 1</h3>
        <Card {...config} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 2</h3>
        <Card {...config} {...override} title="Overridden card" />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 3</h3>
        <Card title="Default card" color="orange" />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 4</h3>
        <div style={{ ...styleArray[0], ...styleArray[1], ...styleArray[2] }}>Spreading array styles</div>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 5</h3>
        <Button label="Click me" {...buttonProps} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 6</h3>
        <Card title="HTML attributes" {...htmlProps} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 7</h3>
        <Card {...stateData} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 8</h3>
        <Card {...{ ...config, ...extraProps }} title="Merged props" />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 9</h3>
        <Card {...config} status="active" />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 10</h3>
        <Wrapper data-test="wrapper">
          <p>Props forwarded through a wrapper component.</p>
        </Wrapper>
      </section>
    </div>
  );
};

export default SpreadPropsPractice;
