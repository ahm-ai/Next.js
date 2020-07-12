import Navigation from '../components/Navigation';
import { useState } from 'react';
import PreviewCard from '../components/PreviewCard';

const About = () => {
  let initialState = [{ name: 'Yoshi' }, { name: 'Mario' }, { name: 'Luigi' }];

  const [categories, setstate] = useState(initialState);

  const handleChange = (e) => {
    setstate([...categories, { name: e.target.value }]);
  };

  return (
    <>
      <Navigation />
      <div className="container">
        {categories.map(({ name }) => (
          <div key={name}>
            <PreviewCard name={name} />
          </div>
        ))}
      </div>

      <input type="text" onClick={handleChange} />
      <div>About</div>
    </>
  );
};

export default About;
