export const metadata = {
title:"Formals",
description:"Van Mildert College Formals"
}

export default function FormalEvents() {
  return (
    <main>
     <div>
  <div style={{padding: '100px 0px 100px', background: 'url(https://via.placeholder.com/1108x320.png) no-repeat center center'}} className="mb-4">
    <h1>
      Formals
    </h1>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        Formals are some of the best nights in college. These dinners occur about four times a term. Sign up
        with your friends, dress up (boys in suit and tie), and enjoy being served a delicious meal by our
        lovely kitchen staff along with the bar's finest wines!
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        Some Formals allow you to spend time with the committees or sports team you have joined, such as Sports
        Formal and Principal's Formal. Others are themed and open to everyone, including Christmas Formal,
        Halloween Formal, Paddy's Formal and Halfway Formal.
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        After formal ents are organised by our lovely internal Assistant Events Officer (AEO, Ellie Broadhead)
        which can include big bands, acoustic sets, karaoke or a photo booth.
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
