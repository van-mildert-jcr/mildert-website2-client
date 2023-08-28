import "./style.scss";

export const metadata = {
  title: "Fresher FAQs",
  description: "Frequently asked questions about Freshers' Week and arrival at Van Mildert College"
}

export default function FresherFAQ() {
  return (
    <main>
      <h1>Fresher FAQs</h1>
      <p className="lead">
        We're excited for you to be joining the Mildert family.
        Going to university is a big step, and you'll probably have some questions...
        Here we answer some common ones.
      </p>
      <p>See also <a href="faq.php">general JCR FAQs</a>.</p>
      <div className="accordion" id="accordion">
        <div className="accordion-item">
          <div className="accordion-header" id="q1h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q1" data-bs-target="#q1" href="#q1">
                When is Freshers' Week and International Freshers' Week?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q1h" id="q1">
            <div className="accordion-body">
              Freshers' Week is the week before Michaelmas Term.
              International Freshers' Week is the week before that,
              as international students arrive over the week.<br/>
              2020 Freshers' Week starts on the 28th September, when home students arrive.<br/>
              See the <a href="https://www.dur.ac.uk/dates/">University term dates</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q2h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q2" data-bs-target="#q2" href="#q2">
                Does Mildert being a large college make it difficult to make friends?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q2h" id="q2">
            <div className="accordion-body">
              Being a large college means that there are plenty of committees,
              sports teams and societies to get involved with.
              It means there are all types of people.
              College life also means you make friends across the year groups.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q3h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q3" data-bs-target="#q3" href="#q3">
                Do rooms provide a desk and chair?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q3h" id="q3">
            <div className="accordion-body">
              Yes! All Mildert rooms have a desk and chair.<br/>
              There are also study spaces across College and the University.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q4h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q4" data-bs-target="#q4" href="#q4">
                Do rooms have a sink?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q4h" id="q4">
            <div className="accordion-body">
              Yes! All Mildert rooms have sinks and mirrors.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q5h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q5" data-bs-target="#q5" href="#q5">
                Will I be pressured to drink lots?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q5h" id="q5">
            <div className="accordion-body">
              Definitely not! Mildert prides itself on being a very inclusive and supportive community.
              Pressuring others into doing things they don't feel comfortable with goes against our values.<br/>
              The bar has a variety of soft drinks available (and these are sometimes free!).<br/>
              If you feel pressured or uncomfortable, you can speak to your freps, Talk and Support or College.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q6h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q6" data-bs-target="#q6" href="#q6">
                How much kitchen stuff should I bring?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q6h" id="q6">
            <div className="accordion-body">
              Mildert is fully catered! You might want to bring some cutlery, a bowl or a plate.
              You'll definitely want to bring a few mugs!<br/>
              Kitchen facilities vary from block to block,
              but every corridor has at least a fridge, a kettle and a microwave oven.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q7h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q7" data-bs-target="#q7" href="#q7">
                How did you set the wristband price?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q7h" id="q7">
            <div className="accordion-body">
              The wristband price is set based on the activities we plan to provide.
              The Freshers' Week team work hard to make sure it's the best value for money we can give.<br/>
              The wristband for 2020 has been priced at £45.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q8h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q8" data-bs-target="#q8" href="#q8">
                Can I have an en-suite room?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q8h" id="q8">
            <div className="accordion-body">
              Mildert has a limited number of en-suite rooms for freshers
              and these are reserved for students with medical needs (including mental health).<br/>
              Contact College if you think you would benefit from an en-suite room.
              You will be asked to confidentially provide evidence of your need.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q9h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q9" data-bs-target="#q9" href="#q9">
                Will there be activities organised for international freshers arriving early?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q9h" id="q9">
            <div className="accordion-body">
              Our international freps work hard to organise things to do when you arrive.<br/>
              We will be offering virtual events for quarantining students and providing welfare support.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q10h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q10" data-bs-target="#q10" href="#q10">
                When will I find out where I'm living or who I'm living with?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q10h" id="q10">
            <div className="accordion-body">
              Unfortunately, you won't find out until you arrive. (You will know if you have an en-suite. )
              Don't worry about getting lost, though, as freps will guide you to your room.<br/>
              Accommodation is organised by College and queries relating to allocation should be directed
              to College staff, though please spare a thought for them and only contact them if really necessary!
              Organising accommodation for several hundred freshers, returners and postgraduates isn't simple.
              Changes have to be made as people drop in and out before arrival day.
              Ensuring that the College is COVID-secure adds yet another layer of complexity.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q11h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q11" data-bs-target="#q11" href="#q11">
                Is there insurance cover when living in College?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q11h" id="q11">
            <div className="accordion-body">
              The University provides insurance cover with Endsleigh for belongings <em>in</em> your room.
              Notable exceptions are bicycles and accidental damage.
              There are also surprise inclusions like cover for theft on the way between College and your parents'
              home.
              It's worth taking a quick look through the certificate and key facts:<br/>
              <a href="https://gadget.endsleigh.co.uk/policy-docs?d=Durham%20University">Policy
                Certificate</a><br/>
              <a href="https://gadget.endsleigh.co.uk/policy-docs?d=key_facts_a">Key Facts</a><br/>
              For more details, to claim or to arrange additional insurance cover with Endsleigh visit the
              <a href="https://www.dur.ac.uk/colleges.se.office/">
                PVC Colleges & Student Experience Office page</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q12h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q12" data-bs-target="#q12" href="#q12">
                Can I order stuff to College before I arrive?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q12h" id="q12">
            <div className="accordion-body">
              Unfortunately not!
              There is limited space at reception so you will have to wait until you arrive.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="q13h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="q13" data-bs-target="#q13" href="#q13">
                Can you choose what goes in your packed lunch?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion" aria-labelledby="q13h" id="q13">
            <div className="accordion-body">
              Yes! You choose from the options when you sign up.
            </div>
          </div>
        </div>
      </div>
      <h2>2020</h2>
      <p>2020 is going to be a very different Freshers Week to normal. Nonetheless, your freps are planning an exciting
        time for you.</p>
      <div className="accordion" id="accordion-2020">
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q1h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q1" data-bs-target="#fw2020q1" href="#fw2020q1">
                Will it all be virtual events?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q1h" id="fw2020q1">
            <div className="accordion-body">
              Not at all! We're carefully organising plenty of exciting physical events.<br/>
              Safety is crucial and College staff have been working with
              us to make sure that our events are COVID-secure.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q2h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q2" data-bs-target="#fw2020q2" href="#fw2020q2">
                How is the freshers' fair going to work to find out about clubs and societies?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q2h" id="fw2020q2">
            <div className="accordion-body">
              The University wide freshers' fair will be virtual this year.<br/>
              The Mildert 'Freshtival' will take place during the week with controls.
              You can also find information in your handbook and on social media.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q3h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q3" data-bs-target="#fw2020q3" href="#fw2020q3">
                When will we find out the plans for Freshers' Week?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q3h" id="fw2020q3">
            <div className="accordion-body">
              We're sorry we can't give you more information.<br/>
              A lot more planning and consideration has to go into Freshers' Week this year and we have
              to adapt to changing rules and new guidelines.
              We'll let you know more when we've confirmed details.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q4h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q4" data-bs-target="#fw2020q4" href="#fw2020q4">
                Will sports teams be run as normal this year?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q4h" id="fw2020q4">
            <div className="accordion-body">
              The basic answer is no.<br/>
              What is allowed will depend on how University and government regulations develop.
              There won't be any competitive sport in Michaelmas Term, but our sports clubs are run by passionate
              members and they will do their upmost to ensure that COVID-secure activities take place.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q5h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q5" data-bs-target="#fw2020q5" href="#fw2020q5">
                Will we eat in the hall?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q5h" id="fw2020q5">
            <div className="accordion-body">
              Corridors will be allowed to eat in the Ann Dobson hall on a rota system so you can enjoy your
              impressively large (even if we do say so ourselves) dining hall.<br/>
              There will also be separate, distanced seating for those unable to make their allocated time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q6h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q6" data-bs-target="#fw2020q6" href="#fw2020q6">
                Will there be formals?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q6h" id="fw2020q6">
            <div className="accordion-body">
              There will be <em>social dining events</em>.
              These will be like formals (and you'll probably still hear us calling them formals),
              but with adjustments to be COVID-secure.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q7h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q7" data-bs-target="#fw2020q7" href="#fw2020q7">
                Will we be split into corridors of people on the same course?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q7h" id="fw2020q7">
            <div className="accordion-body">
              No, corridors will be a mix of people from different courses.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q8h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q8" data-bs-target="#fw2020q8" href="#fw2020q8">
                What's happening with arrivals?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q8h" id="fw2020q8">
            <div className="accordion-body">
              When you arrive, freps will be on hand to guide you through what you need to do and direct you
              to your room.<br/>
              In order to keep everyone safe, please check your emails for your allocated arrival time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q9h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q9" data-bs-target="#fw2020q9" href="#fw2020q9">
                When do we get our handbook?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q9h" id="fw2020q9">
            <div className="accordion-body">
              There will not be printed handbooks from College or the JCR this year.<br/>
              Please check your emails for the digital versions!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="fw2020q10h">
            <h3 className="mb-0">
              <a className="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                 aria-expanded="false" aria-controls="fw2020q10" data-bs-target="#fw2020q10" href="#fw2020q10">
                Will I get food when I'm quarantining?
              </a>
            </h3>
          </div>
          <div className="collapse" data-bs-parent="#accordion-2020" aria-labelledby="fw2020q10h" id="fw2020q10">
            <div className="accordion-body">
              Please check your emails for details.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
