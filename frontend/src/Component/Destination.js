//import { useState } from 'react'
import "../Component/Styles/Destination.css"
import { Link } from "react-router-dom";
import { destination,destination2 } from "./images";
function App() {
  
    return (
        <>
            <div className="main">
                <div id="accordian">

                    <div id='collapseone' data-bs-parent='#accordian' className="collapse show">
                        <br />
                        <div className="row w-100">
                            <div className="col-md">
                                <h1>North India Travel Guied</h1>
                                <br/>
                                <span>Ostensibly whimsical wandering lead the travellers to the northern destinations of India where there exists copious Himalayan Mountains, offbeat places, pilgrimage sites, famous cities and age-old sandstone creations. The places in this northern region can astound you by their cultural extravaganza, architectural marvels and local cuisine, all so different from each other yet sharing the same region.</span>
                            </div>
                            <div className="col-md">
                                <img src={destination[0]} alt="Ranthan" className="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>

                    <div id='collapsetwo' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <div className="row w-100">
                            <div className="col-md">
                                <h1>South India Travel Guied</h1>
                                <br/>
                                <span>South India reminds you of places you wished to see in your dreams. 
                                    Pristine beaches, vast stretch of ocean, high hills of the Western Ghats and centuries old history. 
                                    Nothing disappoints you on your journey to the south. Walking down a road with trees on both sides on a sunny morning, the journey itself is as beautiful as the destination.
                                    Magnificent rock-cut cave temples depict stories of the ancient Dravidians.</span>
                            </div>
                            <div className="col-md">
                                <img src={destination[6]} alt="Ranthan" className="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>

                    <div id='collapsethird' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <div className="row w-100">
                            <div className="col-md">
                                <h1>West India Travel Guied</h1>
                                <br/>
                                <span>West India is a land of distinct cultures, lifestyles, landscapes and history. 
                                    What does a wanderer truly desire? Is it just a vacation? Or is it a need to get lost, 
                                    and be found? The western part of India is blessed with scenic views, long coastlines, 
                                    magnificent religious centres and a truck-load of hospitality, making it one of the most popular travel destinations in India.</span>
                            </div>
                            <div className="col-md">
                                <img src={destination[12]} alt="Ranthan" className="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>

                    <div id='collapsefour' data-bs-parent='#accordian' className="collapse p-3">
                        <br />
                        <h1 className="text-center">East India Travel Guide</h1><br/>
                        <div className="row w-100">
                            <div className="col-md">
                                <p>Eastern Zone of India is rich in Cultural Heritage. You can have a taste of beaches, temples, monastries, buddhist circuit with a rural touch.</p>
                                <p>Most Popular tourist destinations for this region are, Calcutta, Former Captal of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling etc.</p>
                                <p>In no time at all the stimulating bustle and heat of Calcutta is left far behind, opening out to the cool and luscious mountains of refreshing Darjeeling. Encounter the mighty range of the Himalayas in Sikkim, the one-horned 
                                    rhinoceros in wonderful wildlife reserves, then dream of a forgotten age in the ancient holy towns on the plains of rural India.</p>
                            </div>
                            <div className="col-md">
                                <p>Discover the Soul of Calcutta Calcutta is the largest city in India, indeed one of the largest in the world. Established as a British trading post in the 17th century, the city rapidly grew, acquiring a life and vibrancy of its own. Its glory is still reflected in the buildings of Chowringhee and Clive Street, know as Jawaharlal Nehru Road and Netaji Subhash Road respectively. It is a city which leaves no-one indifferent-fascinating, effervescent, teeming with life, peoples, cultures. The impact can be a shock at first; the rickshaws, cars, brightly painted lorries, trolley buses, the cries of the street vendors, labourers hard at work on the construction of the vast underground railway, the noise and colour of the huge New Market, the bustle of the crowds...but soon the jumbled impressions will sort themselves out.</p>
                            </div>
                        </div>
                    </div>

                        <div className="buttons-2">
                            <Link className='button2 btn ' to='#collapseone' data-bs-toggle="collapse">North India</Link>
                            <Link className='button2 btn collapsed' to='#collapsetwo' data-bs-toggle='collapse'>South India</Link>
                            <Link className='button2 btn collapsed' to='#collapsethird' data-bs-toggle='collapse'>West India</Link>
                            <Link className='button2 btn collapsed' to='#collapsefour' data-bs-toggle='collapse'>East India</Link>
                            <Link className='button2 btn collapsed' to='/Foregin'>India Tour Packages</Link>
                        </div>

                    <div id='collapseone' data-bs-parent='#accordian' className="collapse show">
                        <br />
                        <h4>About North India Tourism</h4>
                        <p>North India is like a set of thali that has every desirable element to satisfy your taste buds. 
                            From the poetic beauty of Kashmir to the royal grandeur of Rajasthan. 
                            From the purest symbol of love, Taj Mahal to the holiest of all rivers, the Ganges. 
                            North India is a treasure trove of vast nature, authentic culture and an array of experiences filled with serenity.
                            Exceptionally blessed with a diverse landscape, it has a rich cultural heritage that leaves you overwhelmed. 
                            North India comprises Jammu & Kashmir, Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan, Himachal Pradesh and Uttarakhand. 
                            People explore the northern part of India for its diversity and to get a chance to escape from the monotonous circle of citylife. Explorers from all over the world are mesmerized by the might of the Himalayas and the holiness of River Ganges. 
                            Completely awed with the Great Indian Desert and finding themselves in the ancient city of Varanasi, North India is one of the best travel experiences of the world.</p>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                            <div className="row w-100">
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[1]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">8 Nights - 9 Days</span><br/>
                                            <p>Golden Tringle Tour With Ranthanmbore</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[2]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">11 Nights - 12 Days</span><br/>
                                            <p>Adi Kedarnath Trekking Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[3]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">5 Nights - 6 Days</span><br/>
                                            <p>Best of Kasmir Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[4]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">11 Nights - 12 Days</span><br/>
                                            <p>Chardham Yatra Pigrimage Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[5]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">4 Nights - 5 Days</span><br/>
                                            <p>Nainital Jim Corbett National Park Tour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id='collapsetwo' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <h4>About South India Tourism</h4>
                        <p>South India comprises Andhra Pradesh, Karnataka, Tamil Nadu, Kerala, Telangana and the Union Territories of Lakshadweep, Andaman and Nicobar Islands and Puducherry. 
                            Lush green tea and coffee plantations on the slopes with a backdrop of different hues of blue sky fill your heart with solace. 
                            Not to forget the magnificent examples of Dravidian style of architectural brilliance such as the temples of Mahabalipuram, Hampi and Chola Temple among many others. 
                            South India is a treasure trove of peace, scenic views, nature’s bliss and ancient history of India’s glory.
                            Thus, making it one of the best travel destinations in India.</p>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                            <div className="row w-100">
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[7]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">4 Nights - 5 Days</span><br/>
                                            <p>Bangalore Mysore Ooty Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[8]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">5 Nights - 7 Days</span><br/>
                                            <p>Best of Kerala Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[9]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">5 Nights - 6 Days</span><br/>
                                            <p>Best of Kasmir Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[10]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">11 Nights - 12 Days</span><br/>
                                            <p>Chardham Yatra Pigrimage Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination[11]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">4 Nights - 5 Days</span><br/>
                                            <p>Nainital Jim Corbett National Park Tour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id='collapsethird' data-bs-parent='#accordian' className="collapse">
                        <br />
                        <h4>About Western India Tourism</h4>
                        <p>From the hippie culture of Goa to the vibrant and responsible outlook of Gujarat, a tour to this part of India will lead you to a worthy spot at every corner. The hustle life of the financial capital of the country, 
                            Mumbai to the laid-back journey to the union territories of Daman and Diu and Dadra and Nagar Haveli, each day of your vacation will be like a day spent in heaven!</p>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                            <div className="row w-100">
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[0]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">12 Nights - 13 Days</span><br/>
                                            <p>Classic Gujarat Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[1]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">6 Nights - 7 Days</span><br/>
                                            <p>Best Of Maharastra Hill Station Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[2]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">5 Nights - 6 Days</span><br/>
                                            <p>Best of Kasmir Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[3]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">11 Nights - 12 Days</span><br/>
                                            <p>Chardham Yatra Pigrimage Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[4]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div>
                                            <br/>
                                            <span className="text-secondary">4 Nights - 5 Days</span><br/>
                                            <p>Nainital Jim Corbett National Park Tour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='collapsefour' data-bs-parent='#accordian' className="collapse mt-5">

                        
                        <br />
                        <h4>About East India Tourism</h4>
                        <p>Eastern Zone of India is rich in Cultural Heritage. You can have a taste of beaches, temples, monastries, buddhist circuit with a rural touch.
                            Most Popular tourist destinations for this region are, Calcutta, Former Captal of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, 
                            Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling etc.</p>
                        <br/>
                        <hr/>
                        <div className="packages-tour">
                            <div className="row w-100">
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[5]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div className="p-3">
                                            <br/>
                                            <span className="text-secondary">6 Nights - 07 Days</span><br/>
                                            <p>Eastern Mystery Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[6]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div className="p-3">
                                            <br/>
                                            <span className="text-secondary">15 Nights - 16 Days</span><br/>
                                            <p>Assam & Arunachal Pradesh Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[7]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div className="p-3">
                                            <br/>
                                            <span className="text-secondary">5 Nights - 6 Days</span><br/>
                                            <p>Best of Kasmir Tour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="pack">
                                        <img src={destination2[8]} alt="Ranthambore" className="img-fluid mx-auto d-block" />
                                        <div className="one1">
                                            <button href="" className="btn btn-danger">View Packages</button>
                                        </div>
                                        <div className="p-3">
                                            <br/>
                                            <span className="text-secondary">11 Nights - 12 Days</span><br/>
                                            <p>Chardham Yatra Pigrimage Tour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    );
}

export default App;