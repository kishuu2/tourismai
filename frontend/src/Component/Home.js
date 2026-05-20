import React, { useEffect, useState } from 'react'
import video from '../images/Home-first.mp4';
import video1 from '../images/Home-sec.mp4';
import './Home.css';
import { imagedata } from './images';
import axios from 'axios';
import { Link } from "react-router-dom";
import iconsdata from './icon';

const Home = () => {

  function pre() {
    const left = document.querySelector(".normal-home-1");
    left.scrollBy(-400, 0);
  }

  function next() {
    const right = document.querySelector(".normal-home-1");
    right.scrollBy(400, 0);
  }

  function pre1() {
    const left = document.querySelector(".content-2");
    left.scrollBy(-150, 0);
    left.scroll({ behavior: "smooth" });
  }

  function next1() {
    const right = document.querySelector(".content-2");
    right.scrollBy(150, 0);
    right.scroll({ behavior: "smooth" });
  }

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios.get('https://tourismai-9wfg.onrender.com/displaypackage')
      .then(response => { setPackages(response.data); })
      .catch(err => { console.error('Error fetching packages:', err.message); })
  }, [])

  // ===== AI DESTINATION FINDER STATE =====
  const [aiBudget, setAiBudget] = useState('');
  const [aiTravelType, setAiTravelType] = useState('');
  const [aiDuration, setAiDuration] = useState('');
  const [aiFamily, setAiFamily] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResults, setAiResults] = useState([]);
  const [aiError, setAiError] = useState('');
  const [aiAsked, setAiAsked] = useState(false);

  const handleAiFind = async () => {

    if (!aiBudget || !aiTravelType || !aiDuration || !aiFamily) {

      setAiError('All fields are required!');
      return;
    }

    try {

      setAiError('');
      setAiLoading(true);
      setAiResults([]);
      setAiAsked(true);

      const response = await axios.post(
        'https://tourismaiservice.onrender.com/recommend',
        {
          budget: aiBudget,
          travelType: aiTravelType,
          duration: aiDuration,
          family: aiFamily
        }
      );
      console.log(response.data);
      setAiResults(response.data);

    } catch (err) {

      console.log(err);

      setAiError('Recommendation fetch karne me issue aaya');

    } finally {

      setAiLoading(false);

    }
  };

  const handleAiClear = () => {
    setAiBudget(''); setAiTravelType('');
    setAiDuration(''); setAiFamily('');
    setAiResults([]); setAiError('');
    setAiAsked(false);
  };

  const matchColor = (score) => {
    if (score >= 90) return '#2e7d32';
    if (score >= 75) return '#f57f17';
    return '#c62828';
  };

  return (
    <>

      <div className="first-main">
        <video src={video} autoPlay loop muted width="100%" className='video1'></video>
        <div className="content">
          <div className="c-1">
            <h1 id='home-welcome'>Let us plan you a
              perfect <span id='onece'>Indian Holiday.</span></h1>
            <p>Tourism in India has shown a phenomenal growth in the past decade. One of the reasons is that the Ministry of tourism, India has realized the immense potential of tourism in India during vacations. <br />
              <br />India tourism with its foggy hill stations, captivating beaches, historical monuments, golden deserts, serene backwaters, pilgrimage sites, rich wildlife, and colourful fairs capture the heart of every tourist. <span id='an'> In addition, a variety of festivals, lively markets,vibrant lifestyle, and traditional Indian hospitality, will make your experience as an india tourist truly unforgettable and fantastic.</span></p>
          </div>
          <div className="normal-home">
            <div className="normal-home-1">
              <div className="one">
                <div className="one-in">
                  <div className="one-in-on">
                    <span id='wildlife'>Wildlife</span>
                    <span id='package'>70 + Packages</span>
                  </div>
                  <div className="one-in-icon">
                    <img src={iconsdata[0]} alt="wild-life" className='img-fluid d-block mx-auto' />
                  </div>
                </div>
                <br />
                <div className="images2">
                  <img src={imagedata[0]} className='img-fluid img-1 mx-auto d-block' alt="Wild-life" />
                </div>
              </div>

              <div className="one">
                <div className="one-in">
                  <div className="one-in-on">
                    <span id='wildlife'>Heritage</span>
                    <span id='package'>25 + Packages</span>
                  </div>
                  <div className="one-in-icon">
                    <img src={iconsdata[1]} alt="wild-life" className='img-fluid d-block mx-auto' />
                  </div>
                </div>
                <br />
                <div className="images2">
                  <img src={imagedata[1]} className='img-fluid img-1 mx-auto d-block' alt="Wild-life" />
                </div>
              </div>

              <div className="one">
                <div className="one-in">
                  <div className="one-in-on">
                    <span id='wildlife'>Trecking</span>
                    <span id='package'>70 + Packages</span>
                  </div>
                  <div className="one-in-icon">
                    <img src={iconsdata[3]} alt="wild-life" className='img-fluid d-block mx-auto' />
                  </div>
                </div>
                <br />
                <div className="images2">
                  <img src={imagedata[2]} className='img-fluid img-1 mx-auto d-block' alt="Wild-life" />
                </div>
              </div>

              <div className="one">
                <div className="one-in">
                  <div className="one-in-on">
                    <span id='wildlife'>Pilgrimage</span>
                    <span id='package'>65 + Packages</span>
                  </div>
                  <div className="one-in-icon">
                    <img src={iconsdata[2]} alt="wild-life" className='img-fluid d-block mx-auto' />
                  </div>
                </div>
                <br />
                <div className="images2">
                  <img src={imagedata[3]} className='img-fluid img-1 mx-auto d-block' alt="Wild-life" />
                </div>
              </div>

              <div className="one">
                <div className="one-in">
                  <div className="one-in-on">
                    <span id='wildlife'>Hill Station</span>
                    <span id='package'>25 + Packages</span>
                  </div>
                  <div className="one-in-icon">
                    <img src={iconsdata[4]} alt="wild-life" className='img-fluid d-block mx-auto' />
                  </div>
                </div>
                <br />
                <div className="images2">
                  <img src={imagedata[4]} className='img-fluid img-1 mx-auto d-block' alt="Wild-life" />
                </div>
              </div>

              <div className="one">
                <div className="one-in">
                  <div className="one-in-on">
                    <span id='wildlife'>Beach Tour</span>
                    <span id='package'>25 + Packages</span>
                  </div>
                  <div className="one-in-icon">
                    <img src={iconsdata[5]} alt="wild-life" className='img-fluid d-block mx-auto' />
                  </div>
                </div>
                <br />
                <div className="images2">
                  <img src={imagedata[5]} className='img-fluid img-1 mx-auto d-block' alt="Wild-life" />
                </div>
              </div>
            </div>

            <div className="buttons">
              <button type='button' onClick={pre} id='btn-ic' className='previous rounded-3 btn btn-outline-primary w-100 border-2 border-secondary'>
                <span>Previous</span>
              </button>
              <button type='button' onClick={next} id='btn-ic' className='next rounded-3 btn btn-outline-primary w-100 border-2 border-secondary'>
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="second-main">
        <div className="back-2 p-4">
          <h3 id='india-guide' className='text-center'>Tourism Guide</h3>
          <div className="packages">
            {
              packages.map((pkg) => {
                return <Link to="/Foregin" className="one-pa" key={pkg._id || pkg.name}>
                  <p id='holiday-pa'>{pkg.name}</p>
                  <div className="pac-1">
                    <div className="1-pack">
                      <span id='pa-2'>Starting from ₹ {pkg.price}</span><br />
                      <span id='pa-2'>{pkg.nights} NIIGHT, {pkg.days} DAYS</span>
                    </div>
                    <div className="pack-logo">
                      <img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG-Photo.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                      <img src="https://icon-library.com/images/meal-icon-png/meal-icon-png-19.jpg" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                      <img src="https://cdn1.iconfinder.com/data/icons/adventure-42/100/adventure-39-512.png" alt="first-logo" className='img-fluid mx-auto d-block logo-1' />
                      <img src="https://th.bing.com/th/id/R.35688fa58bc6cdbecd6f08d67e3911f5?rik=owQ0MTKW5Mx2fQ&riu=http%3a%2f%2fwww.downloadclipart.net%2fmedium%2f8476-four-wheel-drive-road-black-clip-art.png&ehk=x%2beAU6ZP43%2f5e%2bCPyYulJ2gO81MxB6RLJjc4Wc6I9K0%3d&risl=&pid=ImgRaw&r=0" alt="first-logo" className='img-fluid logo-1 mx-auto d-block' />
                    </div>
                  </div><br />
                  <div className="down-pc">
                    <span>RATE PER PERSON ON TWIN SHARING</span>
                  </div>
                </Link>
              })
            }
          </div>
        </div>
      </div>
      <hr />

      <div className="ai-finder-section">
        <div className="ai-finder-bg"></div>
        <div className="ai-finder-inner">

          {/* Header */}
          <div className="ai-finder-header">
            <span className="ai-badge">✦ AI Powered</span>
            <h2 className="ai-finder-title">
              Not Sure Where to Go?
              <span className="ai-title-accent"> Let AI Decide.</span>
            </h2>
            <p className="ai-finder-sub">
              Fill in 4 quick details — our AI recommends your perfect top destinations instantly.
            </p>
          </div>

          {/* Input Card */}
          <div className="ai-input-card">
            <div className="ai-input-grid">

              <div className="ai-field">
                <label className="ai-label">
                  <span className="ai-label-icon"></span> Budget
                </label>
                <select className="ai-select" value={aiBudget} onChange={e => setAiBudget(e.target.value)}>
                  <option value="">Select budget...</option>
                  <option value="Low">Low Budget</option>
                  <option value="Medium">Medium Budget</option>
                  <option value="High">High Budget</option>
                </select>
              </div>

              <div className="ai-field">
                <label className="ai-label">
                  <span className="ai-label-icon"></span> Travel Type
                </label>
                <select className="ai-select" value={aiTravelType} onChange={e => setAiTravelType(e.target.value)}>
                  <option value="">Select type...</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Historical / Heritage">Historical / Heritage</option>
                  <option value="Spiritual / Pilgrimage">Spiritual / Pilgrimage</option>
                  <option value="Beach & Coastal">Beach & Coastal</option>
                  <option value="Hill Station & Nature">Hill Station & Nature</option>
                  <option value="Wildlife Safari">Wildlife Safari</option>
                </select>
              </div>

              <div className="ai-field">
                <label className="ai-label">
                  <span className="ai-label-icon"></span> Duration (Days)
                </label>
                <input
                  type="number"
                  className="ai-input-field"
                  placeholder="e.g. 5"
                  min="1"
                  max="30"
                  value={aiDuration}
                  onChange={e => setAiDuration(e.target.value)}
                />
              </div>

              <div className="ai-field">
                <label className="ai-label">
                  <span className="ai-label-icon"></span> Family Friendly
                </label>

                <select
                  className="ai-select"
                  value={aiFamily}
                  onChange={e => setAiFamily(e.target.value)}
                >
                  <option value="">Select option...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

            </div>

            {aiError && <p className="ai-error">⚠️ {aiError}</p>}

            <div className="ai-btn-row">
              <button className="ai-btn-main" onClick={handleAiFind} disabled={aiLoading}>
                {aiLoading ? (
                  <span className="ai-loading-text">
                    <span className="ai-spinner"></span> AI Analyzing...
                  </span>
                ) : '✦ Find My Destination'}
              </button>
              {aiAsked && (
                <button className="ai-btn-clear" onClick={handleAiClear}>Reset</button>
              )}
            </div>
          </div>

          {/* Shimmer loading */}
          {aiLoading && (
            <div className="ai-shimmer-grid">
              {[1, 2, 3].map(i => (
                <div key={i} className="ai-shimmer-card">
                  <div className="shimmer-line wide"></div>
                  <div className="shimmer-line medium"></div>
                  <div className="shimmer-line short"></div>
                  <div className="shimmer-line medium"></div>
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          {aiResults.length > 0 && !aiLoading && (
            <>
              <div className="ai-results-label">
                ✦ AI Recommended Top Destinations for You (Based on KNN Algorithm).
              </div>

              <div className="ai-results-grid">

                {aiResults.map((dest, index) => (

                  <div
                    key={index}
                    className={`ai-result-card ${index === 0 ? 'top-pick' : ''}`}
                  >

                    {index === 0 && (
                      <div className="top-pick-badge">
                        Best Match
                      </div>
                    )}

                    <div className="result-rank">
                      #{index + 1}
                    </div>

                    <h3 className="result-name">
                      {dest.name}
                    </h3>

                    <div className="result-match-bar">

                      <div
                        className="match-bar-fill"
                        style={{
                          width: `${dest.match_score}%`,
                          background: matchColor(dest.match_score)
                        }}
                      ></div>

                    </div>

                    <span
                      className="match-score-text"
                      style={{
                        color: matchColor(dest.match_score)
                      }}
                    >
                      {dest.match_score}% Match
                    </span>

                    <div className="result-meta">

                      <span className="meta-chip">
                        🕐 {dest.best_season}
                      </span>

                      <span className="meta-chip">
                        💸 ₹{dest.estimated_cost}
                      </span>

                    </div>

                    <div className="result-best-for">

                      <strong>Description:</strong>

                      <p>
                        {dest.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>
            </>
          )}

        </div>
      </div>
      {/* ===================== AI SECTION END ===================== */}
      <hr />

      <div className="third-main">
        <div className="top-third">
          <h2>Explore To Destinations by Region</h2>
          <div id='accordian'>
            <div className="buttons-2">
              <Link className='btn btn-outline-secondary b-2' to='#collapseone' data-bs-toggle="collapse">North India</Link>
              <Link className='btn btn-outline-secondary b-2 collapsed' to='#collapsetwo' data-bs-toggle='collapse'>South India</Link>
              <Link className='btn btn-outline-secondary b-2 collapsed' to='#collapsethird' data-bs-toggle='collapse'>East India</Link>
              <Link className='btn btn-outline-secondary b-2 collapsed' to='#collapsefour' data-bs-toggle='collapse'>West India</Link>
              <Link className='btn btn-outline-secondary b-2 collapsed' to='#collapsefive' data-bs-toggle='collapse'>Central India</Link>
            </div>
            <div className="contents">
              <div id='collapseone' data-bs-parent='#accordian' className="collapse show">
                <br />
                <div className="con-1 row gap-2">
                  <div className="con-in col-md">
                    <div className="textup">
                      <img src="https://backiee.com/static/wpdb/wallpapers/v2/1920x1080/349041.jpg" alt="uttrakhand" className='img-fluid b-4 mx-auto d-block w-100' />
                      <div className="text0"><strong>Uttarakhand</strong><p id='pac-1'>50+ PACKAGES</p></div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="con-in-3">
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/1905949.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Rajasthan</strong><p id='pac-1'>30+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://i.pinimg.com/originals/73/e5/62/73e56200b82270e34759fe8942c834bf.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Himachal</strong><p id='pac-1'>60+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://www.tourmyindia.com/states/jammu-kashmir/image/jummu-kashmir-banner.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Jammu & Kashmir</strong><p id='pac-1'>30+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/8207012.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Uttar Pradesh</strong><p id='pac-1'>25+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://i1.wp.com/agrasar.co/wp-content/uploads/2015/03/indian-how-5049.jpg?fit=1200%2C846" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Delhi</strong><p id='pac-1'>20+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpapercave.com/wp/wp4527562.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Ladakh</strong><p id='pac-1'>25+ PACKAGES</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='collapsetwo' data-bs-parent='#accordian' className="collapse">
                <br />
                <div className="con-1 row gap-2">
                  <div className="con-in col-md">
                    <div className="textup">
                      <img src="https://wallpapercave.com/wp/wp2649841.jpg" alt="uttrakhand" className='img-fluid b-4 mx-auto d-block w-100' />
                      <div className="text0"><strong>Kerala</strong><p id='pac-1'>40+ PACKAGES</p></div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="con-in-3">
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/1982096.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Kernatak</strong><p id='pac-1'>25+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpapercave.com/wp/wp2134499.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Tamil nadu</strong><p id='pac-1'>20+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://c0.wallpaperflare.com/preview/186/681/90/india-andaman-and-nicobar-islands.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Andaman</strong><p id='pac-1'>15+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://static.toiimg.com/thumb/msid-99391910,width-1070,height-580,resizemode-75/99391910,pt-32,y_pad-40/99391910.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Puduchery</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://3.bp.blogspot.com/-E3fiFORc5I0/VKaKzBw9mJI/AAAAAAAAGoM/m13w2AYCKjE/s1600/lepakshi-temple-nanthapur.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Andhra pradesh</strong><p id='pac-1'>15+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/10698914.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Talangana</strong><p id='pac-1'>25+ PACKAGES</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='collapsethird' data-bs-parent='#accordian' className="collapse">
                <br />
                <div className="con-1 row gap-2">
                  <div className="con-in col-md">
                    <div className="textup">
                      <img src="https://wallpaperaccess.com/full/4268745.jpg" alt="uttrakhand" className='img-fluid b-4 mx-auto d-block w-100' />
                      <div className="text0"><strong>Sikkim</strong><p id='pac-1'>40+ PACKAGES</p></div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="con-in-3">
                      <div className="textup">
                        <img src="https://www.tourmyindia.com/states/arunachalpradesh/images/explore-arunachal1.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Arunachal</strong><p id='pac-1'>30+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://media.instamojo.com/imgs/76aea4fd0d4c4f0fa196d2ffab1d61b3.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Meghayal</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180629170019/Dzukou-Valley-1-1920x1253.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Nagalend</strong><p id='pac-1'>15+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/8055160.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Asam</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://w0.peakpx.com/wallpaper/346/54/HD-wallpaper-west-bengal-west-bengal-stock.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>West Bengal</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://imgs.search.brave.com/exwIkg0hIn1BbCsNr4g5Dnx532T-491qUl9YEppUgD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc4/NzU3MjQzL3Bob3Rv/L2FuY2llbnQtaW5k/aWFuLXRlbXBsZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SjhKT0Roajg2SW5k/d3BlaXptZm1NUVNX/UXdSSFlaOTh3cldV/SW9keGJJRT0" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Odisha</strong><p id='pac-1'>20+ PACKAGES</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='collapsefour' data-bs-parent='#accordian' className="collapse">
                <br />
                <div className="con-1 row gap-2">
                  <div className="con-in col-md">
                    <div className="textup">
                      <img src="https://wallpaperaccess.com/full/3068304.jpg" alt="uttrakhand" className='img-fluid b-4 mx-auto d-block w-100' />
                      <div className="text0"><strong>Goa</strong><p id='pac-1'>15+ PACKAGES</p></div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="con-in-3">
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/3461253.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Gujarat</strong><p id='pac-1'>30+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/2012219.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Maharastra</strong><p id='pac-1'>20+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://static.wixstatic.com/media/1d0691_53e39815df574eb99d6998f27ae385d6~mv2.jpg/v1/fill/w_970,h_606,al_c,q_85,enc_auto/daman%201.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Daman & Diu</strong><p id='pac-1'>5+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://i.pinimg.com/736x/57/22/cc/5722cc24a89a15562984d87e2dc393e2--union-territory-india.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Dadra & Nagar haveli</strong><p id='pac-1'>5+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://nationalparks-15bc7.kxcdn.com/images/parks/gir-forest/Gir%20National%20Park.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Gir National Park</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpapercave.com/wp/wp8260247.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Pune</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='collapsefive' data-bs-parent='#accordian' className="collapse">
                <br />
                <div className="con-1 row gap-2">
                  <div className="con-in col-md">
                    <div className="textup">
                      <img src="https://wallpapercave.com/wp/wp4319089.jpg" alt="uttrakhand" className='img-fluid b-4 mx-auto d-block w-100' />
                      <div className="text0"><strong>Madhya Pradesh</strong><p id='pac-1'>30+ PACKAGES</p></div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="con-in-3">
                      <div className="textup">
                        <img src="https://external-preview.redd.it/mm5rGbS8ErWb38bJ7RXImQLMat-QCz6_Ial5ZYYlNf4.jpg?width=1200&height=628.272251309&auto=webp&s=8d17565115b516aa5d29b97bfb2d068476ea154e" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Chattishgarh</strong><p id='pac-1'>5+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://www.india-a2z.com/images/Kanha-National-Park.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Kanha National Park</strong><p id='pac-1'>15+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/11114526.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Khajuraho</strong><p id='pac-1'>10+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://thewildlifetour.com/wp-content/uploads/2021/03/HAR5909-Edit-1-1200x857.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Bandhavgarh</strong><p id='pac-1'>15+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://wallpaperaccess.com/full/9414397.jpg" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Bhopal</strong><p id='pac-1'>20+ PACKAGES</p></div>
                      </div>
                      <div className="textup">
                        <img src="https://static.toiimg.com/photo/msid-94055833,width-96,height-65.cms" alt="uttrakhand" className='img-fluid mx-auto d-block b-3' />
                        <div className="text1"><strong>Ujjain</strong><p id='pac-1'>15+ PACKAGES</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="third-main">
        <div className="top-third">
          <h2>Top Trending Destinations</h2>
          <div className="content-2">
            <div className="one3">
              <div className="image-3"><img src="https://wallpapercave.com/wp/wp6674218.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>50+ Packages</span><br /><strong>Uttarakhand</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://wallpaperaccess.com/full/1635218.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>40+ Packages</span><br /><strong>Kerala</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://i.pinimg.com/originals/1d/96/3f/1d963fca5164f248ec739f6020c9ead9.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>30+ Packages</span><br /><strong>Sikkim</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://wallpaperaccess.com/full/1478956.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>25+ Packages</span><br /><strong>Bhutan</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://image.winudf.com/v2/image1/Y29tLkhETmF0dXJld2FsbHBhcGVyLmJlYXV0aWZ1bG5hdHVyZXdhbGxwYXBlci5uYXR1cmViYWNrZ3JvdW5kd2FsbHBhcGVyX3NjcmVlbl80XzE1OTQxOTc0MzFfMDM0/screen-4.jpg?h=710&fakeurl=1&type=.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>10+ Packages</span><br /><strong>Thailand</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://wallpapercave.com/wp/wp4359132.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>10+ Packages</span><br /><strong>Srilanka</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://w0.peakpx.com/wallpaper/1009/911/HD-wallpaper-jodhpur-rajasthan-india.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>30+ Packages</span><br /><strong>Rajasthan</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://wallpaperaccess.com/full/1547054.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>30+ Packages</span><br /><strong>Jammu & Kasmir</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://wallpaperbat.com/img/867323-ladakh-picture.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>25+ Packages</span><br /><strong>Ladakh</strong></div>
            </div>
            <div className="one3">
              <div className="image-3"><img src="https://w0.peakpx.com/wallpaper/57/1020/HD-wallpaper-beautiful-maldives-islands-for-an-ideal-summer-getaway-times-of-india.jpg" className='img-fluid img-3 mx-auto d-block' alt="Trending" /></div>
              <div className="text-3 p-2"><span>5+ Packages</span><br /><strong>Maldives</strong></div>
            </div>
          </div>
          <div className="buttons-3">
            <button type='button' onClick={pre1} className='previous w-100 btn btn-outline-primary border border-2 rounded-3'><span>Previous</span></button>
            <button type='button' onClick={next1} className='next w-100 btn btn-outline-primary border border-2 rounded-3'><span>Next</span></button>
          </div>
        </div>
      </div>

      <div className="third-main w-100">
        <div className="top-third">
          <h2>Our Latest Travel Stories</h2>
          <div className="content-4">
            <div className="one-story">
              <div className="images"><img src="https://blog.getyourvenue.com/wp-content/uploads/2019/11/destination-wedding-rajasthan-1.jpg" alt="First" className='w-100 img-4 mx-auto d-block img-fluid' /></div>
              <div className="text-4"><span className='date'>July 12, 2024</span><h5>Top 20 Exootic Wedding Destination in India</h5></div>
            </div>
            <div className="one-story">
              <div className="images"><img src="https://wallpaperaccess.com/full/1905980.jpg" alt="Second" className='w-100 img-4 mx-auto d-block img-fluid' /></div>
              <div className="text-4"><span className='date'>July 9, 2024</span><h5>Autumn Tourism Season: 40 Best Places to Visit in October in India</h5></div>
            </div>
            <div className="one-story">
              <div className="images"><img src="https://wallpaperaccess.com/full/1635203.jpg" alt="Third" className='w-100 img-4 mx-auto d-block img-fluid' /></div>
              <div className="text-4"><span className='date'>July 8, 2024</span><h5>Top 10 Places to visit & Things to Do in Kumarakom, Kreala</h5></div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="third-main w-100">
        <div className="top-third">
          <div className="content-3">
            <div className="text-4">
              <h1>About Incredible India</h1>
              <p>Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography,
                and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds
                its way into the world tourism map as one of the finest destinations for a holistic vacation. India establishes
                its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a
                heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of
                monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different
                eras in the country.</p>
              <p>The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline;
                expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes;
                and scenic waterfalls pique the tourists' interest. Along with the best nature sightseeing tours,
                India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding
                and less-trodden trails give trekking tour opportunities in South Asia unlike any other.</p>
            </div>
            <div className="youtube">
              <video src={video1} autoPlay loop muted width="100%" className='rounded-5'></video>
            </div>
          </div>
        </div>
      </div>

      <div className="third-main w-100">
        <div className="top-third">
          <div className="content-3">
            <div className="climate">
              <h1>India Climate & Season</h1>
              <p>India experiences a diverse climate and weather conditions due to its vast size and geographical features.
                The country is characterized by five main seasons: Spring, Summer, Monsoon, Autumn, and Winter.
                The Summer season, from April to mid-June, brings scorching temperatures, especially in the northern plains.
                The Monsoon, from mid-June to September, brings heavy rainfall, crucial for agriculture.
                Winter, from November to February, varies from mild to severe cold, with snowfall in some regions.
                Autumn and Spring provide pleasant weather with moderate temperatures. India's climate is influenced by the
                Himalayas, oceans, and geographical variations, resulting in a rich and varied weather pattern</p>
              <div id='a2'>
                <div className="buttons-5">
                  <Link className='btn-7' data-bs-toggle="collapse" to="#collapse1">Summer</Link>
                  <Link className='btn-7 collapsed' data-bs-toggle="collapse" to="#collapse2">Monsoon</Link>
                  <Link className='btn-7 collapsed' data-bs-toggle="collapse" to="#collapse3">Winter</Link>
                </div>
                <div className="collapse show other-info" id='collapse1' data-bs-parent="#a2">
                  <img src="https://static.vecteezy.com/system/resources/previews/009/304/897/original/sun-icon-set-clipart-design-illustration-free-png.png" className='img-fluid mx-auto d-block logo-s' alt="summer" />
                  <p>India's Summer season spans from April to mid-June, bringing sweltering temperatures across the country,
                    particularly in the northern plains. During this time, the scorching heat can be intense, and people often seek
                    refuge in cooler places or use air conditioning to beat the heat. The temperature ranges between 40–45°C.</p>
                </div>
                <div className="collapse other-info" id='collapse2' data-bs-parent="#a2">
                  <img src="https://cdn4.iconfinder.com/data/icons/warning-caution-filled-line/2048/5569_-_Rain-512.png" className='img-fluid mx-auto d-block logo-s' alt="summer" />
                  <p>The Monsoon season in India is a vital climatic phenomenon that occurs from mid-June to September.
                    It brings much-needed rainfall to the subcontinent, essential for agriculture and water resources.
                    During this season, the country experiences heavy showers and occasional thunderstorms, cooling down
                    the scorching summer heat. The temperature range varies, but generally, it becomes more pleasant compared
                    to the summer season. The Monsoon season plays a crucial role in shaping India's landscape and economy.</p>
                </div>
                <div className="collapse other-info" id='collapse3' data-bs-parent="#a2">
                  <img src="https://images.vexels.com/media/users/3/240758/isolated/preview/c572c9f2d89445d9e1490a2367dda17e-snowflake-winter-icon.png" className='img-fluid mx-auto d-block logo-s' alt="summer" />
                  <p>The Winter season in India spans from November to February and varies in climate across regions.
                    In the northern parts, it can be quite cold, with temperatures dropping significantly,
                    especially in the Himalayas where snowfall occurs. This period is a popular tourist season in India,
                    attracting visitors to enjoy the pleasant weather and explore the snowy landscapes.
                    Winter offers a great opportunity for various winter sports and activities, making it a favorite destination
                    for both domestic and international tourists.</p>
                </div>
              </div>
            </div>
            <div className="visa">
              <h1>Visa Information</h1>
              <p>Obtaining a visa for India is an essential step for foreign travelers planning to visit the country.
                India offers various visa categories, including tourist visas, business visas, and e-visas.
                The tourist visa allows visitors to explore India's rich cultural heritage, historical sites, and natural beauty.
                The e-visa is a convenient option that allows travelers to apply for their visa online, streamlining the process
                and reducing the wait time. To apply for an India visa, travelers need to submit necessary documents, such as a
                valid passport, travel itinerary, and recent photographs. Planning ahead and adhering to the application guidelines
                ensure a smooth visa process for a memorable trip to India. For the latest information about getting a visa for India
                , visit the official website at <Link id='visa-info' to="https://indianvisaonline.gov.in/">https://indianvisaonline.gov.in/.</Link> </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home;