// import { motion } from 'framer-motion';
import React from 'react'
import style from './navigation.module.css'
import { Link } from "react-router-dom";
export default function Navigation() {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">Works</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export function FloatingSidenav() {
  return (
    <ul className={`${style.navigation__sidenav} nav flex-column`}>
      <li className="nav-item" >
        <a className={`${style.navigation__navbtn} nav-link`} href="#Home">
          <svg stroke="currentColor" fill="#404040" strokeWidth="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M258.75 18.03C176.355 17.888 96.154 60.586 52 137.063 7.275 214.53 11.082 306.688 53.938 378.375 27.51 311.467 33.587 226.695 77 151.5 120.44 76.26 190.892 28.59 262.094 18.062c-1.115-.017-2.23-.03-3.344-.03zm-.156 53.44c-63.895-.113-126.072 33.005-160.313 92.31-34.678 60.068-31.754 131.505 1.47 187.095-20.477-51.88-15.75-117.61 17.906-175.906 33.676-58.33 88.272-95.29 143.47-103.47-.843-.013-1.69-.03-2.532-.03zm-1.313 43.468c-48.386.374-95.35 25.61-121.25 70.468-38.886 67.355-15.73 153.738 51.626 192.625 67.355 38.89 153.738 15.762 192.625-51.592 38.89-67.356 15.73-153.77-51.624-192.657-21.048-12.15-43.95-18.232-66.687-18.81-1.564-.04-3.128-.045-4.69-.032zm-.436 18.593l-.625 29.44c-15.292.162-30.354 4.083-43.75 11.436l-14.97-24.78c18.08-10.315 38.536-15.868 59.344-16.095zm205.437.126c26.47 66.922 20.403 151.74-23.03 226.97-43.388 75.15-113.728 122.802-184.844 133.405 83.465 1.224 165.112-41.574 209.813-119 44.736-77.486 40.95-169.677-1.94-241.374zm-170.936 4.5c9.56 2.71 18.96 6.612 27.97 11.813 9.376 5.413 17.753 11.882 25.092 19.155l-21.812 20.906c-5.592-5.576-11.993-10.52-19.156-14.655-6.183-3.57-12.61-6.36-19.157-8.375l7.064-28.844zm125.062 22.97c20.533 51.897 15.84 117.688-17.844 176.03-33.63 58.248-88.13 95.19-143.25 103.438 64.702.924 127.973-32.262 162.625-92.28 34.698-60.1 31.742-131.587-1.53-187.19zm-246.344 9.843L190 191.75c-4.933 5.196-9.353 11.053-13.094 17.53-4.047 7.01-7.04 14.326-9.094 21.782l-27.843-6.843c2.72-10.083 6.774-19.988 12.25-29.47 5.087-8.814 11.1-16.765 17.843-23.78zm195.25 25.843c9.967 18.082 15.25 38.456 15.25 59.125l-30.812-.657c-.06-14.86-3.695-29.505-10.563-42.655l26.125-15.813zM135.782 258.5l28.78.625c.59 15.018 4.828 29.734 12.344 42.78l-24.844 15.033c-10.23-17.795-15.84-37.938-16.28-58.438zm209.937 24.22l29.936 7.342c-2.7 9.24-6.53 18.317-11.562 27.032-5.41 9.37-11.86 17.76-19.125 25.094L323.686 320c5.165-5.343 9.773-11.398 13.657-18.125 3.574-6.19 6.36-12.6 8.375-19.156zm-151.376 41c4.927 4.53 10.43 8.575 16.47 12.06 7.007 4.048 14.325 7.074 21.78 9.126l-7.094 28.906c-9.744-2.717-19.324-6.67-28.5-11.968-8.816-5.09-16.764-11.1-23.78-17.844l21.124-20.28zm107.437 13.03l15.814 26.156c-17.787 9.875-37.806 15.163-58.156 15.375l.625-30.124c14.59-.475 28.914-4.378 41.718-11.406z"></path></svg>
        </a>
      </li>
      <li className="nav-item" >
        <a className={`${style.navigation__navbtn} nav-link`} href="#About">
          <svg
            stroke="currentColor"
            fill="#404040"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"></path>
          </svg>
        </a>
      </li>
      <li className="nav-item">
        <a className={`${style.navigation__navbtn} nav-link`} href="#Works">
          <svg stroke="currentColor" fill="#404040" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path><path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"></path></svg>
        </a>
      </li>



    </ul>
  )
}

