export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="d-flex align-items-center text-center" style={{ minHeight: "calc(100vh - 95px)", paddingTop: "20px", paddingBottom: "20px" }}>
      <div id="content" className="container text-center bg-body-secondary rounded" style={{ minHeight: "0" }}>
        {children}
      </div>
    </div>
  )
}
