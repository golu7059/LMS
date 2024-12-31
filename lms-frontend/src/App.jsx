import { Routes, Route } from "react-router-dom";

import RequireAuth from "./Components/Auth/ReuireAuth";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";


import UserProfile from "./Pages/user/UserProfile";
import EditUserProfile from "./Pages/user/EditUserProfile";
import ChangePassword from "./Pages/user/ChangePassword";

import CourseList from "./Pages/Course/CourseList";
import CourseDescription from "./Pages/Course/CourseDescription";
import CreateCourse from "./Pages/Course/CreateCourse";

import Checkout from "./Pages/Payment/Checkout";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess";
import CheckoutFailed from "./Pages/Payment/CheckoutFailed";

import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses" element={<Contact />} />
        <Route path="/course/description" element={<CourseDescription />} />
        
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/checkout/success" element={<CheckoutSuccess/>}/>
        <Route path="/checkout/failed" element={<CheckoutFailed/>}/>

        <Route path="/contact" element={<Contact />} />
        
        <Route path="/user/profile" element = {<UserProfile/>} />
        <Route path="/user/profile/edit" element={<EditUserProfile/>}/>
        <Route path="/user/changepassword" element={<ChangePassword/>}/>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          // child routes on which auth will be applied
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
