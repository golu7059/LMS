import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';

import Signup from './Pages/Signup';
import Login from './Pages/Login';

import CourseList from './Pages/Course/CourseList';
import CourseDescription from './Pages/Course/CourseDescription';
import Contact from './Pages/Contact';

import NotFound from './Pages/NotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/courses' element={<CourseList/>} />
        <Route path='/courses' element={<Contact/>} />
        <Route path='/course/description' element={< CourseDescription/>} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
