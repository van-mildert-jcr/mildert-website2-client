import { Metadata } from "next"

export const metadata:Metadata = {
title:"Secure Centre Monitoring Scheme",
description: "Van Mildert College Secure Centre Monitoring Scheme"
}

export default function Outreach() {
  return (
    <main>
<div>
  <h1>Secure Centre Monitoring Scheme</h1>
  <hr />
  <div className="card bg-transparent border border-white">
    <div className="row">
      <div className="col-sm-6">
        <img src="/assets/img/outreach/scms-1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col-sm-6  pe-4 pt-3 pb-3">
        <h4 className="card-title">Overview</h4>
        <p className="card-text">
          We support young people at Aycliffe Secure Centre, either placed there as offenders or for welfare
          reasons, and facilitate their rehabilitation.
        </p>
        <h4 className="card-title">Motivation</h4>
        <p className="card-text">
          Many young people in Secure Centres feel rejected by society, suffering from low self-confidence and
          loneliness. Often they receive little support from family or friends, and lack positive role models.
        </p>
        <h4 className="card-title">What We Do</h4>
        <p className="card-text">
          We show these young people that others still care about them, and that they have a chance to make
          more of their lives than they may think. As mentors we are consistent, supportive and
          non-judgemental role models with a similar age, interest and sense of humour to them, giving the
          young people someone to talk to about everyday problems in the centre or concerns about preparing
          for release and resettlement.
          <br /><br />
          Mentors visit the Secure Centre in groups, and a typical visit involves playing pool or cards,
          sometimes going to eat dinner with them or sitting down to watch and discuss TV.
          * The project also provides one-on-one visits to young people who don’t have family visits, giving a
          further support to those who need it most.
        </p>
        <h4 className="card-title">Outcomes</h4>
        <p className="card-text">
          We develop their self-confidence and help with their rehabilitation, even inspiring them to seek
          further education. Over the years the resettlement departments at the secure centres have hugely
          appreciated our support.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}