export const metadata = {
title:"Balls",
description:"Van Mildert College Balls"
}

export default function BallEvents() {
  return (
    <main>
      <div>
  <div style={{padding: '100px 0px 100px', background: 'url(https://via.placeholder.com/1108x320.png) no-repeat center center'}} className="mb-4">
    <h1>
      Balls
    </h1>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        The biggest events of the year. The Michaelmas and Summer balls are events that celebrate the end of a
        term, with Michaelmas being held internally and Summer hosted at the beautiful Hardwick Hall. Themes in
        the past have included Seven Sins, Secret Garden Party, Fire and Ice and most recently Beyond the Yellow
        Brick Road.
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        Balls provide a brilliant opportunity to dress up fancy (aka in very different clothes to Durham's usual
        going out garms) and are a great event for bringing the whole college together.
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        They begin with a popular formal meal before the rest of the entertainment kicks off such as fairground
        rides, food stalls (including free pizza, burgers and ice cream), professional photography, a silent
        disco and bands from Mildert and further afield, recently including the Hoosiers and the actual S Club!
        The summer ball continues until the early hours for survivors who are treated with a breakfast roll and
        a college survivor's photo. The brave venture up to Observatory Hill to get the perfect instagram photo
        with a no filter backdrop of the sunrise and Durham Cathedral.
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
