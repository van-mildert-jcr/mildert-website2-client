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
    <p class="lead">
        We're excited for you to be joining the Mildert family.
        Going to university is a big step, and you'll probably have some questions...
        Here we answer some common ones.
    </p>
    <p>See also <a href="faq.php">general JCR FAQs</a>.</p>
    <div class="accordion" id="accordion">
        <div class="accordion-item">
            <div class="accordion-header" id="q1h">
                <h3 class="mb-0">
                    <a class="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                       aria-expanded="false" aria-controls="q1" data-bs-target="#q1" href="#q1">
                        When is Freshers' Week and International Freshers' Week?
                    </a>
                </h3>
            </div>
            <div class="collapse" data-bs-parent="#accordion" aria-labelledby="q1h" id="q1">
                <div class="accordion-body">
                    Fresher's week is the week before Michaelmas Term. For International students who arrive earlier, our events start the Wednesday before this. In 2023, our first event of International week is Thursday 21st September. Move in day, and freshers week, starts on Saturday 23rd September. See the <a href="https://www.dur.ac.uk/dates/">University term dates</a>.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" id="q2h">
                <h3 class="mb-0">
                    <a class="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                       aria-expanded="false" aria-controls="q2" data-bs-target="#q2" href="#q2">
                        Does Mildert being a large college make it difficult to make friends?
                    </a>
                </h3>
            </div>
            <div class="collapse" data-bs-parent="#accordion" aria-labelledby="q2h" id="q2">
                <div class="accordion-body">
                    No, in fact there are many parts about being a large college that makes it easier! We have so many sports, societies, committees and events, there will almost certainly be something for you. Also, the fact that we are a catered college makes it so easy to socialise and make friends, as you eat most meals together.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" id="q3h">
                <h3 class="mb-0">
                    <a class="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                       aria-expanded="false" aria-controls="q3" data-bs-target="#q3" href="#q3">
                        Do rooms provide a desk and chair?
                    </a>
                </h3>
            </div>
            <div class="collapse" data-bs-parent="#accordion" aria-labelledby="q3h" id="q3">
                <div class="accordion-body">
                    Yes! All Mildert rooms have a desk and chair.<br/>
                    There are also study spaces across College and the University.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" id="q4h">
                <h3 class="mb-0">
                    <a class="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                       aria-expanded="false" aria-controls="q4" data-bs-target="#q4" href="#q4">
                        Do rooms have a sink?
                    </a>
                </h3>
            </div>
            <div class="collapse" data-bs-parent="#accordion" aria-labelledby="q4h" id="q4">
                <div class="accordion-body">
                    Yes! All Mildert rooms have sinks and mirrors.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" id="q5h">
                <h3 class="mb-0">
                    <a class="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                       aria-expanded="false" aria-controls="q5" data-bs-target="#q5" href="#q5">
                        Will I be pressured to drink lots?
                    </a>
                </h3>
            </div>
            <div class="collapse" data-bs-parent="#accordion" aria-labelledby="q5h" id="q5">
                <div class="accordion-body">
                    Definitely not! Mildert prides itself on being a very inclusive and supportive community.
                    Pressuring others into doing things they don't feel comfortable with goes against our values.<br/>
                    The bar has a variety of soft drinks available (and these are sometimes free!).<br/>
                    If you feel pressured or uncomfortable, you can speak to your freps, Talk and Support or College.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" id="q6h">
                <h3 class="mb-0">
                    <a class="accordion-button collapsed" data-bs-toggle="collapse" role="button"
                       aria-expanded="false" aria-controls="q6" data-bs-target="#q6" href="#q6">
                        How much kitchen stuff should I bring?
                    </a>
                </h3>
            </div>
            <div class="collapse" data-bs-parent="#accordion" aria-labelledby="q6h" id="q6">
                <div class="accordion-body">
                    Mildert is fully catered! You might want to bring some cutlery, a bowl or a plate.
                    You'll definitely want to bring a few mugs!<br/>
                    Kitchen facilities vary from block to block,
                    but every corridor has at least a fridge, a kettle and a microwave oven.
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}
