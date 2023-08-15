import DashboardNav from "./components/DashboardNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardNav />
      <div style={{width:"75%",marginLeft:"25%"}}>{children}</div>
    </>
  )
}
