import React, { Component } from 'react'
import nimg from '../Images/nimg.jpg';
import nimg2 from '../Images/nimg2.jpg';
import nimg3 from '../Images/nimg3.jpg';
import dk1 from '../Images/dk1.jpg';
import fimg from '../Images/fimg.jpg';
import mimg from '../Images/mimg.jpg'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="carouselExampleIndicators" className="carousel slide container"  style={{marginTop:'55px'}} data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img src={nimg2} className="d-block w-100" alt="..." height="350px" />
                            </div>
                            <div className="carousel-item">
                                <img src={nimg} className="d-block w-100" alt="..." height="350px" />
                            </div>
                            <div className="carousel-item">
                                <img src={nimg3} className="d-block w-100" alt="..." height="350px" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* <!-- first card --> */}
                    <div className="container my-4">
                        <div className="card mb-3" style={{ maxWidth: "840px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex align-items-center justify-content-center">
                                    <img src={fimg} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><u> <i>Our Facilities</i></u></h5>
                                        <h6 className="card-text">
                                            <ul>
                                                <li>Update you with latest global trending News.</li>
                                                <li>Include current topics of diffrent feilds like-sports,health,tech.,science,genral etc.</li>
                                                <li> <b><i><u></u> 100% free & Online.</i></b></li>
                                                <li> Helps you to enhance your news related Knowledge. </li>
                                                <li>simple,<b>accurate</b> and user friendly website.</li>
                                            </ul>
                                        </h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- second card --> */}
                        <div className="card mb-3 " style={{ maxWidth: "840px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 order-md-2 d-flex align-items-center justify-content-center">
                                    <img width='280' src={dk1} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body">
                                        <h5 className="card-title"><u> <i>Message from Admin</i></u></h5>
                                        <p className="card-text"> Hey guys ! <br/>this News website founded by <u><b>Mr.Dharmendra mandal</b>
                                        </u> Since aug 2022 .This will help you to enhance your news related Knowledge and update you with cuurent News.
                                        </p>
                                        <p>This website is design and its function is used to tackle modern challenges like it focus on Accurate News and Avaid fake News.
                                            I hope this Website helps you and i hope You will enjoy its features.<br />
                                            Thank You.



                                        </p>
                                        <h5><u> <i>Admin-Qualifications</i></u></h5>
                                        <ul>
                                            <li>completed Scooling from jawahar navodaya vidyalaya panna (M.P) with science stream.</li>
                                            <li>Earn bachlors degree from University of Allahabad with first division.</li>
                                            <li>completed specific courses on frontend technologies like- HTML5,CSS3,Java-Script and React-Js etc.</li>
                                            <li>10+ project Experiance with Pure HTML, CSS and Java-Script and React-js.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- third card --> */}
                        <div className="container my-4">
                            <div className="card mb-3" style={{ maxWidth: "840px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <img src={mimg} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title"><u> <i>Covered-Topics</i></u></h5>
                                            <h5 className="card-text">In this Website we Cover Approx All the topic like-</h5>                                          <ul>
                                              
                                                <li>Entertainment</li>
                                                <li>Health</li>
                                                <li>Sports</li>
                                                <li>Science</li>
                                                <li>Technology</li>
                                                <li>etc.</li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                   
                  
                </div>

            </div>
        )
    }
}
