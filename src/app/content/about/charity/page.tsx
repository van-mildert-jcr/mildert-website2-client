export const metadata = {
  title: "JCR Charity",
  description: "Van Mildert College Junior Common Room Charity Information",
};

export default function Charity() {
  return (
    <main>
      <div>
        <h1 className="mildert-page-heading mb-4">Our Charity</h1>
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <p className="lead">
              Van Mildert College Junior Common Room (the JCR) is a charitable
              incorporated organisation (CIO) registered in England and Wales,
              charity number 1190990.
            </p>
            <p>
              The JCR is also a students&apos; union of Van Mildert College as
              defined by the Education Act 1994.
            </p>
            <p>
              The CIO constitution and our Standing Orders can be found{" "}
              <a href="/constitution">here</a>.
            </p>
            <p>
              This website is operated by Van Mildert College Junior Common
              Room. Any views expressed within may not be those of Van Mildert
              College or the University of Durham.
            </p>
            <h2>Registered address</h2>
            <address>
              Van Mildert College
              <br />
              Mill Hill Lane
              <br />
              DURHAM
              <br />
              DH1 3LH
              <br />
              UK
            </address>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    </main>
  );
}
