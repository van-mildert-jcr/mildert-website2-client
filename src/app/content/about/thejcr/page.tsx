import Link from "next/link";

export const metadata = {
  title: "What is the JCR?",
  description:
    "About Van Mildert College JCR - the heart of an exciting and caring community",
};

export default function TheJCR() {
  return (
    <main>
      <h1 className="display-3 text-center">What is the JCR?</h1>
      <p className="lead">
        The Junior Common Room (or JCR) is the undergraduate student body of
        Mildert. It is the heart of the College community.
      </p>
      <figure className="figure">
        <img
          className="figure-img img-fluid rounded"
          src="/assets/img/2018-freps.jpg"
          style={{ maxHeight: "80vh" }}
          alt="Freps in yellow holding large letters spelling Van Mildert"
        />
        <figcaption className="figure-caption">2018 Frep Team</figcaption>
      </figure>
      <p>
        From the moment you arrive at Mildert and are greeted by one of our
        cheery
        <abbr title="freshers' representatives">freps</abbr> in yellow you are
        part of the JCR family.
      </p>
      <p>
        The JCR comprises and represents (primarily) undergraduate students at
        Mildert. Through the JCR, students organise sports clubs, societies,
        events, charity work and much more. The JCR also provides many services
        and facilities to its members.
      </p>
      <p className="lead">Durham is unique in how active its JCRs are.</p>
      <blockquote className="blockquote text-center border-top border-bottom p-3 mx-3 mx-xl-5">
        <p className="mb-1 h2">
          Don{"'"}t let your degree get in the way of your education
        </p>
        <footer className="blockquote-footer">
          Bill Bryson, Chancellor of the University of Durham 2005–2012
        </footer>
      </blockquote>
      <p className="lead">
        Our sports clubs offer a great opportunities for novices and champions
        alike.
      </p>
      <p>
        We have 20 sports clubs each with multiple teams at different levels.
      </p>
      <p className="lead">
        There{"'"}s a society for everyone &ndash; or if not, we{"'"}ll help you
        make one.
      </p>
      <p>We have 23 societies to choose from, with new ideas every year.</p>
      <p className="lead">
        The JCR gives a chance for all members to play a significant role in
        College and make a difference.
      </p>
      <p>
        Want to have a say in how things are done? Want to help out? Want to
        have fun and gain experience in the process? Run for election, interview
        for a position, apply to join a committee. There{"'"}s plenty to do,
        from Shop Committee to Ball Committee we are run by our members.
      </p>
      <p>
        We hope that our members leave Durham not just with a degree but with
        great memories and useful experience.
      </p>

      <div id="photos" className="row p-3">
        <img
          className="col-lg-3"
          src="/assets/img/img3.jpg"
          alt="YPP volunteers in blue outside College"
        />
        <img
          className="col-lg-3"
          src="/assets/img/img7-small.jpg"
          alt="College dining hall set for a formal"
        />
        <img
          className="col-lg-3"
          src="/assets/img/img4.jpg"
          alt="JCR men's rugby team: a runner emerges from a scrum"
        />
        <img
          className="col-lg-3"
          src="/assets/img/img16-small.jpg"
          alt="A line of singers dressed in black"
        />
      </div>

      <h3>Outreach and Charity</h3>
      <blockquote className="blockquote text-center border-top border-bottom p-3 mx-3 mx-xl-5">
        <p className="mb-1 h2">
          <i>Sic vos non vobis</i>
          <br /> &ndash; Thus you do, not for yourselves
        </p>
        <footer className="blockquote-footer">Our College motto</footer>
      </blockquote>
      <p className="lead mb-1">
        Mildert is very much a values driven college and we are extremely proud
        of our JCR Outreach projects.
        <br />
        We have been recognised both{" "}
        <strong>nationally and internationally</strong>.
      </p>
      <ul>
        <li>
          Featured in{" "}
          <Link href="https://www.theparliamentaryreview.co.uk/organisations/van-mildert-college">
            The Parliamentary Review
          </Link>
          .
        </li>
        <li>
          Winner of the{" "}
          <Link href="https://www.sustainabilityexchange.ac.uk/green_gown_awards_2017_durham_university_finali1">
            UK & IE Green Gown Awards 2017
          </Link>{" "}
          community award.
        </li>
        <li>
          Finalist of the{" "}
          <Link href="https://www.greengownawards.org/international-green-gown-awards-2017-2018-winne">
            International Green Gown Awards 2017-2018
          </Link>{" "}
          competing against whole universities.
        </li>
      </ul>
      <p>Our projects both fundraise and work to advance their cause.</p>
      <p>
        At one count, nearly half of all University volunteers came from
        Mildert.
      </p>
      <p>
        A 7th project is now underway thanks to the hard work and dedication of
        JCR volunteers.
      </p>
      <p>
        Events such as our annual Charity Fashion Show also give members a
        chance to run professional-class events while raising money for good
        causes.
      </p>

      <h3>Freshers{"'"} Week</h3>
      <figure className="figure">
        <img
          className="figure-img img-fluid rounded"
          src="/assets/img/11.jpg"
          alt="New Mildert students in formal dress matriculating at the cathedral with freps cheering"
        />
        <figcaption className="figure-caption">
          Freshers matriculating at the cathedral
        </figcaption>
      </figure>
      <p className="lead">
        During Freshers{"'"} Week, each corridor is assigned dedicated freps who
        work amazingly hard to make sure everyone has the best time possible and
        also offering support and advice when needed.
      </p>
      <p>
        Your first day in a strange place will be daunting, but the frep team
        will be there to guide you through.
      </p>

      <h3>Student Welfare</h3>
      <p className="lead">
        The passionate volunteers of student-run welfare team{" "}
        <strong>Talk and Support</strong>
        strive to keep us healthy and happy. Student welfare is central to the
        JCR.
      </p>
      <p>
        University can be a stressful time. Durham degrees are challenging.
        Moving to a new place and making new friends can be terrifying. Talk and
        Support provides welfare and support to all Mildert students throughout
        their time at Durham, whether that{"'"}s listening to worries in
        confidence, signposting to University or NHS support, giving out free
        sexual health supplies or just a sit down with a cup of tea and a
        biscuit. Cake and furry animals have also been known to make appearances
        during exam time. 🐇
      </p>

      <h3>Services</h3>
      <p className="lead">
        The JCR runs the College Shop, and Technical Committee.
      </p>
      <p>The JCR also has strong links with the College Bar.</p>
      <p>
        The Shop, Bar and Tech Comm provide employment opportunities for
        students.
      </p>

      <h2>Other Common Rooms</h2>
      <p>
        The JCR is one of three common rooms at Mildert along with the{" "}
        <a href="https://twitter.com/vanmildertmcr" title="Middle Common Room">
          MCR
        </a>
        (for postgraduates, many of whom are also JCR members) and the{" "}
        <a
          href="https://community.dur.ac.uk/vm.scr/"
          title="Senior Common Room"
        >
          SCR
        </a>
        (for the MCR, University staff, and supporters from the local
        community).
      </p>
      <p>
        The JCR also works with other JCRs across Durham to support each other
        and ensure that student voices are heard.
      </p>

      <div className="m-3 p-3 border-top">
        <h2>Final details...</h2>
        <h3>What is the JCR not?</h3>
        <p>This is sometimes a cause of confusion for new students.</p>
        <p>
          The JCR is central to the College community and works very closely
          with College, but the JCR is not College.
          <br />
          Matters such as college food, accommodation, buildings and grounds;
          fees and finance; discipline; and academic progression are down to
          College/the University. The JCR will support and represent students
          with these matters but we cannot change the food, replace your light
          bulb or buy your block a new oven!
        </p>
        <p>
          This website is operated by Van Mildert College Junior Common Room.
          Any views expressed within may not be those of the College the
          University of Durham.
        </p>
        <h3>What actually is the JCR?</h3>
        <p>
          See <Link href="charity.php">this page</Link>.
        </p>
      </div>
    </main>
  );
}
