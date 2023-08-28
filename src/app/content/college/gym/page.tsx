export const metadata = {
  title: "The Gym",
  description: "Van Mildert College Gym",
}

export default function Gym() {
  return (
    <main>
      <h1 className="mildert-page-heading mb-4">
        The Van Mildert Gym
      </h1>
      <img className="img-responsive img-bordered mx-auto d-block  mb-5" src="/mildertn/uploads/63.jpg" alt=""/>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <p className="lead">
            Bored of revision? Not sure what to do with yourself after exams? Get ready for summer and boost
            your mood by heading down to the gym!
            <br/>
            Containing thousands of pounds worth of equipment, including a variety of cardio machines, free
            weights, machines and flat-screen TVs, Mildert Gym is the best college gym in Durham!
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </main>
  )
}
