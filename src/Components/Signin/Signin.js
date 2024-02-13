import React from 'react'
import "./Signin.css"
import photo from "../Images/Screenshot 2024-02-13 232651.png"

export default function Signin() {
    var signIn=()=>{
        document.getElementById("butt1").classList.add("active");
        document.getElementById("butt2").classList.remove("active");
    }
    var joinIn=()=>{
        document.getElementById("butt2").classList.add("active");
        document.getElementById("butt1").classList.remove("active");
    }
    return (
        <div className="dis" style={{backgroundColor:"#F7F5F9" }}>
            <div className="signin container d-flex" style={{ height: "650px" }}>
                <div className="widthSet" style={{ marginTop: "100px", width: "40vw" }}>
                    <h1 style={{ fontStyle: "italic" }}>Explore your <span style={{ color: "#0096C8" }}>hobby</span> or <span style={{ color: "#8064A2" }}>passion</span></h1>
                    <p className="mt-4">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                    <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                </div>
                <div className="widthSet d-flex justify-content-center" style={{ width: "40vw", marginTop: "100px", marginLeft: "20px" }}>
                    <div>
                        <div className="button ">
                            <button id="butt1" className="active" onClick={signIn}>Sign In</button>
                            <button id="butt2" className="" onClick={joinIn}>Join In</button>
                        </div>
                        <div className="under d-flex flex-column py-3">
                            <button className="adjust1 but d-flex align-items-center my-2" type="submit" style={{ width: "410px", justifyContent: "flex-start" }}><i className="fa-brands fa-google me-5"></i><span>Continue With Google</span></button>
                            <button className="adjust1 but d-flex align-items-center justify-content-start my-2" type="submit" style={{ width: "410px" }}><i className="fa-brands fa-facebook me-5" style={{ color: "#2363d1" }}></i><span>Continue With Facebook</span></button>
                            <span className="online">or connect with</span>
                        </div>
                        <form className="d-flex mt-4" role="search">
                            <input className="adjust1 form-control Input" type="search" style={{ width: "410px", borderRadius: "8px", borderColor: "#8064A2" }} placeholder="Search Here..." aria-label="Search" />                    </form>
                        <form className="d-flex my-2" role="search">
                            <input className="adjust2 form-control searchInput" type="search" style={{ width: "370px", borderRight: "None", borderColor: "#8064A2" }} placeholder="Search Here..." aria-label="Search" />
                            <button className="btn searchButton" style={{ borderColor: "#8064A2", borderLeft: "None" }} type="submit"><i className="fa-solid fa-eye" style={{ color: "#8064A2" }}></i></button>
                        </form>
                        <div className="d-flex my-2">
                            <input type="checkbox" /><span>Remember Me</span>
                            <div style={{ marginLeft: "auto" }}><i className="fa-solid fa-lock"></i><span>Forgot Password?</span></div>
                        </div>
                        <button className="adjust1 but d-flex align-items-center justify-content-center my-4" type="submit" style={{ width: "410px" }}>Continue</button>
                    </div>
                </div>
                <div className="signinImg">
                    <img src={photo} style={{width:"45vw"}}></img>
                </div>
            </div>
        </div>
    )
}
