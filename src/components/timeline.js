import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Fuminds <span>July-Aug(2019)</span></h2>
                        <p>Fuminds was a landing startup and was in need of their own Compnay website. I involved in front-end development to create a best user interface. I learnt more about HTML, CSS during the internship period.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at AMC Engineering College <span>2016-2020</span></h2>
                        <p>I completed my under-graduation studies with major in CSE(Computer Science and Engieering). I have taken courses like DSA, OOPs, Database Management, Computer Networks, Web Technologies over the years and have better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2016</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry,Maths & Biology with 91% and my secondary education with 95.36% of marks. During my time at school, I have developed interest in Anchoring, Drama, Skits, Debate etc. I was awarded with the 'Best Student' award for 3 years consequently.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>My Certifications <span>2020</span></h2>
                      <p><a href="https://www.freecodecamp.org/certification/brunda_s/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design</a></p>
                      <p><a href="https://coursera.org/share/2c7fa5812ee6f520028bd8c9c66fbc52" target="_blank" rel="noopener noreferrer">AWS Fundamentals</a></p>
                      <p><a href="https://coursera.org/share/dcc9dbafe765cd0da5ec65ba04555ce6" target="_blank" rel="noopener noreferrer">GCP Fundamentals</a></p>
                    </div>
                  </div>
                </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
