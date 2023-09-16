import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Van Mildert College JCR Contact Details",
};

export default function Contact() {
  return (
    <main>
      <div className="row">
        <div className="col-md-6">
          <div className="chunk">
            <h2>Address</h2>
            <p>
              Van Mildert College Junior Common Room
              <br />
              Van Mildert College
              <br />
              Mill Hill Lane
              <br />
              DURHAM
              <br />
              United Kingdom
              <br />
              DH1 3LH
            </p>
          </div>
          <div className="chunk">
            <h2>Telephone</h2>
            {/*sse*/}
            <p>
              JCR President: <a href="tel:+441913347137">0191 334 7137</a>
            </p>
            {/*/sse*/}
          </div>
          <div className="chunk">
            <h2>Van Mildert College</h2>
            <p>
              <a href="https://www.dur.ac.uk/van-mildert.college/contact/">
                General Contact Information
              </a>
            </p>
            <p>
              <a href="https://www.dur.ac.uk/directory/units/colleges/mildert/">
                University Directory
              </a>
            </p>
            <p>
              <a href="https://vm.studentconnect.durham.ac.uk/student/login.html?remote=true">
                Student Support Appointments
              </a>
            </p>
            <p>
              <a href="https://www.dur.ac.uk/van-mildert.college/">
                Van Mildert College website
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Email</h2>
          <ul className="list-unstyled">
            <li>
              <strong>President</strong>
              <br />
              For general enquiries
              <br />
              Email:{" "}
              <a href="mailto:president@mildert.co.uk">
                president@mildert.co.uk
              </a>
            </li>
            <li>
              <strong>Financial and Commercial Services Officer</strong>
              <br />
              For financial enquiries, invoices etc.; Shop and tech;
              <br />
              Email:{" "}
              <a href="mailto:facso@mildert.co.uk">facso@mildert.co.uk</a>
            </li>
            <li>
              <strong>Senior Frep</strong>
              <br />
              For general Freshers Week enquiries (also President and FACSO)
              <br />
              Email:{" "}
              <a href="mailto:seniorfrep@mildert.co.uk">
                seniorfrep@mildert.co.uk
              </a>
            </li>
            <li>
              <strong>Outreach and Fundraising Officer</strong>
              <br />
              For enquiries relating to our Outreach projects
              <br />
              Email:{" "}
              <a href="mailto:outreach@mildert.co.uk">outreach@mildert.co.uk</a>
            </li>
            <li>
              <strong>Webmaster</strong>
              <br />
              For enquiries relating to our website
              <br />
              Email:{" "}
              <a href="mailto:webmaster@mildert.co.uk">
                webmaster@mildert.co.uk
              </a>
            </li>
          </ul>
          <p>
            Other email addresses can be found on the{" "}
            <Link href="/content/about/whos-who">Who{"'"}s Who page</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
