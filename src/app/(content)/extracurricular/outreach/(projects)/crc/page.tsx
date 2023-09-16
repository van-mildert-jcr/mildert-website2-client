import { Metadata } from "next"

export const metadata:Metadata = {
title:"Carers' Respite Committee",
description: "Van Mildert College Carers' Respite Committee"
}

export default function Outreach() {
  return (
    <main>
 <div>
  <h1>Carers' Respite Committee</h1>
  <hr />
  <div className="card bg-transparent border">
    <div className="row">
      <div className="col-sm-6">
        <img src="/assets/img/outreach/crc-2.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/crc-3.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/crc-4.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/crc-5.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col-sm-6  pe-4 pt-3 pb-3">
        <h4 className="card-title">Overview</h4>
        <p className="card-text">
          We support disabled children and their families by providing respite services.
        </p>
        <h4 className="card-title">Motivation</h4>
        <p className="card-text">
          Caring for a child with a disability impacts heavily upon the daily and working lives of parents and
          carers, and many families experience a real lack of support from social and educational services. As
          a result, parents and carers often have limited time to work, relax, and complete essential
          day-to-day tasks. Equally children with physical or mental disabilities often experience
          discrimination or stigmatisation, which can leave them socially isolated.
        </p>
        <h4 className="card-title">What We Do</h4>
        <p className="card-text">
          We provide a supportive environment, which allows both parents and children to relax, socialize and
          have lots of fun. We put on 'Happy Saturday' sessions, make home visits and organise day trips, with
          a variety of activities to suit all needs. Home visits involve between 2 and 4 volunteers visiting
          the family home after school, whilst 'Happy Saturdays' are attended by many families and involve
          around 10 volunteers.
        </p>
        <h4 className="card-title">Outcomes</h4>
        <p className="card-text">
          Our project gives parents and carers a well-earned break, and they really appreciate being able to
          talk to other families, as well as people outside of the family, about their lives. The children
          also have the opportunity to try new things, develop skills and confidence, and interact with other
          children and the volunteers.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}