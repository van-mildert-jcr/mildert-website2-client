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
                              <Link className="dropdown-item" href="/thejcr.php">What is the JCR?</Link>
                              <Link className="dropdown-item" href="/purpose.php">JCR Purpose</Link>
                              <Link className="dropdown-item" href="/whoswho.php">Who's Who</Link>
                              <Link className="dropdown-item" href="/faq.php">FAQ</Link>
                              <Link className="dropdown-item" href="/contact.php">Contact Us</Link>
                              <Link className="dropdown-item" href="/charity.php">Charity Details</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-gov" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Governance
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-gov">
                              <Link className="dropdown-item" href="/constitution">The Constitution</Link>
                              <Link className="dropdown-item" href="/voting.php">Voting</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-college" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              The College
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-college">
                              <Link className="dropdown-item" href="/accommodation.php">Accommodation</Link>
                              <Link className="dropdown-item" href="/bar.php">The Bar</Link>
                              <Link className="dropdown-item" href="/gym.php">The Gym</Link>
                              <Link className="dropdown-item" href="/studyspaces.php">Study Spaces</Link>
                              <Link className="dropdown-item" href="/musicroom.php">Music Rooms</Link>
                              <Link className="dropdown-item" href="/shop.php">Shop</Link>
                              <Link className="dropdown-item" href="/tenniscourt.php">Tennis Courts</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-fresher" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Applicants & Freshers
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-fresher">
                              <Link className="dropdown-item" href="/whymildert.php">Why Mildert?</Link>
                              <Link className="dropdown-item" href="/opendays.php">Open Days</Link>
                              <Link className="dropdown-item" href="/freshersweek.php">Freshers' Week</Link>
                              <Link className="dropdown-item" href="/fresheradvice.php">Fresher Advice</Link>
                              <Link className="dropdown-item" href="/fresher_faq.php">Fresher FAQs</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-extra" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Extracurricular
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-extra">
                              <Link className="dropdown-item" href="/sports.php">Sports Clubs</Link>
                              <Link className="dropdown-item" href="/committees_societies.php">Committees & Societies</Link>
                              <Link className="dropdown-item" href="/outreach.php">Outreach Projects</Link>
                              <Link className="dropdown-item" href="/interviewtips.php">Interview Technique</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-events" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Events
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-events">
                              <p className="mb-0 ps-3 fst-italic">Our events include:</p>
                              <Link className="dropdown-item" href="/formals.php">Formals</Link>
                              <Link className="dropdown-item" href="/bops.php">BOPs</Link>
                              <Link className="dropdown-item" href="/balls.php">Balls</Link>
                              <Link className="dropdown-item" href="/fashionshow.php">Charity Fashion Show</Link>
                              <Link className="dropdown-item" href="/48hour.php">48 Hour Musical</Link>
                          </div>
                      </div>
                      <div className="nav-item dropdown">
                          <div id="menu-tech" className="nav-link dropdown-toggle"
                             role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Tech
                          </div>
                          <div className="dropdown-menu" aria-labelledby="menu-tech">
                              <Link className="dropdown-item" href="/techcomm.php">Technical Committee</Link>
                              <Link className="dropdown-item" href="/techhires.php">Hires</Link>
                          </div>
                      </div>
                      <Link id="menu-t&s" className="nav-item nav-link" href="/welfare.php">Talk and Support</Link>
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
