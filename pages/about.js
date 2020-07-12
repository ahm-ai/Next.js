import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import PreviewCard from '../components/PreviewCard';
import { useRouter } from 'next/router';

const About = ({ posts }) => {
  // console.warn(posts);

  const [properties, setstate] = useState([posts]);

  useEffect(() => {}, []);

  // console.warn('=>', properties);

  // const { pathname, events } = useRouter();
  // console.warn(pathname);

  const handleChange = (e) => {
    // setstate([...properties, { name: e.target.value }]);
  };

  return (
    <>
      <Navigation />
      <div className="container">
        {properties &&
          properties.map((property) => (
            <div key={property.id}>{property.value}</div>
          ))}
      </div>

      {/* <input type="text" onClick={handleChange} />
      <div>About</div> */}
    </>
  );
};

About.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');

  // console.warn('PATH_NAME', ctx.pathname);
  const posts = await res.json();

  return {
    posts,
  };

  // return { stars: json.stargazers_count };
};

export default About;
