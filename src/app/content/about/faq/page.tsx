import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about the JCR and College",
};

export default function FAQ() {
  return (
    <main>
      <div>
        <h1>Frequently Asked Questions</h1>
        <h2>General</h2>
        <div className="accordion" id="S1">
          <div className="accordion-item">
            <div className="accordion-header" id="Q1-1h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q1-1"
                  aria-expanded="false"
                  aria-controls="Q1-1"
                >
                  What is the JCR?
                </button>
              </h3>
            </div>
            <div
              id="Q1-1"
              className="accordion-collapse collapse"
              aria-labelledby="Q1-1h"
              data-bs-parent="#S1"
            >
              <div className="accordion-body">
                See <Link href="/content/about/thejcr">What is the JCR?</Link>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="Q1-2h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q1-2"
                  aria-expanded="false"
                  aria-controls="Q1-2"
                >
                  Who do I contact?
                </button>
              </h3>
            </div>
            <div
              id="Q1-2"
              className="accordion-collapse collapse"
              aria-labelledby="Q1-2h"
              data-bs-parent="#S1"
            >
              <div className="accordion-body">
                If you have a general question about the JCR or can{"'"}t work
                out who you need, then the President is always a good start. If
                you have a financial query then the FACSO (our finance officer)
                is person you want; the FACSO also oversees the website, the
                shop and tech.
                <br />
                Contact details can be found <Link href="/content/about/contact">here</Link>.
              </div>
            </div>
          </div>
        </div>
        <h2>Current students</h2>
        <div className="accordion" id="S2">
          <div className="accordion-item">
            <div className="accordion-header" id="Q2-1h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q2-1"
                  aria-expanded="false"
                  aria-controls="Q2-1"
                >
                  How do I get involved?
                </button>
              </h3>
            </div>
            <div
              id="Q2-1"
              className="accordion-collapse collapse"
              aria-labelledby="Q2-1h"
              data-bs-parent="#S2"
            >
              <div className="accordion-body">
                <p>
                  If you want to get involved in a society or sports club,
                  contact the club captain or society president; contact the SSO
                  if you can not work out who this is.
                </p>
                <p>
                  If you want to join a committee, then this depends on the
                  Standing Orders. If it{"'"}s an open committee, then contact
                  its head and you are in. If not, you will have to apply.
                  Applications normally open in Michaelmas term or the end of
                  Easter term.
                </p>
                <p>
                  Some JCR positions you must apply for, some you must stand for
                  election. Appendix A of the
                  <Link href="/content/gov/constitution">Standing Orders</Link> will give an
                  indication of when the processes will take place. Contact the
                  JCR Chair or President if you have any queries.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="Q2-2h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q2-2"
                  aria-expanded="false"
                  aria-controls="Q2-2"
                >
                  What are JCR Meetings?
                </button>
              </h3>
            </div>
            <div
              id="Q2-2"
              className="accordion-collapse collapse"
              aria-labelledby="Q2-2h"
              data-bs-parent="#S2"
            >
              <div className="accordion-body">
                JCR Meetings are where members can discuss matters of the JCR.
                Most JCR Meetings will have hustings (Q&amp;A etc.) for election
                candidates. Proposals to change the JCR will put proposed at a
                JCR Meeting and will be voted on or put to a referendum. If you
                are thinking of making a proposal or raising something, you
                should contact the JCR Chair.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="Q2-3h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q2-3"
                  aria-expanded="false"
                  aria-controls="Q2-3"
                >
                  What is the Executive Committee?
                </button>
              </h3>
            </div>
            <div
              id="Q2-3"
              className="accordion-collapse collapse"
              aria-labelledby="Q2-3h"
              data-bs-parent="#S2"
            >
              <div className="accordion-body">
                The Executive Committee comprises the 11 elected Executive
                Officers and the College Bar Steward (non-voting). The Executive
                Committee makes decisions on behalf of the JCR between meetings
                or on matters not deemed important enough to put to the wider
                JCR.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="Q2-4h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q2-4"
                  aria-expanded="false"
                  aria-controls="Q2-4"
                >
                  What are the Standing Orders?
                </button>
              </h3>
            </div>
            <div
              id="Q2-4"
              className="accordion-collapse collapse"
              aria-labelledby="Q2-4h"
              data-bs-parent="#S2"
            >
              <div className="accordion-body">
                The Standing Orders or Constitution are the rules for how the
                JCR is run. They can be found <Link href="/content/gov/constitution">here</Link>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="Q2-5h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q2-5"
                  aria-expanded="false"
                  aria-controls="Q2-5"
                >
                  What is a Kazu?
                </button>
              </h3>
            </div>
            <div
              id="Q2-5"
              className="accordion-collapse collapse"
              aria-labelledby="Q2-5h"
              data-bs-parent="#S2"
            >
              <div className="accordion-body">
                The winning candidate in a Presidential election kicks a fizzy
                drink can (traditionally cola) down the college stairs (trying
                not to hit the FACSO-elect), throws the can over their head
                three times and then opens it above their head. This was
                previously performed by all Executive Officers, but this has
                fallen out of practice.
                <br />
                The VMA has an
                <a href="https://mildertnews.com/2019/11/17/the-kazu-a-brief-history/">
                  article
                </a>
                about the history of the Kazu.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="Q2-6h">
              <h3 className="mb-0">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Q2-6"
                  aria-expanded="false"
                  aria-controls="Q2-6"
                >
                  Can I opt out?
                </button>
              </h3>
            </div>
            <div
              id="Q2-6"
              className="accordion-collapse collapse"
              aria-labelledby="Q2-6h"
              data-bs-parent="#S2"
            >
              <div className="accordion-body">
                <p>
                  Yes, this is your legal right. Please note that you will be
                  unable to hold JCR positions or vote in elections. You may
                  also be charged more than members for services provided by the
                  JCR.
                </p>
                <p>To opt out, write to the President.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
