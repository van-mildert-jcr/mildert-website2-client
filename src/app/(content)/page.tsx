import Link from 'next/link';

export default function Home() {
  return (
    <>
<h1 className="mildert-page-heading">
    Van Mildert College Junior Common Room
</h1>
<div className="row align-items-center m-md-5" style={{backgroundColor: "#811"}}>
    <div className="col-md-4 text-center">
        <img className="img-fluid" src="/assets/img/newlogo.png" alt="Van Mildert College coat of arms" />
    </div>
    <div className="col-md-8"><p id="welcome" className="display-2" style={{color:"white"}}>Welcome</p></div>
</div>
<div className="carousel slide mx-auto" id="top-carousel" style={{maxWidth: "900px"}} data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#top-carousel" data-bs-slide-to="0" className="active" aria-current="true"
                aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#top-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#top-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="img-fluid" src="/assets/img/college-feather.jpg" alt="Van Mildert College" />
        </div>
        <div className="carousel-item">
            <img className="img-fluid" src="/assets/img/Principals-Formal-2019.jpg" alt="College formal meal" />
        </div>
        <div className="carousel-item">
            <img className="img-fluid" src="/assets/img/Valentines-BOP-2019.jpg" alt="Silent disco" />
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#top-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#top-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
<p className="lead">Van Mildert College was founded in 1965 and is one of Durham's larger colleges.</p>
<p className="px-5">
    Despite its size, Mildert has a unique friendly atmosphere with a strong sense of community.
    We strive to be welcoming and inclusive, and helping others is the core of our ethos.
</p>
<p>
    We don't wear gowns and we became the first mixed college in Durham in 1972.
    We also have ducks and, often, swans.
</p>

<p className="display-4">The JCR is the heart of the College community.</p>
<p className="lead">The JCR is a core part of the college experience and
    is made up of the students of our College.</p>

<div className="row">
    <div className="col-md-4">
        <h3>Opportunities</h3>
        <p className="lead">
            20 sports clubs, 23 societies, events throughout the year,
            Mildert has an active and enthusiastic community.
        </p>
        <p>
            Whether your prefer hockey or boardgames,
            Dance Society or just dancing at a silent disco, working in the Shop or volunteering with Outreach,
            Mildert has something for everyone to enjoy their time here.
        </p>
    </div>
    <div className="col-md-4">
        <h3>Caring and giving</h3>
        <p className="lead">
            Our Outreach projects have a reputation for excellence.
            Events throughout the year raise thousands for good causes.
        </p>
        <p>
            Outreach is not only rewarding for our passionate and dedicated volunteers,
            but makes a direct impact on the local community.
            Our events such as VMCFS and those run by VM DUCK raise thousands for charity.
        </p>
    </div>
    <div className="col-md-4">
        <h3>Development</h3>
        <p className="lead">
            There's more to Durham than getting a degree.
            The JCR offers a unique opportunity for personal development.
        </p>
        <p>
            From organising Summer Ball to joining our welfare team (or both!),
            JCR members graduate with both amazing memories and invaluable experience.
        </p>
    </div>
</div>

<div>
    <a className="btn btn-outline-danger btn-lg" href="/thejcr.php">Read more about our JCR</a>
</div>
<div style={{marginLeft:"-1rem!important",marginRight:"-1rem!important"}}
     className="pt-2 px-3 pb-2 my-3 bg-danger text-white">
    <h2>Videos</h2>
    <h6>Watch some videos about our College and JCR...</h6>
    <div className="row">
        <div className="col-md-6 mb-2">
          {/* <!-- University VM College --> */}
            <div className="ratio ratio-16x9">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xdkYGRtXggM?rel=0"></iframe>
            </div>
        </div>
        <div className="col-md-6 mb-2">
          {/* <!-- FW 2019 --> */}
            <div className="ratio ratio-16x9">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sHlqCN2VDAE?rel=0"></iframe>
            </div>
        </div>
        <div className="col-md-6 mb-2">
          {/* <!-- FW 2018 --> */}
            <div className="ratio ratio-16x9">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YaDkl1L2ZKI?rel=0"></iframe>
            </div>
        </div>
        <div className="col-md-6 mb-2">
          {/* <!-- FW 2017 --> */}
            <div className="ratio ratio-16x9">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XxIP3J5YWJQ?rel=0"></iframe>
            </div>
        </div>
    </div>
</div>
<p>Something missing? Want to know more? Feel free to <a href="contact.php">contact us</a>.</p>
<p>
    If you want to find out more about Van Mildert College,
    then visit the <a href="https://www.dur.ac.uk/van-mildert.college/">College website</a>.
</p>
    </>
  );
}
