export const metadata = {
  title: "Why Mildert?",
  description: "Why choose Van Mildert College? Reasons to choose Van Mildert College"
}

export default function WhyMildert() {
  return (
    <main>
      <h1 className="mildert-page-heading mb-4">
        Why Should You Pick Mildert?
      </h1>
      <div className="lead">
        <p>So, out of all of Durham's colleges, why should you pick Mildert?</p>
        <br/>
        <p>
          We asked some of this year's Fresher's Rep Team to say why they chose the college, and what they love about
          being here.
        </p>
      </div>

      <div id="why-mildert-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#why-mildert-carousel" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#why-mildert-carousel" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#why-mildert-carousel" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img/sliders/11.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/assets/img/sliders/4.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/assets/img/sliders/10.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#why-mildert-carousel"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#why-mildert-carousel"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row p-5 g-5">
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Annabel - 3rd Year History
            </h5>
            <p>
              Mildert is the only college with both guaranteed single rooms and that is fully catered.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Ali - 2nd Year International Relations
            </h5>
            <p>
              It's a big college, with lots of societies, sports and committees, as well as being very diverse,
              and I also liked that there is no sharing of rooms.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Polly - 2nd Year Human Geography
            </h5>
            <p>
              Mildert is large, very chilled (not a very formal college in comparison to others at Durham), and
              also it is very fun.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Sophie - JCR President (Anthropology)
            </h5>
            <p>
              I chose it for the outreach, as well as the amount of sports/societies and the lake/green spaces.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              James - 2nd Year Ancient History
            </h5>
            <p>
              Not only is there lots of them, the sports are really competitve (football,netball, rugby etc). And
              most have an A and B team so they are available for everyone and are inclusive.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Ellie - 2nd Year Psychology
            </h5>
            <p>
              It has the best cheer team of all the colleges! Also, Mildert has loads of opportunities to get
              involved in different committees and societies without requiring any previous experience.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Tom - 2nd Year Classics
            </h5>
            <p>
              Outreach!!!! It's one of the best parts of Durham, and Mildert is the best college for it, providing
              a huge percentage of the uni's volunteers.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Rachel - 2nd Year Philosophy and Psychology
            </h5>
            <p>
              70's stained glass for sure!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Ellie - 2nd Year Ancient History
            </h5>
            <p>
              Mildert has the strongest women's college rugby team at the uni!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Sheehan - 3rd Year Law (VP Welfare)
            </h5>
            <p>
              Mildert has the best minority representation! We will have a Minority Representation Committee as of
              next year, and we'll be one of the very first, if not the first, college to do this. It also has the
              2nd biggest dining hall in the commonwealth by volume!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              George - 3rd Year Politics (SU Rep)
            </h5>
            <p>
              Mildert is a relaxed and friendly college with a good social life and lots of opportunities to get
              involved in sports, socieites and outreach.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Hugh - 2nd Year Philosophy
            </h5>
            <p>
              Lots of good plays, lots of good people.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h5>
              Chi - 2nd Year Chemistry and Biology
            </h5>
            <p>
              Inclusive - be whoever you want, whenever you want!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
