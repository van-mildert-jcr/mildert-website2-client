import { Metadata } from "next"

export const metadata:Metadata = {
title:"Community Visiting Scheme",
description: "Van Mildert College Community Visiting Scheme"
}

export default function Outreach() {
  return (
    <main>
<div>
  <h1>Community Visiting Scheme</h1>
  <hr />
  <div className="card bg-transparent border">
    <div className="row">
      <div className="col-sm-6">
        <img src="/assets/img/outreach/cvs-2.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/cvs-3.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/cvs-4.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col-sm-6  pe-4 pt-3 pb-3">
        <h4 className="card-title">Overview</h4>
        <p className="card-text">
          We volunteer on a weekly basis to support the elderly residents of Durham.
        </p>
        <h4 className="card-title">Motivation</h4>
        <p className="card-text">
          Many older people suffer from loneliness which can have devastating effects on their happiness and
          health. The elderly residents that participate in CVS usually live alone and don't have many people
          to talk to.
        </p>
        <h4 className="card-title">What We Do</h4>
        <p className="card-text">
          Our volunteers visit the elderly in groups, providing valued company. We sit with them, maybe have a
          cup of tea and shortbread, and chat about the local area, their experiences, Durham university and
          life in general!
        </p>
        <h4 className="card-title">Outcomes</h4>
        <p className="card-text">
          The elderly people we visit enormously appreciate the project, and look forward to every session.
          They love talking to the us, especially as they wouldn't normally interact with students, and always
          feel much happier after our visits.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}