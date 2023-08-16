import Link from "next/link";

import "./Navbar.scss";
import ColourMode from "@/app/components/ColourMode";


export default function Navbar() {
	return (
		<>
			<div className="alert alert-warning alert-dismissible fade show fixed-top" style={{marginTop: "60px"}} role="alert">
         <strong>🚧SITE UNDER CONSTRUCTION🚧</strong>
        <br />All information shown may be out of date... We are working hard to update all the content and information
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <nav className="navbar bg-body-tertiary fixed-top navbar-expand-xl">
          <div className="container-fluid">
              <Link className="navbar-brand" href="/"><img src="/assets/img/Shield.svg" height="30px" width="auto" alt="VMJCR" /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                  <div className="navbar-nav me-auto">
                      <Link id="menu-home" className="nav-item nav-link" href="/">Home</Link>
                      <div className="nav-item dropdown">
                          <div id="menu-about" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              About Us
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-about">
                              <Link className="dropdown-item" href="/content/about/thejcr">What is the JCR?</Link>
                              <Link className="dropdown-item" href="/content/about/purpose">JCR Purpose</Link>
                              <Link className="dropdown-item" href="/content/about/whoswho">Who's Who</Link>
                              <Link className="dropdown-item" href="/content/about/faq">FAQ</Link>
                              <Link className="dropdown-item" href="/content/about/contact">Contact Us</Link>
                              <Link className="dropdown-item" href="/content/about/charity">Charity Details</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-gov" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Governance
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-gov">
                              <Link className="dropdown-item" href="/content/gov/constitution">The Constitution</Link>
                              <Link className="dropdown-item" href="/content/gov/voting">Voting</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-college" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              The College
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-college">
                              <Link className="dropdown-item" href="/content/college/accommodation">Accommodation</Link>
                              <Link className="dropdown-item" href="/content/college/bar">The Bar</Link>
                              <Link className="dropdown-item" href="/content/college/gym">The Gym</Link>
                              <Link className="dropdown-item" href="/content/college/study-spaces">Study Spaces</Link>
                              <Link className="dropdown-item" href="/content/college/music-room">Music Rooms</Link>
                              <Link className="dropdown-item" href="/content/college/shop">Shop</Link>
                              <Link className="dropdown-item" href="/content/college/tennis-court">Tennis Courts</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-fresher" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Applicants & Freshers
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-fresher">
                              <Link className="dropdown-item" href="/content/freshers/why-mildert">Why Mildert?</Link>
                              <Link className="dropdown-item" href="/content/freshers/open-days">Open Days</Link>
                              <Link className="dropdown-item" href="/content/freshers/freshers-week">Freshers' Week</Link>
                              <Link className="dropdown-item" href="/content/freshers/advice">Fresher Advice</Link>
                              <Link className="dropdown-item" href="/content/freshers/faq">Fresher FAQs</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-extra" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Extracurricular
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-extra">
                              <Link className="dropdown-item" href="/content/extracurricular/sports">Sports Clubs</Link>
                              <Link className="dropdown-item" href="/content/extracurricular/committees-societies">Committees & Societies</Link>
                              <Link className="dropdown-item" href="/content/extracurricular/outreach">Outreach Projects</Link>
                              <Link className="dropdown-item" href="/content/extracurricular/interview-tips">Interview Technique</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-events" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Events
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-events">
                              <p className="mb-0 ps-3 fst-italic">Our events include:</p>
                              <Link className="dropdown-item" href="/content/events/formals">Formals</Link>
                              <Link className="dropdown-item" href="/content/events/bops">BOPs</Link>
                              <Link className="dropdown-item" href="/content/events/balls">Balls</Link>
                              <Link className="dropdown-item" href="/content/events/fashion-show">Charity Fashion Show</Link>
                              <Link className="dropdown-item" href="/content/events/48-hour">48 Hour Musical</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-tech" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Tech
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-tech">
                              <Link className="dropdown-item" href="/content/tech/tech-comm">Technical Committee</Link>
                              <Link className="dropdown-item" href="/content/tech/tech-hires">Hires</Link>
                          </div>
                      </div>
                      <Link id="menu-t&s" className="nav-item nav-link" href="/content/welfare">Talk and Support</Link>
                      <ColourMode />
                  </div>
                  <Link href="/Dashboard">Dashboard</Link>
                  {/* WE WILL USE THIS LOL --> <login /> */}
                  {/* <?php if (\mildert\session\isLoggedIn()): ?>
                      <a className="btn btn-dark me-2" href="/dashboard">Member dashboard</a>
                      <a id="log-btn" className="btn btn-dark" href="/auth/logout.php">Log out&nbsp;<i className="fas fa-sign-out-alt"></i></a>
                  <?php else: ?>
                      <a id="log-btn" className="btn btn-dark" href="/auth/login.php">Log in&nbsp;<i
                                  className="fas fa-sign-in-alt"></i></i></a>
                  <?php endif; ?> */}
              </div>
          </div>
      </nav>
		</>
	);
};
