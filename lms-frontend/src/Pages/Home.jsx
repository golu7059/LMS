import HomeLayout from "../Layouts/HomeLayout";
import HomePageImage from "../Assets/Images/homePageMainImage.png";
import { Link } from 'react-router-dom'; // Ensure correct import for Link

function Home() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-10 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out Best! <span className="text-orange-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large Library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>

          <div className="space-x-6">
            <Link to='/courses'>
              <button className="bg-orange-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>

            <Link to='/contact'>
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={HomePageImage} alt="Home page image" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
