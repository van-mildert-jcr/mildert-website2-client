export const metadata = {
  title: "Freshers' Week",
  description: "Freshers' week at Van Mildert College",
}

export default function FreshersWeek() {
  return (
    <main>
      <h1 className="mildert-page-heading">
        Fresher's Week @ Van Mildert College
      </h1>
      <div>
        <div className="ratio ratio-16x9" hidden>
          <iframe src="" allowFullScreen></iframe>
        </div>
      </div>
      <hr/>
      <h2>
        Fresher's Week Timetable
      </h2>
      <p>2023 timetable not available yet!</p>

      <hr/>

      <div className="mb-4">
        <h2>
          College Parents
        </h2>
        <p>
         Applications for College Parents are not open yet! Check back here later.
        <br/>
        If you have any questions, please contact{" "}
        <a href="mailto:vp@mildert.co.uk">
          vp@mildert.co.uk
        </a>
        </p>
      </div>
      <hr/>
      <div>
        <h2>
          University Induction
        </h2>
        <p>
          Please go through the induction information given in the link. This contains important information
          and potentially forms that are supposed to be filled in before arrival. Here's the link:{" "}
          <a href="https://www.dur.ac.uk/colleges-and-student-experience/colleges/van-mildert/ugwelcome/">
            Welcome to Van Mildert College
          </a>
        </p>
      </div>
    </main>
  );
}
