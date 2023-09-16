import { Metadata } from "next"

export const metadata:Metadata = {
title:"Primary School Project",
description: "Van Mildert College Primary School Project"
}

export default function Outreach() {
  return (
    <main>
<div>
  <h1>Primary School Project</h1>
  <hr />
  <div className="card bg-transparent border">
    <div className="row">
      <div className="col-sm-6">
        <img src="/assets/img/outreach/psp-1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col-sm-6  pe-4 pt-3 pb-3">
        <h4 className="card-title">Overview</h4>
        <p className="card-text">
          We provide teaching assistants and run afterschool clubs at a number of schools across the Durham
          Area.
        </p>
        <h4 className="card-title">Motivation</h4>
        <p className="card-text">
          Often the schools are underfunded and understaffed, and struggle to give pupils the extra help they
          may need.
        </p>
        <h4 className="card-title">What We Do</h4>
        <p className="card-text">
          We volunteer as teaching assistants, helping out with the general running of the lessons, tending to
          groups who require extra attention, or indeed top pupils who need a challenge. Our after school
          clubs, such as arts and crafts and language classes, also allow the children to get involved in
          extra-curricular activities - and most importantly have fun!
        </p>
        <h4 className="card-title">Outcomes</h4>
        <p className="card-text">
          The project plays an invaluable role in the children's lives and at the schools. Our volunteers
          relieve teachers of a great deal of stress in the classroom, provide a role model for the children,
          and allow the children access to extra-curricular activities that otherwise couldn't go ahead.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}