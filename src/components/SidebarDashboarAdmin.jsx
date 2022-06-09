import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function SidebarDashboard() {
    return (
        <nav id="sidebar" className="row">
            <div className="col-4 pl-4">
                <div className="row">
                    <div className="col-12 custom-pad">
                        <br/>
                        <div className="custom-logo m-auto"></div>
                    </div>
                    <div className="col-12 custom-pad">
                        <br/>
                        <div className="m-auto custom-parent-menu-active p-3">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faHouse} className="custom-size-aweseome"/><br/>
                                <Link to={"/dashboard-admin"} className="custom-font-1 text-white">Dashboard</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 custom-pad">
                        <br/>
                        <div className="m-auto">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faTruck} className="custom-size-aweseome"/><br/>
                                <Link to={"/list-car-admin"} className="custom-font-1 text-white">Cars</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-8 bg-white text-dark">
                <div className="row">
                    <div className="col-12 ml-5 custom-pad">
                        <br/>
                        <div className="custom-logos"></div>
                    </div>
                    <div className="col-12 custom-pad">
                        <br/><br/>
                        <div className="m-auto custom-mar">
                            <div className="text-left">
                                <h6 className="pl-3 custom-font-3">DASHBOARD</h6>
                                <div className="custom-menu-active mt-5">
                                    <p className="p-2 pl-3 font-weight-bold custom-font-3">Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
