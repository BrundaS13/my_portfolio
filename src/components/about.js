import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a computer science graduate from AMC Engineering College, Bengaluru. I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years!!</p>
                    <p>I am skilled in Web Technologies like HTML, CSS, JavaScript, React JS. <br></br>
                    I also love working with Java and Python.</p>
                    <p>Looking for a career opportunity as a Software Engineer to utilize my skills and work towards the betterment of the organization with exceptional hardworking nature along with good communication skill to explore the requirements and come up with an innovative solution.<br></br> 
                    Motivated, Self Starter and want to excel in everything I do through passion towards work.<br></br> 
                    Ability to work in any environment and possess good analytical skills. </p>
                    <p> Dedication, Determination and Discipline are the 3D's that define me.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>I Worked on Machine Learning for my final year project and have a hands-on experience in image processing, training and testing the data.</p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
