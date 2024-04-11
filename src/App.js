import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import useWindowSize from './useWindowSize'; // Import the custom hook

function App() {
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= 768; // Example threshold for desktop

  return (
    <div>
      {isDesktop ? (
        // For desktop (medium screens and above)
        <div className='overflow-x-hidden'>
          <Navbar />
          {/* background */}
          <video
            src={process.env.PUBLIC_URL + "/assets/video/almonte1.mp4"}
            loop
            autoPlay
            muted
            className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'
          ></video>

          {/* content */}
          <div className='px-72 w-[80%] h-screen flex flex-col justify-center text-white space-y-5'>
            <span className='text-6xl'>Background Video</span>
            <span className='text-neutral-200'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quas, iusto corrupti
              quidem, molestiae id quia necessitatibus veritatis dolorum reprehenderit totam
              eligendi aliquid quo suscipit praesentium commodi optio! Animi eaque omnis, velit
              et alias inventore maxime mollitia accusamus laborum rem! Est dolor veniam hic ad
              eos illum similique maxime harum, eveniet eum in neque quidem magnam consectetur
              facere tempora animi error repellat aliquid sequi praesentium! Quidem nisi,
              perferendis blanditiis quam placeat voluptate optio provident eveniet voluptatum
              modi sequi dolorum repellat ipsam doloremque consectetur, autem voluptas fugiat
              reiciendis ullam ipsum eum! Excepturi nesciunt et facere. Voluptas error quam
              excepturi expedita quod!
            </span>
            <button className='w-fit px-12 py-4 bg-black border-2 border-black text-white hover:bg-transparent hover:border-white duration-200'>
              Read More
            </button>
          </div>
        </div>
      ) : (
        // For mobile (small screens)
        <div className='overflow-x-hidden'>
          <Navbar />
          {/* background */}
          <div
            className='bg-center bg-cover absolute h-screen w-screen -z-10 top-0 left-0'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/wellington.jpg)`,
            }}
          ></div>

          {/* content */}
          <div className='px-72 w-[80%] h-screen flex flex-col justify-center text-white space-y-5'>
            <span className='text-6xl'>Background Image</span>
            <span className='text-neutral-200'>
              This is the content for mobile with background image.
            </span>
            <button className='w-fit px-12 py-4 bg-black border-2 border-black text-white hover:bg-transparent hover:border-white duration-200'>
              Read More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
