import { Metadata } from "next"
import Link from "next/link";

export const metadata:Metadata = {
title:"Outreach",
description: "Van Mildert College Outreach"
}

export default function Outreach() {
  return (
    <main>
      <div className="row g-5 ">
  <div className="col-sm-6">
    <div className="card bg-transparent border">
      <Link href="./outreach/ypp" className="text-decoration-none">
        <img src="/assets/img/outreach/ypp-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Young Person's Project</h5>
        </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card bg-transparent border">
      <Link href="./outreach/cvs" className="text-decoration-none">
        <img src="/assets/img/outreach/cvs-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Community Visiting Scheme</h5>
        </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card bg-transparent border">
      <Link href="./outreach/scms" className="text-decoration-none">
        <img src="/assets/img/outreach/scms-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Secure Centre Monitoring Scheme</h5>
        </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card bg-transparent border">
      <Link href="./outreach/crc" className="text-decoration-none">
        <img src="/assets/img/outreach/crc-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Carers' Respite Committee</h5>
        </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card bg-transparent border">
      <Link href="./outreach/psp" className="text-decoration-none">
        <img src="/assets/img/outreach/psp-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Primary School Project</h5>
        </div>
      </Link>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card bg-transparent border">
      <Link href="./outreach/ecc" className="text-decoration-none">
        <img src="/assets/img/outreach/ecc-1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Environmental Conservation Committee</h5>
        </div>
      </Link>
    </div>
  </div>
</div>

    </main>
  )
}
