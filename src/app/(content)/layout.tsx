export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="d-flex align-items-center text-center" style={{ minHeight: "calc(100vh - 125px)", marginTop: "55px", paddingTop: "20px", marginBottom: "20px" }}>
      <div id="content" className="container text-center bg-body-secondary rounded" style={{ minHeight: "0" }}>
        {children}
      </div>
    </div>
  )
}
