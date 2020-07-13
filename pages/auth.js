import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Auth() {
  const router = useRouter();


  useEffect(() => {
    const id = setInterval(() => {
        console.warn("LOG");
      }, 1000);
      return () => {
        clearInterval(id)
      }
  }, [])



  const handleClick = (e) => {
    // e.preventDefault();

    setTimeout(() => {
      console.warn('DONE');
      router.push('/');
    }, 2000);
  };

  handleClick();

  return (
    <div>
      <span onClick={handleClick}>Auth!!!</span>
    </div>
  );
}

// Auth.getInitialProps = async (ctx) => {
//   //   const router = useRouter();

// };
