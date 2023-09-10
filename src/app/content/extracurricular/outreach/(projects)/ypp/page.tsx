import { Metadata } from "next"

export const metadata:Metadata = {
title:"Young Persons` Project",
description: "Van Mildert College Young Persons` Project"
}

export default function Outreach() {
  return (
    <main>
<div>
  <h1>Young Person's Project</h1>
  <hr />
  <div className="card bg-transparent border">
    <div className="row">
      <div className="col-sm-6">
        <img src="/assets/img/outreach/ypp-2.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/ypp-3.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/ypp-4.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/ypp-5.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col-sm-6  pe-4 pt-3 pb-3">
        <h4 className="card-title">Overview</h4>
        <p className="card-text">
          We've been raising the aspirations of 14/15-year-old pupils from schools in disadvantaged
          areas in the North East since the project's foundation in 2004.
        </p>
        <h4 className="card-title">Motivation</h4>
        <p className="card-text">
          Young people of this age can experience immense social and academic pressure. Fitting in
          with peers, studying for GCSEs, and thinking about the future can be very daunting. We've
          found that these pupils tend to lack self-confidence and positive role models.
        </p>
        <h4 className="card-title">What We Do</h4>
        <p className="card-text">
          A YPP volunteer is whatever the young person needs them to be: a teammate, a teacher, or a friend.
          We run confidence-building and skills-based exercises that focus on creativity, leadership and
          teamwork. The project itself takes place during the Easter term (January-March): it comprises six
          weekly school sessions, in which we visit the pupils at their schools, and then culminates in the
          Residential at the Van Mildert campus, in which the pupils stay at the college for four days. Some
          of the exercises we do on the Residential include a Dragon's Den team task, mock interviews and a
          trip to an outdoors activity centre.
        </p>
        <h4 className="card-title">Outcomes</h4>
        <p className="card-text">
          YPP not only develops the pupil's self-confidence now, but also expands their aspirations for the
          future. We give the pupils a better understanding of the opportunities open to them and instil
          self-belief to aim high, whatever their chosen path. Some pupils on YPP even aspire to higher
          education as a result of being exposed to university life and students.
        </p>
        <h4 className="card-title">What the teachers say</h4>
        <p className="card-text">
          "It is without doubt, that the YPP instils in our young people pride, confidence and the courage to
          take the peripheral plunge into the unknown" - Mr C Wood, Academy 360 Sunderland
        </p>
        <h4 className="card-title">What the young people say</h4>
        <p className="card-text">
          "The volunteers showed me that if you have any dreams then go for them, make them happen and never
          let anyone get in your way of achieving them." - Callum. "You all helped me come out of my shell and
          have given me loads more confidence. I am never going to forget this once in a lifetime
          opportunity!" - Amy
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}