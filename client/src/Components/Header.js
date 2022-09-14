import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function Header({ sessionProps }) {
  const navigate = useNavigate();
  const [sessionActive, setSessionActive] = useState();

  useEffect(() => {
    if (sessionProps) {
      setSessionActive(true);
    }
  }, [sessionProps]);

  const returnHome = async (e) => {
    // handle form submit
    e.preventDefault();
    navigate(`/`);
  };

  const goToLogin = async (e) => {
    // handle form submit
    e.preventDefault();
    navigate(`/login`);
  };

  const goToSignUp = async (e) => {
    // handle form submit
    e.preventDefault();
    navigate(`/signup`);
  };

  const logout = async (e) => {
    // handle form submit
    e.preventDefault();
    setSessionActive(false);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" onClick={returnHome}>
          Dog Walk Final Project 🐶
        </a>

        {/* {!sessionActive && (
          <form className="form-inline">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={goToLogin}
            >
              Log In
            </button>
            <button className="btn btn-secondary my-2 my-sm-0">
              <Link to="/signup" class="link success" onClick={goToSignUp}>
                {" "}
                Sign Up
              </Link>
            </button>
          </form>
        )} */}
        {sessionActive ? (
          <form className="form-inline">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={logout}
            >
              Log Out
            </button>
          </form>
        ) : (
          <form className="form-inline">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={goToLogin}
            >
              Log In
            </button>
            <button className="btn btn-secondary my-2 my-sm-0">
              <Link to="/signup" class="link success" onClick={goToSignUp}>
                {" "}
                Sign Up
              </Link>
            </button>
          </form>
        )}
      </nav>
    </div>
  );
}
