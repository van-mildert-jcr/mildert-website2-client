export const metadata = {
  title: "Study Spaces",
  description: "Van Mildert College Study Spaces",
}

export default function StudySpaces() {
  return (
    <main>
      <h1 className="mildert-page-heading mb-4">Study Spaces</h1>
      <div className="lead">
        <p>It's a truth universally acknowledged that whilst at Durham you'll have to do some work.</p>
        <p>
          The Van Mildert College library and computer room are both here to offer you help and support with your
          various studies. Indeed, we aim to support every area of study undertaken by Mildert students and constantly
          add new titles to our library collection.
        </p>
        <p>
          You'll find the two library rooms, both with WiFi, in the main building on the same level as
          Reception. In addition, our computer room offers laser-printing, high-speed internet access and all the latest
          software.
        </p>
        <p>
          During the summer examination season, other rooms within College are also available to be used as
        study spaces for revision.
        </p>
      </div>
      <hr/>
      <h2>Room Details</h2>
      <div>
        <p><u>Library Borrowing Times</u></p>

        <p style={{marginBottom: "0"}}>Mon-Fri: 9:00-17:00 & 19:00-22:00</p>
        <p style={{marginBottom: "0"}}>Sat: 14:00-17:00</p>
        <p style={{marginBottom: "0"}}>Sun: 14:00-17:00 & 19:00-22:00</p>

        <br/>

        <p>
          (Opening times during vacation periods may differ, please see notice board for details. The library closes
          during balls and formals.)
        </p>
      </div>
      <hr/>

      <div className="row">
        <div className="col-md-4 col-sm-6 md-margin-bottom-20">
          <img className="img-fluid" src="/mildertn/uploads/75.jpg" alt="" />
          <h3 style={{textAlign: "center"}}>Library</h3>
          <p>
            The Bradshaw Room houses over 12,000 academic texts, a Library2careers and study-skills section, and
            course-related DVDs. There are study tables and chairs and, if you choose to sit by the window, you'll
            have wonderful views across the lake where the antics of the ducks, moorhens and one scary heron can
            provide a great distraction from linear algebra or 19th Century politics!
          </p>
          <br/>
          <p>
            It is staffed by the student library committee and is open 24 hours for study purposes. Items are
            available to borrow during staffed hours and students interested in helping to run the library can
            join
            the library committee. Look for opening hours on the Library door and noticeboard.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 md-margin-bottom-20">
          <img className="img-fluid" src="/mildertn/uploads/74.jpg" alt="" />
          <h3 style={{textAlign: "center"}}>Kent Room</h3>
          <p>
            Across the corridor the Kent Room contains a superb collection of recreational fiction and
            non-fiction, magazines such as The Economist and New Scientist, and DVDs. Here you can relax on
            lovely, squishy sofas and read in peace and quiet. This room is also open 24 hours for study.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 md-margin-bottom-20">
          <img className="img-fluid" src="/mildertn/uploads/imagecomingsoon.png" alt="" />
          <h3 style={{textAlign: "center"}}>Computer Room</h3>
          <p>
            The computer room offers 30+ PCs with specialist software and databases installed on all systems.
            High speed internet access is provided, along with high-speed laser printing. The computer room is
            open 24 hours a day.
          </p>
        </div>
      </div>

    </main>
  );
}
