import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 bg-body-secondary overflow-auto" style={{ height: "calc(100vh - 95px)" }}>
          <Menu />
        </div>
        <div className="col-9 p-3 bg-body overflow-auto" style={{ height: "calc(100vh - 95px)" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  return (
    <nav className="nav flex-column p-3">
      <Link href="/dashboard" >Home</Link>
      <a className="text-decoration-none text-reset" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Member</a>
      <div className="collapse ps-2" id="collapseExample">
        <Link href="/dashboard/member/profile" >Profile</Link><br />
        <Link href="/dashboard/member/purchases" >Purchases</Link><br />
        <Link href="/dashboard/member/memberships" >Group Memberships</Link><br />
        <div className="bg-danger">Log Out</div>
      </div>
    </nav>
  );
};