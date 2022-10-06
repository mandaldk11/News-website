import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- footer component start --> */}
                <footer className="container py-5" style={{backgroundColor:'#FCA510'}}>
                    <div className="row">
                        <div className="col-12 col-md">

                            <small className="d-block mb-3 ">www.News-App.com &copy; 2022-2023</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5><Link to="/">Home</Link></h5>
                            <ul className="list-unstyled text-small">
                                <li>Trending News</li>
                                <li>Multiple feature</li>
                                <li>Accurate News</li>
                                <li>100% Free</li>

                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5><Link to="/sports">Sports</Link></h5>
                            <ul className="list-unstyled text-small">
                                <li>Cricket</li>
                                <li>Football</li>
                                <li>Badminton</li>
                                <li>etc</li>

                            </ul>
                        </div>
                      
                        <div className="col-6 col-md">
                            <h5><Link to="/health">Health</Link></h5>
                            <ul className="list-unstyled text-small">
                                <li>Surgery</li>
                                <li>medical institue</li>
                                <li>Innovation</li>
                                <li>co-incidents</li>
                              
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5><Link to="/science">science</Link></h5>
                            <ul className="list-unstyled text-small">
                                <li>Space</li>
                                <li>Innovation</li>
                                <li>Search</li>
                                <li>discovery</li>
                              
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5><Link to="/technology">Technology</Link></h5>
                            <ul className="list-unstyled text-small">
                                <li>Machine</li>
                                <li>software</li>
                                <li>Methods</li>
                                <li>discovery</li>
                               
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5><Link to="/entertainment">Entertainment</Link></h5>
                            <ul className="list-unstyled text-small">
                                <li>Movies</li>
                                <li>Web series</li>
                                <li>Dramma</li>
                                <li>Live-Shows</li>
                                
                            </ul>
                        </div>


                    </div>
                </footer>
            </div>
        )
    }
}
