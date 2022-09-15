import "./App.css";
import React, { useState, useEffect } from "react";
import UserProfile from "./Components/UserProfile.js";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import MyChatComponent from "./Components/MyChatComponent.js";
import LoginForm from "./Components/LogInForm.js";
import AddWalkForm from "./Components/AddWalkForm";
import AllWalks from "./Components/Allwalks/AllWalks"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import IndividualWalk from "./Components/IndividualWalk";
import Aboutus from "./Components/Aboutus/Aboutus";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [Walks, setWalks] = useState([]);
  const [Users, setUsers] = useState([
    { user_name: "bigboy,", user_Id: 2 },
    { user_name: "Frank james", user_Id: 3 }, //here we have hard coded user to try the fix but here we should make a fetch get to retrieve the users from the table
  ]);
  //Also Frank james is probably a bad example as the spaces in the name wouldn't work in a url so you would need to split and join the name to make it work
  //Finally, do we need to the user name field in the log in page? usually it is the email and password?

  const dataToChatComponent = () => {
    //send data to chatComponent using this function
  };

  const handleLoggedInData = (loggedInData) => {
    //function for getting data from child component SignUpForm
    setLoggedIn(loggedInData);
  };

  const handleAddWalk = (newWalk) => {
    setWalks((state) => [...state, newWalk]); //need to be making a fetch call to your database to get all the walks
  };

  const handleAddUser = (newUser) => {
    setUsers((state) => [...state, newUser]); //need to be making a fetch call to your database to get all the users
  };

  return (
    <div>
      {/* <Header sessionProps={loggedIn} /> */}

      <Header sessionProps={loggedIn} />

      <Routes>
        <Route
          path="/user/:username"
          element={<UserProfile sessionProps={loggedIn} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/chat" element={<MyChatComponent />} />
        <Route
          path="/login"
          element={
            <LoginForm
              loggedInData={(loggedInData) => handleLoggedInData(loggedInData)}
            />
          }
        />
        <Route
          path="/addwalkform"
          element={
            <AddWalkForm addWalk={(newWalk) => handleAddWalk(newWalk)} />
          }
        />
        <Route path="/allwalks" element={<AllWalks Walksprop={Walks} />} />
        <Route
          path="/signup"
          element={<SignUpForm addUser={(newUser) => handleAddUser(newUser)} />}
        />
        <Route path="/walk/:id" element={<IndividualWalk />} />
      </Routes>
    </div>
  );
}
//I am not sure why we need to add the IndividualWalk and Userprofile here but is the only way that It works, help
export default App;
