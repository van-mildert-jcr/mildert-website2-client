export const metadata = {
  title: "Sports",
  description: "Van Mildert College Sports"
}

export default function Sports() {
  //!DATA
  // Imagine some fetch request here
  const sports = [
    {
      id: 0,
      name: "cool sport",
      description: "this is a really cool sport",
      files: ["/assets/img/11.jpg", "/assets/img/img3.jpg"] //Files must be dynamically pulled from a search of the respective sport's folder
    }, {
      id: 1,
      name: "super sport",
      description: "this is a super cool sport",
      files: ["/assets/img/11.jpg", "/assets/img/img3.jpg"]
    }
  ]
  //!Dynamic Accordian
  let acordianContent: any[] = []
  sports.map((sport, index) => {
    let expand = ""
    let btn = ""
    let div = ""
    if (index == 0) {
      expand = "aria-expanded=\"true\""
      btn = "accordion-button"
      div = "accordion-collapse collapse show"
    } else {
      expand = "aria-expanded=\"false\""
      btn = "accordion-button collapsed"
      div = "accordion-collapse collapse"
    }
    acordianContent.push(<div className="accordion-item">
      <h2 className="accordion-header" id={"Header" + sport.id}>
        <button className={btn} type="button" data-bs-toggle="collapse"
          data-bs-target={"#Collapse" + sport.id}
          aria-controls={"Collapse" + sport.id}
        >
          {sport.name}
        </button>
      </h2 >
      <div id={"Collapse" + sport.id} className={div}
        aria-labelledby={"Header" + sport.id} data-bs-parent="#sportsAccordian" >
        <div className="accordion-body">
          <Gallery sport={sport}></Gallery>
          {sport.description}
        </div>
      </div>
    </div >)
  })
  //! Return Area
  return (
    <main>
      <div>
        <div style={{ padding: '100px 0px 100px', background: 'url(/assets/img/breadcrumbs/img2.jpg) no-repeat center center' }} className="mb-4">
          <h1>
            Get Involved!
          </h1>
          <p>
            It doesn’t matter how good at sport you are.<br />
            You can <span className="text-danger">always get involved!</span>
          </p>
        </div>
        <hr />
        <h2>ABOUT US</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center flex-column">
              <div className="p-2 bd-highlight">
                <h3 className="title-v3-md text-uppercase">
                  Wide Availability
                </h3>
                <p>
                  At Durham sport can form as large a part of your lifestyle as you like; one of the fantastic
                  things about the Collegiate System is the availability of sport to everyone - in fact 90% of
                  Durham Students play sport at some point during their time here. Mildert has over thirty
                  different teams covering a whole range of sports so there is sure to be a team for you - whether
                  male or female, novice or pro, first year or finalist.
                </p>
              </div>
              <div className="p-2 bd-highlight">
                <h3 className="title-v3-md text-uppercase">
                  Countless Opportunities
                </h3>
                <p>
                  Whether you were a schoolboy international, or reluctantly trudged to games each week at school,
                  there will be a sport for you. Unlike other universities, where you often have to be in the top
                  tier of athletes to compete for your university or face limited intra-mural matches, Durham
                  provides a complete inter-collegiate league system. Mildert is no slouch in the annual league
                  championship, regularly finishing in the top few colleges across a range of sports.
                </p>
              </div>
              <div className="p-2 bd-highlight">
                <h3 className="title-v3-md text-uppercase">
                  Fantastic Socials
                </h3>
                <p>
                  Many of the sports we participate in at Mildert will be familiar to you from school, some of
                  them may be new to you - the fantastic thing about sport at Mildert is you can take part in any
                  sport you choose and at a level you feel comfortable with. All sports teams have regular socials
                  where club members can mingle and get to know one another away from the sports fields; clubs
                  also do their bit for the Mildert community, the annual Rugby Strip for DUCK (the University
                  charities body) is just one example.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center flex-column">
            <div className="thumbnail-img">
              <img className="img-fluid col-md-12" src="/assets/img/masonry/footie.jpg" />
              <img className="img-fluid col-md-6" src="/assets/img/masonry/rugby.jpg" />
              <img className="img-fluid col-md-6" src="/assets/img/masonry/rugby2.jpg" />
            </div>
          </div>
        </div>
        <hr />
        <h2>Sports on offer through Van Mildert JCR</h2>
        <div className="accordion" id="sportsAccordian">
          {acordianContent}
        </div >
        <hr />
        <h2>University Sports</h2>
        <div className="row">
          <div className="col-md-4">
            <p>For those who wish to play at the elite level of sport, there could be no better place than Durham
              University. Durham finished second in the 2013-14 BUCS sports table, <a href="http://www.bucs.org.uk/homepage.asp">see the table here</a>, quite a feat!</p>
          </div>
          <div className="col-md-4">
            <img className="img-fluid img-bordered mb-4" src="/assets/img/main/img4.jpg" alt />
            <p>Team Durham provide an excellent environment to develop elite sport - there can be few better
              examples than Durham alumni Will Carling &amp; Will Greenwood, both former England rugby; Nasser
              Hussain, former England cricket captain; Johnathan Edwards, a former Mildertian and simultaneous
              Olympic, World, Commonwealth and European champion in triple jump; and Andrew Strauss, current
              England cricket captain. <a href="https://www.teamdurham.com/">The Team Durham website can be found
                here.</a></p>
          </div>
          <div className="col-md-4 mb-4">
            <img className="img-fluid img-bordered mb-4" src="/assets/img/main/sports.jpg" alt />
            <p>Facilities at Durham for both University and college level clubs are fantastic and are available for
              both University and College use. The athlete support structure is also extensive. Students can
              access a wide range of services including strength and conditioning, injury support, nutritional
              guidance and lifestyle management support.</p>
          </div>
        </div>
      </div >
    </main >
  )
}
type Sport = {
  id: number,
  name: string,
  description: string,
  files: string[]
}
function Gallery(props) {
  const sport: Sport = props.sport
  if (sport.files.length <= 0) return;
  let xcontent: any[] = []
  sport.files.map((file, fileIndex) => { xcontent.push(<button type="button" data-bs-target={"#carousel" + sport.id} data-bs-slide-to={fileIndex} className={fileIndex == 0 ? "active" : ""} aria-current={fileIndex == 0 && "true"} aria-label={"Slide " + fileIndex}></button >) })
  let moreContent: any[] = []
  sport.files.map((file, fileIndex) => {
    moreContent.push(
      <div className={fileIndex == 0 ? "carousel-item active" : "carousel-item"} >
        <img src={file} className="d-block w-100" alt="..." />
      </div>)
  })

  return (
    <><div id={"carousel" + sport.id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {xcontent}
      </div>
      <div className="carousel-inner">
        {moreContent}
      </div>
      <button className="carousel-control-prev" type="button"
        data-bs-target={"#carousel" + sport.id} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button"
        data-bs-target={"#carousel" + sport.id} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div><br />
    </>
  )
}