import React from 'react';
import logo from '../assets/firebase-logo.png'
import { Link } from 'react-router';
import MyLink from './MyLink';

const Nabar = () => {
    return (
       <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-3">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about"}>About</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </div>
    </div>
    );
};

export default Nabar;