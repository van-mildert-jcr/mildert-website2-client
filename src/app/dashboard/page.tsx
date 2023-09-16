import Link from "next/link";

export default function Hub() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h1>Simple Sidebar</h1>
            <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens,
              the page content will be pushed off canvas.</p>
            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Levy Status</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Purchased? Active? | 1/3 Payments</h6>
                <p className="card-text">Levy Description. Lorem ipsum something rather or a description of wha tth e levy is and the benefits you can get like not discuounts but definietly something worthwhile oh like sports.</p>
                <a href="#" className="card-link">Puchase</a>
                <Link className="card-link" href="/dashboard/member/purchases">Reciepts</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fresher Wristband Status</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Purchased? Active? | 1/3 Payments</h6>
                <p className="card-text">Levy Description. Lorem ipsum something rather or a description of wha tth e levy is and the benefits you can get like not discuounts but definietly something worthwhile oh like sports.</p>
                <a href="#" className="card-link">Puchase</a>
                <Link className="card-link" href="/dashboard/member/purchases">Reciepts</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
