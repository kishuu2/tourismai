import { Link } from "react-router-dom";
import "../Component/Styles/Interest.css"
import { destination,destination2 } from "./images";

export default function Interest() {
  return (
    <div className="main">
                <div id="accordian">

                    <div id='collapseone' data-bs-parent='#accordian' className="collapse show">
                        <br />
                        <div className="row w-100">
                            <img src="https://www.tourmyindia.com/hill_stations/assets/img/banner.webp" className="img-fluid mx-auto d-block"/>
                        </div>
                    </div>

                    <div id='collapsetwo' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <div className="row w-100">
                        <img src="https://www.tourmyindia.com/wildlife_sancturies/assets/img/banner.webp" className="img-fluid mx-auto d-block"/>
                        </div>
                    </div>

                    <div id='collapsethird' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <div className="row w-100">
                        <img src="https://www.tourmyindia.com/beaches/assets/beaches-img/beaches-banner.webp" className="img-fluid mx-auto d-block"/>
                        </div>
                    </div>

                    <div id='collapsefour' data-bs-parent='#accordian' className="collapse p-3">
                        <br />
                        <h1 className="text-center">East India Travel Guide</h1><br/>
                        <div className="row w-100">
                            <div className="col-md">
                                <h2 className="text-center">UNESCO World Heritage Sites in India</h2>
                                <p>India takes pride in flaunting its unsurpassed heritage; eras over eras have influenced, moulded and face lifted the rich heritage of which we all are part of. Distinctive edifices, perennial culture and the determination to keep 
                                    this incredibility have preserved for us an era no short of marvels. With a startling number of places and monuments enlisted in the list of UNESCO World Heritage Sites, India has made an indelible mark in world history.</p>
                                <p>The natural splendor maintaining its domain over many parts of the country boasts of magnificent 
                                    wildlife heritage. From the float of crocodiles at Sunderban National Park to the home of snow 
                                    leopards at Nanda Devi Biosphere Reserve, from the majestic Manas Wildlife Sanctuary to the 
                                    Keoladeo National Park and Kaziranga National Park, India humbly possess the most diverse heritage
                                     in the world. The lush flora and the tailored landscape around it has been the prime attraction in 
                                     the country, right from the red rhododendrons to the Neelakurinji, which bloom once every 12 years and from the moonscape Ladakh to the river island Majuli,
                                     the kaleidoscope of wildlife and natural heritage never ceases to amaze us in India.</p>
                            </div>
                            <div className="col-md">
                            <img src="https://www.tourmyindia.com/heritage/images/heritage.jpg" className="img-fluid mx-auto d-block"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                        <div className="buttons-2">
                            <Link className='button2 btn ' to='#collapseone' data-bs-toggle="collapse">Hill Station</Link>
                            <Link className='button2 btn collapsed' to='#collapsetwo' data-bs-toggle='collapse'>Wild Life</Link>
                            <Link className='button2 btn collapsed' to='#collapsethird' data-bs-toggle='collapse'>Beaches</Link>
                            <Link className='button2 btn collapsed' to='#collapsefour' data-bs-toggle='collapse'>Heritages</Link>
                            <Link className='button2 btn collapsed' to='/Foregin'>India Tour Packages</Link>
                        </div>

                    <div id='collapseone' data-bs-parent='#accordian' className="collapse show">
                        <br />
                        <div className="row p-5 w-100">
                            <div className="col-md text-danger">
                                <h1>Pamper Your Soul In charming Mountain Stations Of India</h1>
                                <br/>
                                <button className="btn btn-outline-danger p-2">Read More</button>
                            </div>
                            <div className="col-md">
                        <p>India offers the best hill station holiday experience in the world. 
                            The hill stations of India welcome you to refreshing vacations for your friends and family. 
                            Dotted with wildflowers in full bloom, vibrant green landscapes, apple orchards, waterfalls, and unadulterated mountain air, all these hill stations provide a pleasurable experience that you will remember for the rest of your life. Apart from relishing the magical creations of nature and scenic exquisiteness, one can soar 
                            high in the sky through mountaineering, trekking, camping, and paragliding amidst misty nature woods.</p>
                            </div>
                        </div>
                        
                        <br/>

                        <hr/>
                        <div className="packages-tour">
                            
                        </div>
                    </div>
                    
                    <div id='collapsetwo' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <div className="row p-5 w-100">
                            <div className="col-md text-danger">
                                <h1>Wildlife Sanctuaries & National Parks in India</h1>
                                <br/>
                                <button className="btn btn-outline-danger p-2">Read More</button>
                            </div>
                            <div className="col-md">
                        <p>The wildlife of India is diverse and its national parks and biosphere reserves are home to many endangered wildlife species like Royal Bengal Tigers and Red Panda, the vulnerable one-horned Rhinoceros and Snow Leopards, and critically endangered Great Indian Bustard, among many other species of flora and fauna. India boasts 104 national parks, 551 Wildlife Sanctuaries, 131 Marine Protected Areas, 18 Biosphere Reserves, 88 Conservation Reserves and 127 Community Reserves, covering a total of 1,65,088.57 sq km. In total, there are 870 Protected Areas which make 5.06% of the geographical area of the country.</p>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                           
                        </div>
                    </div>


                    <div id='collapsethird' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <div className="row p-5 w-100">
                            <div className="col-md text-danger">
                                <h1>Explore The Popular Beaches in India for a Refreshing Coastal Experience.</h1>
                                <br/>
                                <button className="btn btn-outline-danger p-2">Read More</button>
                            </div>
                            <div className="col-md">
                        <p>With over a 7500 km stretch of coastline in its geographical treasure, India has always been an alluring destination for refreshing holidays away from the hustle and bustle of metropolitan life. Especially if you love to explore the southern region of India, which is blessed with the beauty of sea, sun, and sand in full bloom, then it is obvious to enjoy incredible holidays in India. Giving tough competition to several seaside destinations worldwide, beaches in India are not only full of scenic allure but also possess all the ingredients from solitude to beach-party culture and from thrilling activities to world-class hotels and resorts. The honey glaze over the sea horizon during sunrise and sunset and the clear sky canopy over the blue waters create a magical panorama for honeymooners and romantic couples. Beach holidays in India are not only for newly-wed couples and family vacationers looking for a rejuvenating escape to spend their summer holidays, but they also equally fascinate adventure seekers. Wind surfing, kayaking, scuba diving, snorkeling, water skiing, canoeing, angling, and fishing are some of the adventure-filled activities that make beach tours in India more fruitful and mesmerizing</p>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                            
                        </div>
                    </div>

                    <div id='collapsefour' data-bs-parent='#accordian' className="collapse mt-5">

                        
                        <br />
                        <div className="row w-100">
                            <div className="col-md-4 text-danger">
                            <img src="https://www.tourmyindia.com/heritage/images/heritage1.jpg" className="img-fluid mx-auto d-block"/>
                        
                            </div>
                            <div className="col-md">
                        <p>The realm of culture among other form of heritage in India has amplified and grown manifold over the time. The cultural bank overwhelmed with creative aspects like art, music, dance and literature has been offering bonus pride to the country and countrymen. Right from the regional festivities to the national celebrations, culture seems to show off its mighty influence all through. On the other hand the tinges of crafts, religion, customs, traditions, beliefs, philosophy, history, health, medicine, travel, cuisine, monuments, literature, painting and languages can by no means be neglected as vital features that make the culture heritage of India rich and exceptional.</p>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                        <div className="row w-100">
                            <div className="col-md">
                            <p>With the shifts in ruling powers, India has become the thriving hub of multiple architectural marvels. From the world famous Taj Mahal to the creative genius Khajuraho temple, the power of architecture taste blended with the Indian culture and landscape has no equal. The bounty of beautifully sculptured temples like Sun Temple at Konark and the Brihdeeswar Temple at Thanjavur make them national treasures. Similarly, the majestically rock-cut Ellora Caves in Aurangabad and the Portuguese built Churches in Goa have a special place in the Indian heritage. While most of the architecture is well-documented, there are many relics that exist in all their glory without any recognition. Known or unknown, the wide and thriving Indian heritage in any respect has certainly received accolades from across the globe.</p>
                            
                            </div>
                            <div className="col-md-4">
                            <img src="https://www.tourmyindia.com/heritage/images/heritage2.jpg" className="img-fluid mx-auto d-block"/>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                
            </div>
  )
}
