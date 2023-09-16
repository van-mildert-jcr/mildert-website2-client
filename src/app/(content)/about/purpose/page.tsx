export const metadata = {
  title: "Purpose",
  description: "Van Mildert College JCR Overview",
};

export default function Purpose() {
  return (
    <main>
      <div>
        <div className="card mb-5">
          <div className="card-body">
            <h1>
              Van Mildert College Junior Common Room is an independent Students
              {"'"} Union working to support and enrich the experience of
              students of Van Mildert College, Durham University.
            </h1>
          </div>
        </div>
        <h2>We carry out our mission in three key ways:</h2>
        <div className="row p-5">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Represent</h3>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Experience</h3>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Develop</h3>
              </div>
            </div>
          </div>
        </div>
        <h2>And achieve our goals through five methods of operation:</h2>
        <div className="row mt-5">
          <div className="col-1" />
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Events</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="m-0">
                  The JCR hosts a wide array of events across the academic year,
                  ranging from panel discussions on current affairs to 1000
                  guest Balls. These are all organised bu students, for
                  students.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Welfare &amp; Student Support</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="m-0">
                  Our welfare service, known as Talk and Support, is a key piece
                  of the student support infrastructure for Mildertians, be it
                  for a casual reassuring chat or signposting to professionals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Sports &amp; Societies</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="m-0">
                  With over 40 sports, societies and committees, Van Mildert JCR
                  is at the heart of students{"'"} extracurricular life. These
                  are all supported by and operate under the JCR.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Professional Development</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="m-0">
                  Continuing Durham{"'"}s excellent reputation for work ready
                  graduates, the JCR has 100s f opportunities for students to
                  step up into leadership positions and build their professional
                  competence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <div className="card-body">
                <h3 className="m-0">Outreach Projects</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <p className="m-0">
                  The JCR has 5 outreach projects, all delivering social benefit
                  to the local community whilst simultaneously giving our
                  members valuable life experience, and the chance to make a
                  real world impact in County Durham.
                </p>
              </div>
            </div>
          </div>
          <div className="col-1" />
        </div>
        <h2 className="my-3">Our Structure:</h2>
        <img
          className="img-fluid"
          src="/assets/img/org-chart.png"
          alt="Diagram outlining the leadership structure of the JCR"
        />
      </div>
    </main>
  );
}
