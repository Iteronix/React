import React, { useState } from 'react';

const Profile = ({ name, age }) => <p>{name} is {age} years old.</p>;

const NestedUser = ({ user: { name, email } }) => <p>{name} - {email}</p>;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

const MessageCard = (props) => {
  const { title, children, ...rest } = props;
  return <div {...rest}>{title}: {children}</div>;
};

const InputField = () => {
  const [value, setValue] = useState('');
  const handleChange = ({ target: { value } }) => setValue(value);
  return <input value={value} onChange={handleChange} placeholder="Type here" />;
};

const useUserData = () => {
  const user = { name: 'Asha', email: 'asha@example.com' };
  const loading = false;
  return [user, loading];
};

const DestructuringPractice = () => {
  const [firstName, setFirstName] = useState('Sara');
  const [age, setAge] = useState(21);
  const [user, loading] = useUserData();

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>4. Destructuring Props and State</h2>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 1</h3>
        <Profile name="Mina" age={20} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 2</h3>
        <NestedUser user={{ name: 'Nina', email: 'nina@example.com' }} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 3</h3>
        <Counter />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 4</h3>
        <MessageCard title="Hello" data-id="card-2">World</MessageCard>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 5</h3>
        <MessageCard title="Only needed props" style={{ color: 'green' }}>Example</MessageCard>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 6</h3>
        <Profile name="Lina" age={25} />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 7</h3>
        <InputField />
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 8</h3>
        <p>{firstName} is {age} years old.</p>
        <button onClick={() => { setFirstName('Nora'); setAge(22); }}>Update</button>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 9</h3>
        <p>{loading ? 'Loading...' : user.name}</p>
      </section>

      <section style={{ marginBottom: '16px' }}>
        <h3>Task 10</h3>
        <Profile name="Kia" age={19} />
      </section>
    </div>
  );
};

export default DestructuringPractice;
