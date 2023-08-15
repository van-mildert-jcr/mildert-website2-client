import Link from "next/link";

import "./Navbar.css";


export default function Navbar() {
	return (
		<>
			<div className="alert alert-warning alert-dismissible fade show fixed-top" style={{marginTop: "60px"}} role="alert">
    <strong>🚧SITE UNDER CONSTRUCTION🚧</strong>
    <br />All information shown may be out of date... We are working hard to update all the content and information
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
    <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
    </symbol>
    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
    </symbol>
    <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
    </symbol>
    <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
    </symbol>
</svg>
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
                <li className="nav-item dropdown">
                    <button className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                            id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown"
                            data-bs-display="static">
                        <svg className="bi my-1 theme-icon-active">
                            <use href="#moon-stars-fill"></use>
                        </svg>
                        <span className="d-lg-none ms-2">Toggle theme</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme"
                        style={{ "--bs-dropdown-min-width": "8rem"} as React.CSSProperties}>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center"
                                    data-bs-theme-value="light">
                                <svg className="bi me-2 opacity-50 theme-icon">
                                    <use href="#sun-fill"></use>
                                </svg>
                                Light
                                <svg className="bi ms-auto d-none">
                                    <use href="#check2"></use>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center"
                                    data-bs-theme-value="dark">
                                <svg className="bi me-2 opacity-50 theme-icon">
                                    <use href="#moon-stars-fill"></use>
                                </svg>
                                Dark
                                <svg className="bi ms-auto d-none">
                                    <use href="#check2"></use>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="dropdown-item d-flex align-items-center active"
                                    data-bs-theme-value="auto">
                                <svg className="bi me-2 opacity-50 theme-icon">
                                    <use href="#circle-half"></use>
                                </svg>
                                Auto
                                <svg className="bi ms-auto d-none">
                                    <use href="#check2"></use>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </li>
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
