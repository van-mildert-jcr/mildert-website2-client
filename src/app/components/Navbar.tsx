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
              <a className="navbar-brand" href="/"><img src="/assets/img/Shield.svg" height="30px" width="auto" alt="VMJCR" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                  <div className="navbar-nav me-auto">
                      <a id="menu-home" className="nav-item nav-link" href="/">Home</a>
                      <div className="nav-item dropdown">
                          <a id="menu-about" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              About Us
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-about">
                              <a className="dropdown-item" href="/thejcr.php">What is the JCR?</a>
                              <a className="dropdown-item" href="/purpose.php">JCR Purpose</a>
                              <a className="dropdown-item" href="/whoswho.php">Who's Who</a>
                              <a className="dropdown-item" href="/faq.php">FAQ</a>
                              <a className="dropdown-item" href="/contact.php">Contact Us</a>
                              <a className="dropdown-item" href="/charity.php">Charity Details</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a id="menu-gov" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Governance
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-gov">
                              <a className="dropdown-item" href="/constitution">The Constitution</a>
                              <a className="dropdown-item" href="/voting.php">Voting</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a id="menu-college" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              The College
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-college">
                              <a className="dropdown-item" href="/accommodation.php">Accommodation</a>
                              <a className="dropdown-item" href="/bar.php">The Bar</a>
                              <a className="dropdown-item" href="/gym.php">The Gym</a>
                              <a className="dropdown-item" href="/studyspaces.php">Study Spaces</a>
                              <a className="dropdown-item" href="/musicroom.php">Music Rooms</a>
                              <a className="dropdown-item" href="/shop.php">Shop</a>
                              <a className="dropdown-item" href="/tenniscourt.php">Tennis Courts</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a id="menu-fresher" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Applicants & Freshers
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-fresher">
                              <a className="dropdown-item" href="/whymildert.php">Why Mildert?</a>
                              <a className="dropdown-item" href="/opendays.php">Open Days</a>
                              <a className="dropdown-item" href="/freshersweek.php">Freshers' Week</a>
                              <a className="dropdown-item" href="/fresheradvice.php">Fresher Advice</a>
                              <a className="dropdown-item" href="/fresher_faq.php">Fresher FAQs</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a id="menu-extra" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Extracurricular
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-extra">
                              <a className="dropdown-item" href="/sports.php">Sports Clubs</a>
                              <a className="dropdown-item" href="/committees_societies.php">Committees & Societies</a>
                              <a className="dropdown-item" href="/outreach.php">Outreach Projects</a>
                              <a className="dropdown-item" href="/interviewtips.php">Interview Technique</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a id="menu-events" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Events
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-events">
                              <p className="mb-0 ps-3 fst-italic">Our events include:</p>
                              <a className="dropdown-item" href="/formals.php">Formals</a>
                              <a className="dropdown-item" href="/bops.php">BOPs</a>
                              <a className="dropdown-item" href="/balls.php">Balls</a>
                              <a className="dropdown-item" href="/fashionshow.php">Charity Fashion Show</a>
                              <a className="dropdown-item" href="/48hour.php">48 Hour Musical</a>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <a id="menu-tech" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Tech
                          </a>
                          <div className="dropdown-menu" aria-labelledby="menu-tech">
                              <a className="dropdown-item" href="/techcomm.php">Technical Committee</a>
                              <a className="dropdown-item" href="/techhires.php">Hires</a>
                          </div>
                      </div>
                      <a id="menu-t&s" className="nav-item nav-link" href="/welfare.php">Talk and Support</a>
                      <ColourMode />
                  </div>
                  <a href="/Dashboard">Dashboard</a>
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
