
'use client'
 
import { useRouter } from 'next/navigation';
function Home() {
  const router = useRouter();
  const navigate =(page) =>{
    router.push(page);
  }
 
  return (
    <section>
      <h1>useRouter</h1>
      <button onClick={() => navigate("/about")} type='btn' className='px-2 py-4 border'>Go to about Home</button>
    </section>
  );
}

export default Home;
