import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import PreviewCard from '../components/PreviewCard';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';



const About = ({ posts }) => {
  // console.warn(posts);

  const count = useSelector((state) => state.count)

  const [properties, setstate] = useState(posts);

  const handleChange = (e) => {
    // setstate([...properties, { name: e.target.value }]);
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <span>
          {count}
        </span>

        {properties &&
          properties.map((property) => (
            <div key={property.id}>{property.body}</div>
          ))}
      </div>

      {/* <input type="text" onClick={handleChange} />
      <div>About</div> */}
    </>
  );
};

// export async function getServerSideProps({ req }) {
//   console.warn(req);
//   const res = await fetch('https://api.chucknorris.io/jokes/random');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

About.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  console.warn('PATH_NAME', ctx.pathname);

  const posts = await res.json();

  return { posts };
};

export default About;
