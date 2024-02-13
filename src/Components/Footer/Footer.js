import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <>
        <div className="container">
        <div className="row" style={{ marginTop: "50px" }}>
            <ul className="col-lg-3 col-md-4" style={{ listStyle: "none" }}>
                <h5 >Hobbycue</h5>
                <li>
                    <a>About Us</a>
                </li>
                <li>
                    <a>Our Services</a>
                </li>
                <li>
                    <a>Work with Us</a>
                </li>
                <li>
                    <a>FAQ</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
            </ul>
            <ul className="col-lg-3 col-md-4" style={{ listStyle: "none" }}>
                <h5>How Do I</h5>
                <li>
                    <a>Sign Up</a>
                </li>
                <li>
                    <a>Add a Listing</a>
                </li>
                <li>
                    <a>Claim Listing</a>
                </li>
                <li>
                    <a>Post a Query</a>
                </li>
                <li>
                    <a>Add a Blog Post</a>
                </li>
                <li>
                    <a>Other Queries</a>
                </li>
            </ul>
            <ul className="col-lg-3 col-md-4" style={{ listStyle: "none" }}>
                <h5>Quick Link</h5>
                <li>
                    <a>Listings</a>
                </li>
                <li>
                    <a>Blog Posts</a>
                </li>
                <li>
                    <a>Shop / Store</a>
                </li>
                <li>
                    <a>Community</a>
                </li>
            </ul>
            <div className="col-lg-3 col-md-4">
                <h5>
                    Social Media
                </h5>
                <h5>Invite Friend</h5>
                <form className="d-flex mb-5" role="search">
                    <input className="footer form-control searchInput" type="search" style={{ width: "20vw" }} placeholder="Search Here..." aria-label="Search" />
                    <button className="btn searchButton" style={{ backgroundColor: "#8064A2" }} type="submit"><i className="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i></button>
                </form>
            </div>
        </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{height:"60px",backgroundColor:"#F7F5F9"}}>
            <p style={{margin:"0px",fontWeight:"bold"}}>Purple Clue Private Limited</p>
        </div>
        </>
    )
}
