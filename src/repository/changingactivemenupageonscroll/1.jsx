import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import './style.scss';

export default function PageScrollMenuExample() {
  return (
    <>
       <Example/>
    </>
  )
}

function Example(){
    return(
        <>
        <header className="nav">
            <nav className="nav__container__actions">
            <ul>
                <li>
                <Link activeClass="active" smooth spy to="about">
                    ABOUT
                </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="projects">
                    PROJECTS
                </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="blog">
                    BLOG
                </Link>
                </li>
                <li>
                <Link activeClass="active" smooth spy to="contact">
                    CONTACT ME
                </Link>
                </li>
            </ul>
            </nav>
        </header>
        <section id="about">ABOUT</section>
        <section id="projects">PROJECTS</section>
        <section id="blog">BLOG</section>
        <section id="contact">CONTACT ME</section>
        </>
    )
}



