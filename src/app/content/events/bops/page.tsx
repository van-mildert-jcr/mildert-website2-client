export const metadata = {
title:"BOPs",
description:"Van Mildert College BOPs"
}

export default function BopEvents() {
  return (
    <main>
      <div>
  <div style={{padding: '100px 0px 100px', background: 'url(https://via.placeholder.com/1108x320.png) no-repeat center center'}} className="mb-4">
    <h1>
      BOPs
    </h1>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        Bops transform the JCR into a massive themed party with special drinks, decorations ('decs') and
        entertainment ('ents') ranging from caricaturists to inflatables.
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        Past themes have included 'Space Bop: #outofthisworld', 'Under the Sea' and the legendary SHAG (Sexual
        Health Awareness Group) bop where the only dress code is pyjamas. The late licensing of the bar provides
        a great area to socialize before heading into Mildert's infamous silent disco.
      </p>
    </div>
    <div className="col-md-4">
      <img src="https://via.placeholder.com/354x429.png?text=Photo+Goes+Here" className="img-fluid" />
      <hr />
      <p>
        The fun of the bop continues even after the night's over, when the photo booth pictures are uploaded and
        you can see the questionable poses your squad made that night.
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
