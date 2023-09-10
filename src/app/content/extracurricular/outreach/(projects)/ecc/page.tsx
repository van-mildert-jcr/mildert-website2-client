import { Metadata } from "next"

export const metadata:Metadata = {
title:"Environmental Conservation Committee",
description: "Van Mildert College Environmental Conservation Committee"
}

export default function Outreach() {
  return (
    <main>
 <div>
  <h1>Environmental Conservation Committee</h1>
  <hr />
  <div className="card bg-transparent border">
    <div className="row">
      <div className="col-sm-6">
        <img src="/assets/img/outreach/ecc-2.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/ecc-3.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/ecc-4.jpg" className="d-block w-100" alt="..." />
        <img src="/assets/img/outreach/ecc-5.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="col-sm-6  pe-4 pt-3 pb-3">
        <h4 className="card-title">Overview</h4>
        <p className="card-text">
          We promote environmental awareness and work to conserve green spaces in Durham.
        </p>
        <h4 className="card-title">Motivation</h4>
        <p className="card-text">
          Taking care of our planet is a global issue, but change must be implemented on a local basis to aid
          this cause. Conservation projects often lack funding, resources and volunteers, and many people are
          unaware of ways to be environmentally friendly.
        </p>
        <h4 className="card-title">What We Do</h4>
        <p className="card-text">
          We work with local conservation groups, helping out with general maintenance work, planting trees
          and litter picking. Our school workshops also engage young people with important environmental
          issues including recycling, food waste and global warming.
        </p>
        <h4 className="card-title">Outcomes</h4>
        <p className="card-text">
          Our support for conservation groups is greatly valued, helping them to maintain and develop areas of
          natural beauty. With our volunteers, we double the number of people working on a conservation
          effort. School pupils love our workshops and learning about the environment, giving them a chance to
          do a fun extra-curricular activity too.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}