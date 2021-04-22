import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import "../assets/index.sass"
import {Router , Route} from "@reach/router"

const IndexPage = () => {
  return(
    <div className="container">
      <div className="introduction">
          <div className="intro image">
              <h1 className="intro-text">Hi, I'm David Piña a 23 year old web developer!</h1>
              <h1 className="intro-text intro-text-2">Hi, I'm David Piña a 23 year old web developer!</h1>
          </div>
      </div>

      <div className="bio">
          <p className="bio-paragraph">I'm a freelance dev in my hometown with a goal of getting small businesses online.</p>
          <p className="bio-paragraph">When I'm not typing away you can find me playing guitar, running, listening to music, or outdoors taking pictures.</p>
          <p className="bio-paragraph">I Started programming at age 16 then joined a coding bootcamp in 2017 where I gained vast experience using MEAN, Ruby, and Python.</p>
      </div>

      <div className="projects">
          <p className="my-projects-title">My Projects</p>
          <div className="project">
              <img className="project-gif" src="https://user-images.githubusercontent.com/26069518/68709806-03f8f980-055c-11ea-98d8-9058003e9862.gif" alt="Fizzbuzz Web Project" height="270px" width="100%" loading="lazy"/>
              <p className="project-name">Clock In App</p>
              <p className="description">Clock in app that allows users to clock in from anywhere via geolocation and image upload.</p>
              <p className="description">Users total hours are calculated depending on their hourly wage and each location has total hours spent on that location.</p>
          </div>
          <div className="project">
                  <div className="options-for-projects">
                      <a className="project-hyperlinks project-hyperlink" href="https://kevins-fencing.firebaseapp.com/">Preview</a>
                  </div>
                  <img loading="lazy" className="project-gif" src="https://user-images.githubusercontent.com/26069518/68708684-d448f200-0559-11ea-9a5f-0c2c194491c4.gif" alt="Fizzbuzz Gif" height="270px" width="100%" loading="lazy"/>
                  <p className="project-name">Kevins Landscaping</p>
                  <p className="description">Landscaping company site still undergoing maintance</p>
              </div>
          <div className="project doughballs-pizza">
              <div className="options-for-projects">
                  <a className="project-hyperlink" href="https://doughballspizzas.com"><p className="project-hyperlinks">Preview</p></a>
              </div>
              <img className="project-gif" src="https://user-images.githubusercontent.com/26069518/59882694-8e0bb000-9378-11e9-9690-d1911dc167a7.gif" alt="Fizzbuzz Gif" height="270px" width="100%" loading="lazy"/>
              <p className="project-name">Doughballs</p>
              <p className="description">Hometown pizzeria business site</p>
          </div>
          <div className="project friendzone">
              <div className="options-for-projects">
                  <a className="project-hyperlink" href="https://github.com/Jalapina/friendZone"><p className="project-hyperlinks">github</p></a>
                  <a className="project-hyperlink" href="http://friendzone.business/"><p className="project-hyperlinks">Preview</p></a>
              </div>
              <img className="project-gif" src="https://user-images.githubusercontent.com/26069518/53443815-21883200-39d2-11e9-94c1-b2c5abb916d0.gif" alt="friendZone gif" height="270px" width="100%" loading="lazy"/>
              <p className="project-name">FriendZone</p>
              <p className="description">Tinder like clone using Angular 4, NodeJs, Express, and MongoDB</p>
          </div>
          <div className="project weatherapi">
              <div className="options-for-projects">
                  <a className="project-hyperlink" href="https://github.com/Jalapina/weather-app"><p className="project-hyperlinks">github</p></a>
                  <a className="project-hyperlink" href="https://weather-app-7c197.firebaseapp.com"><p className="project-hyperlinks">Preview</p></a>
              </div>
              <img className="project-gif" src="https://user-images.githubusercontent.com/26069518/59883268-12aafe00-937a-11e9-9d21-e9979d62c322.gif" alt="Pokedex API" height="270px" width="100%" loading="lazy"/>
              <p className="project-name">Weather App</p>
              <p className="description">Open weather map API app using geolocation and Angular 6</p>
          </div>
          <div className="project dark-horse">
              <div className="options-for-projects">
                  <a className="project-hyperlink" href="https://github.com/Jalapina/weather-app"><p className="project-hyperlinks">github</p></a>
                  <a className="project-hyperlink" href="https://weather-app-7c197.firebaseapp.com"><p className="project-hyperlinks">Preview</p></a>
              </div>
              <img className="project-gif" src="https://user-images.githubusercontent.com/26069518/101843252-6b8ec900-3b0f-11eb-86c6-28d308ef46a4.gif" alt="Pokedex API" height="270px" width="100%" loading="lazy"/>
              <p className="project-name">Dark Horse Catering</p>
              <p className="description">Catering business in the Chicago Land Area</p>
          </div>
      </div>

      <div className="skills">
          <p>SKILLS</p>
          <p className="skill">JavaScript</p>
          <p className="skill">Ruby</p>
          <p className="skill">Python</p>
          <p className="skill">C++</p>
          <p className="skill">NodeJs</p>
          <p className="skill">Express</p>
          <p className="skill">Angular JS/2+</p>
          <p className="skill">Gatsby</p>
          <p className="skill">React</p>
          <p className="skill">HTML</p>
          <p className="skill">CSS</p>
          <p className="skill">SASS</p>
          <p className="skill">Bootstraps</p>
          <p className="skill">Materialize</p>            
          <p className="skill">jQuery</p>
          <p className="skill">AWS</p>
          <p className="skill">Google Firebase</p>
          <p className="skill">Git/GitHub</p>
          <p className="skill">MySQL</p>
          <p className="skill">MongoDB</p>
          <p className="skill">Photoshop</p>
      </div>

      <div className="contact-me">
          <h2>Contact Me</h2>
          <form action="post" id="contact-form">
              <input type="email" name="subject" placeholder="Your Email"/>
              <textarea name="message" placeholder="Message"></textarea>
              <input type="submit" name="send" value="Send"/>
          </form>
      </div>

    </div>
  )
}

export default IndexPage
