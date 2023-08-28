export const metadata = {
  title: "Van Mildert College Bar",
  description: "The bar of Van Mildert College, University of Durham",
}

export default function Bar() {
  return (
    <main>
      <h1 className="mildert-page-heading">
        Van Mildert College Bar
      </h1>
      <p>Please note that the Bar is not owned or operated by Van Mildert College Junior Common Room. This page is not
        operated or endorsed by the Bar.</p>

      <hr />

      <h2>Opening Times (as of 9th Jan 2023)</h2>
      <p>
        Monday-Thursday: 19:00-23:00
        <br/>Friday: 19:00-00:00
        <br/>Saturday: 12:00-00:00
        <br/>Sunday: 12:00-23:00
        <br/>*We also open till midnight on formals if it's busy!
      </p>

      <hr />

      <!-- Carousel Images -->
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img/bg/bar0.JPG" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Amazing Bar Staff</h5>
                <p>
                  It is run by the Bar Steward,<br/>
                  11 Bar Committee members,<br/>
                  and as many as 25 Team Bar members!
                </p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/img/bg/bar1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Excellent Atmosphere</h5>
                <p>Our Bar is a 3-times winner of the Best Bar None competition.<br/>
                  It is known and loved across the University.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/img/bg/bar5.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5><strong>AMAZING EVENTS</strong> throughout the year</h5>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <!-- End of carousel -->

      <hr />

      <!--    Bar Team Outline -->
      <div className="container content-sm" style="margin-top: 30px">
        <h2>THE TEAM</h2>

        <div className="row">
          <div className="col-sm-4">
            <img src="/assets/img/masonry/bar1.jpg" className="img-fluid" alt="..." />
              <h3>Bar Committee and Team Bar</h3>
              <p>
                The college bar is run by a team of between twenty and thirty Mildertians who maintain the bar’s
                status as the place to be in college (and across Durham)! Members of Team Bar help with the
                general
                operations of the bar, and it’s the responsibility of six Bar Comm members to manage the bar
                alongside the Bar Steward!
              </p>
          </div>
          <div className="col-sm-4">
            <img src="/assets/img/exec/barsteward2223.jpg" className="img-fluid" alt="..." />
              <h3>Sabbatical Bar Steward</h3>
              <p>
                The team is headed by the Sabbatical Bar Steward who is a recent graduate and oversees the Bar
                with
                the College Food and Beverages Service Head.
              </p>
              <p>
                Our bar steward this year is Harrison, who studied English last year. Come to him with any
                questions
                you have about the bar, or anything Mildert- related at all.
              </p>
          </div>
          <div className="col-sm-4">
            <img src="/assets/img/masonry/bar3.jpg" className="img-fluid" alt="..." />
              <h3>Recruitment</h3>
              <p>
                The team look for new members every year, with applications for both Team Bar and next year’s Bar
                Comm opening early on this Epiphany term. All of these are paid positions within a fun and
                sociable
                committee.
              </p>
          </div>
        </div>
      </div>
      <hr />
      <h2>WHAT WE OFFER</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="d-flex align-items-center flex-column">
            <div className="p-2 bd-highlight">
              <h3 className="title-v3-md text-uppercase">
                Fully stocked with all your favourites!
              </h3>
              <p>
                Whether you love a bit of fizz, a sophisticated glass of wine, spirits &amp; mixers, a good old
                pint of Mildert’s own real ale ‘Treasure in the Swamp’, some brilliant ciders or lager, we’ve
                got it! We also do a wide range of soft drinks and alternatives such as alcohol-free beer and
                gin, and gluten-free beer. Do try our two college drinks too – ‘The Little Lad’ and ‘Shrek
                Juice’!
              </p>
            </div>
            <div className="p-2 bd-highlight">
              <h3 className="title-v3-md text-uppercase">Special Events</h3>
              <p>Stock is changed to cater for special events such as Oktoberfest or Christmas but
                the Bar is always open to suggestions from you of what you’d like to see.</p>
            </div>
            <div className="p-2 bd-highlight">
              <h3 className="title-v3-md text-uppercase">
                Suggestions & Improvements
              </h3>
              <p>
                This is your bar so feel free to get in touch with any suggestions or improvements!
                You can get in touch with the JCR to represent your views or directly to the Bar Steward at <a
                href="mailto:bar@mildert.co.uk">bar@mildert.co.uk</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center flex-column">
          <div className="thumbnail-img">
            <img className="img-fluid" src="/assets/img/general/bar2.jpg" alt="..." />
          </div>
        </div>
      </div>
      <!--/row-->
      <hr />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Events</h2>
          <p>
            The bar hosts regular events for everyone to get involved in.
          </p>
          <p>⚪ Every Sunday – JCR-run bar quiz ⚪</p>
          <p>⚪ Fortnightly live music at JamSoc’s Swamp Sessions with a different musical style every time!
            (Think the day might be changing for this in the new year but not yet sure) ⚪
          </p>
          <p>⚪ Karaoke nights, especially after formals! ⚪</p>
          <p>⚪ Regular sports showing ⚪</p>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <hr />
      <p>
        If you have any questions at all do send us a message on our Instagram @mildertbar or email
        <a href="mailto:bar@mildert.co.uk">bar@mildert.co.uk</a>
      </p>
    </main>
  );
}
