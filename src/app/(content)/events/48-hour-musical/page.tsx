export const metadata = {
title:"48 Hour Musical",
description:"Van Mildert College 48 Hour Musical"
}

export default function TwoDayMusical() {
  return (
    <main>
      <div>
  <div style={{padding: '100px 0px 100px', background: 'url(https://via.placeholder.com/1108x320.png) no-repeat center center'}} className="mb-4">
    <h1>
      48 Hour Musical
    </h1>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        The 48 hour musical is a brilliant way to celebrate the end of summer exams - both for those taking part and
        those in the audience!
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        And no, it's not a show that drags on for two days... the entire show is produced and rehearsed in just 48
        hours and we promise it's not as daunting as it sounds!
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        Everyone who auditions is guaranteed a role in this exciting production. We even had a cast of over 670 in
        Grease last year. All you need is buckets of energy and an alarm clock!
      </p>
    </div>
  </div>
  <hr />
  <h1>Photography</h1>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <img src="https://via.placeholder.com/1108x1662.png?text=Photo+Goes+Here" className="d-block w-100" alt="..." />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <img src="https://via.placeholder.com/1108x1662.png?text=Photo+Goes+Here" className="d-block w-100" alt="..." />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <img src="https://via.placeholder.com/1108x1662.png?text=Photo+Goes+Here" className="d-block w-100" alt="..." />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </main>
  )
}
