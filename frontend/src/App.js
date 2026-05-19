import './App.css';
import Form from './Component/Form';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Home from './Component/Home';
import Destination from './Component/Destination';
import Foregin from './Component/Foregin';
import Registration from './Component/registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Component/Admin';

import UpdateManager from './Component/UpdateManager';
import Manager from './Component/manager';
import Interest from './Component/Interest';
import Details from './Component/Details';

export default function App() {
  
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
            <Route index element={<Home/>} ></Route>
            <Route path='Destination' element={<Destination/>}></Route>
            <Route path='Foregin' element={<Foregin/>}></Route>
            <Route path='About' element={<About/>}></Route>
            <Route path='Form' element={<Form/>}></Route>
            <Route path='Admin' element={<Admin/>}></Route>
            <Route path='Registration' element={<Registration/>}></Route>
            <Route path='UpdateManager' element={<UpdateManager/>}></Route>
            <Route path='Manager'  element={<Manager/>}></Route>
            <Route path='Interest' element={<Interest/>}></Route>
            <Route path='Details' element={<Details/>}></Route>
          </Route>
          
        </Routes>
        
    </BrowserRouter>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className='footer'>
          <footer className="text-center text-lg-start">
            <section>
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                    </svg> Diamond Developer
                    </h6>
                    <p>
                      Here It is Useful links and connect to our company and make sure you can enjoy your life.
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Packages</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Tourism Destination by Interest</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Adventure Tourism</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Pilgrimage Tourism</a>
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg> Prime Shopers, Vesu, Surat-395007</p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi me-2 bi-envelope-at-fill" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                    </svg>
                       chokwalakishan@gmail.com
                    </p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg> +91 6351119763</p>
                  </div>

                  <div className="col-md col-xl">
                    <div className='row gap-2'>
                      <div className='images col-md'>
                        <img src="https://imgs.search.brave.com/-gE85e5YA4YQLMGV0nFVqOvrTcv1u8Q6tn_nIxDsj_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMTIvTXVrdXJ0/aGktTmF0aW9uYWwt/UGFya18xM3RoLWRl/Yy5qcGc" alt="first" className='img-fluid mx-auto d-block one2'/>
                      </div>
                      <div className='images col-md'>
                        <img src="https://imgs.search.brave.com/GGuBXQz1ueX68pRA8ooeuaNBgEZKUxAPjo0o2F2cu68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDIvQmVrYWwuanBn" alt="first" className='img-fluid mx-auto d-block one2'/>
                      </div>
                      <div className="images col-md">
                      <img src="https://imgs.search.brave.com/bbFtq1WL0MATZZs_TJAemE4gokuXjU0l7fiu4lxRk3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzVl/MjFjNmJhM2FjMGM5/MTAxNTY0NGIxMD93/aWR0aD02MDAmZm9y/bWF0PWpwZWcmYXV0/bz13ZWJw" alt="first" className='img-fluid mx-auto d-block one2'/>
                      </div>
                    </div>
                    <br/>
                    <div className="row">
                      
                    </div>
                  </div>
                
                </div>
                
              </div>
            </section>
            

          
            <div className="text-center p-4">
             <span>© 2021 Copyright: </span>
               <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Diamond Developer</a>
            </div>
            
          </footer>
      </div>
    </>
  );
}

