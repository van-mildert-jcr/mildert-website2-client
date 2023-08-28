import React from "react";
import Link from "next/link";

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
      <p>See also <Link href="/content/about/faq">general JCR FAQs</Link>.</p>

      <div className="fresher-faq accordion">

        <div className="accordion-item">
          <div id="question_0" className="accordion-header">
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_0"
              aria-controls="answer_0"
            >
              What on Earth is a 'Frep'?
            </button>
          </div>
          <div id="answer_0" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_0" >
            <div className="accordion-body">
              "Frep" is a contraction of "Fresher Representative" (fresher rep)! The Frep team is made up of volunteer
              students that have completed their first year at Durham and so are perfectly well-equipped to answer all your
              questions.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_1" className="accordion-header">
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_1"
              aria-controls="answer_1"
            >
              When is Freshers' Week and International Freshers' Week?
            </button>
          </div>
          <div id="answer_1" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_1" >
            <div className="accordion-body">
              Freshers' Week is the week before Michaelmas Term.
              International Freshers' Week is the week before that,
              as international students arrive over the week.<br/>
              2023 Freshers' Week starts when home students arrive.<br/>
              See the <a href="https://www.dur.ac.uk/dates/">University term dates</a>.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_2" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_2"
              aria-controls="answer_2"
            >
              Does Mildert being a large college make it difficult to make friends?
            </button>
          </div>
          <div id="answer_2" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_2" >
            <div className="accordion-body">
              Being a large college means that there are plenty of committees,
              sports teams and societies to get involved with. It means there are all types of people involved in
              the community. College life also means you make friends across the year groups.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_3" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_3"
              aria-controls="answer_3"
            >
              Do rooms provide a desk and chair?
            </button>
          </div>
          <div id="answer_3" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_3" >
            <div className="accordion-body">
              Yes! All Mildert rooms have a desk and chair.<br/>
              There are also study spaces across College and the University.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_4" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_4"
              aria-controls="answer_4"
            >
              Do rooms have a sink?
            </button>
          </div>
          <div id="answer_4" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_4" >
            <div className="accordion-body">
              Yes! All Mildert rooms have sinks and mirrors.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_5" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_5"
              aria-controls="answer_5"
            >
              Will I be pressured to drink lots?
            </button>
          </div>
          <div id="answer_5" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_5" >
            <div className="accordion-body">
              Definitely not! Mildert prides itself on being a very inclusive and supportive community.
              Pressuring others into doing things they don't feel comfortable with goes against our values.<br/>
              The bar has a variety of soft drinks available (and these are sometimes free!).<br/>
              If you feel pressured or uncomfortable, you can speak to your freps, Talk and Support or College.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_6" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_6"
              aria-controls="answer_6"
            >
              How much kitchen stuff should I bring?
            </button>
          </div>
          <div id="answer_6" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_6" >
            <div className="accordion-body">
              Mildert is fully catered! You might want to bring some cutlery, a bowl or a plate.
              You'll definitely want to bring a few mugs!<br/>
              Kitchen facilities vary from block to block,
              but every corridor has at least a fridge, a kettle and a microwave oven.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_7" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_7"
              aria-controls="answer_7"
            >
              How much kitchen stuff should I bring?
            </button>
          </div>
          <div id="answer_7" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_7" >
            <div className="accordion-body">
              Mildert is fully catered! You might want to bring some cutlery, a bowl or a plate.
              You'll definitely want to bring a few mugs!<br/>
              Kitchen facilities vary from block to block,
              but every corridor has at least a fridge, a kettle and a microwave oven.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_8" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_8"
              aria-controls="answer_8"
            >
              How is the wristband price set?
            </button>
          </div>
          <div id="answer_8" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_8" >
            <div className="accordion-body">
              The wristband price is set based on the activities we plan to provide.
              The Freshers' Week team work hard to make sure it's the best value for money we can give.<br/>
              The wristband for 2023 has not been priced yet.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_9" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_9"
              aria-controls="answer_9"
            >
              Can I have an en-suite room?
            </button>
          </div>
          <div id="answer_9" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_9" >
            <div className="accordion-body">
              Mildert has a limited number of en-suite rooms for freshers
              and these are reserved for students with medical needs (including mental health).<br/>
              Contact College if you think you would benefit from an en-suite room.
              You will be asked to confidentially provide evidence of your need.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_10" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_10"
              aria-controls="answer_10"
            >
              Will there be activities organised for international freshers arriving early?
            </button>
          </div>
          <div id="answer_10" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_10" >
            <div className="accordion-body">
              Our international freps work hard to organise things to do when you arrive. Welfare support is always available.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_11" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_11"
              aria-controls="answer_11"
            >
              When will I find out where I'm living or who I'm living with?
            </button>
          </div>
          <div id="answer_11" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_11" >
            <div className="accordion-body">
              Unfortunately, you won't find out until you arrive. (You will know whether you have an en-suite beforehand)
              Don't worry about getting lost, though, as freps will guide you to your room.<br/>
              Accommodation is organised by College and queries relating to allocation should be directed
              to College staff, but please spare them a thought and only contact them if really necessary!
              Organising accommodation for several hundred freshers, returners and postgraduates isn't simple.
              Changes have to be made as people drop in and out before arrival day.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_12" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_12"
              aria-controls="answer_12"
            >
              Is there insurance cover when living in College?
            </button>
          </div>
          <div id="answer_12" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_12" >
            <div className="accordion-body">
              The University provides insurance cover with Endsleigh for belongings <em>in</em> your room.
              Notable exceptions are bicycles and accidental damage.
              There are also surprise inclusions like cover for theft on the way between College and your parents'
              home.
              It's worth taking a quick look through the certificate and key facts:<br/>
              <a href="https://gadget.endsleigh.co.uk/policy-docs?d=Durham%20University">Policy Certificate</a><br/>
              <a href="https://gadget.endsleigh.co.uk/policy-docs?d=key_facts_a">Key Facts</a><br/>
              For more details, to claim or to arrange additional insurance cover with Endsleigh visit the{" "}
              <a href="https://www.dur.ac.uk/colleges.se.office/">PVC Colleges & Student Experience Office page</a>.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_13" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_13"
              aria-controls="answer_13"
            >
              Can I order stuff to College before I arrive?
            </button>
          </div>
          <div id="answer_13" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_13" >
            <div className="accordion-body">
              Unfortunately not!
              There is limited space at reception so you will have to wait until you arrive.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div id="question_14" className="accordion-header" >
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#answer_14"
              aria-controls="answer_14"
            >
              Can you choose what goes in your packed lunch?
            </button>
          </div>
          <div id="answer_14" className="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="question_14" >
            <div className="accordion-body">
              Options can be somewhat limited, but yes! You choose from the options when you sign up (deadline is end of lunchtime the day before!)
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
