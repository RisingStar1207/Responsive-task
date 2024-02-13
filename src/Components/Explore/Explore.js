import React from 'react'
import "./Explore.css"

export default function Explore() {
    return (
        <div className="container " style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="row center">
                <div className="explore col-6 m-2 p-4" style={{ border: "1px solid #CED4DA", borderRadius: "8px", width: "640px" }}>
                    <h3 className="mt-3" style={{ fontSize: "1.5rem" }}>
                        <svg className="mx-3" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11.25C22.7167 11.25 25.1167 11.9 27.0667 12.75C28.8667 13.55 30 15.35 30 17.3V20H10V17.3167C10 15.35 11.1333 13.55 12.9333 12.7667C14.8833 11.9 17.2833 11.25 20 11.25ZM6.66667 11.6667C8.5 11.6667 10 10.1667 10 8.33333C10 6.5 8.5 5 6.66667 5C4.83333 5 3.33333 6.5 3.33333 8.33333C3.33333 10.1667 4.83333 11.6667 6.66667 11.6667ZM8.55 13.5C7.93333 13.4 7.31667 13.3333 6.66667 13.3333C5.01667 13.3333 3.45 13.6833 2.03333 14.3C0.8 14.8333 0 16.0333 0 17.3833V20H7.5V17.3167C7.5 15.9333 7.88333 14.6333 8.55 13.5ZM33.3333 11.6667C35.1667 11.6667 36.6667 10.1667 36.6667 8.33333C36.6667 6.5 35.1667 5 33.3333 5C31.5 5 30 6.5 30 8.33333C30 10.1667 31.5 11.6667 33.3333 11.6667ZM40 17.3833C40 16.0333 39.2 14.8333 37.9667 14.3C36.55 13.6833 34.9833 13.3333 33.3333 13.3333C32.6833 13.3333 32.0667 13.4 31.45 13.5C32.1167 14.6333 32.5 15.9333 32.5 17.3167V20H40V17.3833ZM20 0C22.7667 0 25 2.23333 25 5C25 7.76667 22.7667 10 20 10C17.2333 10 15 7.76667 15 5C15 2.23333 17.2333 0 20 0Z" fill="#8064A2" />
                        </svg>
                        People
                    </h3>
                    <p className="mt-2">
                        Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                    </p>
                    <button className="expbtn my-2 px-4" style={{ backgroundColor: "transparent", border: "1px solid #8064A2", color: "#8064A2", borderRadius: "8px" }}>Connect</button>
                </div>
                <div className="explore col-6 m-2 p-4" style={{ border: "1px solid #CED4DA", borderRadius: "8px", width: "640px" }}>
                    <h3 className="mt-3" style={{ fontSize: "1.5rem" }}>
                        <svg className="mx-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_4273)">
                                <rect x="8" y="13" width="24" height="19" fill="#0096C8" />
                                <path d="M26.6667 17.5498C26.1833 17.0665 25.3833 17.0665 24.9 17.5498L17.65 24.7998L15 22.1498C14.5167 21.6665 13.7167 21.6665 13.2333 22.1498C12.75 22.6332 12.75 23.4332 13.2333 23.9165L16.4667 27.1498C17.1167 27.7998 18.1667 27.7998 18.8167 27.1498L26.65 19.3165C27.15 18.8332 27.15 18.0332 26.6667 17.5498ZM31.6667 4.99984H30V3.33317C30 2.4165 29.25 1.6665 28.3333 1.6665C27.4167 1.6665 26.6667 2.4165 26.6667 3.33317V4.99984H13.3333V3.33317C13.3333 2.4165 12.5833 1.6665 11.6667 1.6665C10.75 1.6665 10 2.4165 10 3.33317V4.99984H8.33333C6.48333 4.99984 5.01667 6.49984 5.01667 8.33317L5 31.6665C5 33.4998 6.48333 34.9998 8.33333 34.9998H31.6667C33.5 34.9998 35 33.4998 35 31.6665V8.33317C35 6.49984 33.5 4.99984 31.6667 4.99984ZM30 31.6665H10C9.08333 31.6665 8.33333 30.9165 8.33333 29.9998V13.3332H31.6667V29.9998C31.6667 30.9165 30.9167 31.6665 30 31.6665Z" fill="#0096C8" />
                                <path d="M26.7958 17.3625C26.3125 16.8792 25.5125 16.8792 25.0292 17.3625L17.7792 24.6125L15.1292 21.9625C14.6458 21.4792 13.8458 21.4792 13.3625 21.9625C12.8792 22.4458 12.8792 23.2458 13.3625 23.7292L16.5958 26.9625C17.2458 27.6125 18.2958 27.6125 18.9458 26.9625L26.7792 19.1292C27.2792 18.6458 27.2792 17.8458 26.7958 17.3625Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_4273">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        Product
                    </h3>
                    <p className="mt-2">
                        Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                    </p>
                    <button className="expbtn my-2 px-4" style={{ backgroundColor: "transparent", border: "1px solid #8064A2", color: "#8064A2", borderRadius: "8px" }}>Attend</button>
                </div>
                <div className="explore col-6 m-2 p-4" style={{ border: "1px solid #CED4DA", borderRadius: "8px", width: "640px" }}>
                    <h3 className="mt-3" style={{ fontSize: "1.5rem" }}>
                        <svg className="mx-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_4263)">
                                <path d="M20.0002 3.33333C13.5502 3.33333 8.3335 8.55 8.3335 15C8.3335 23.75 20.0002 36.6667 20.0002 36.6667C20.0002 36.6667 31.6668 23.75 31.6668 15C31.6668 8.55 26.4502 3.33333 20.0002 3.33333ZM20.0002 19.1667C17.7002 19.1667 15.8335 17.3 15.8335 15C15.8335 12.7 17.7002 10.8333 20.0002 10.8333C22.3002 10.8333 24.1668 12.7 24.1668 15C24.1668 17.3 22.3002 19.1667 20.0002 19.1667Z" fill="#77933C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_4263">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Place
                    </h3>
                    <p className="mt-2">
                        Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                    </p>
                    <button className="expbtn my-2 px-4" style={{ backgroundColor: "transparent", border: "1px solid #8064A2", color: "#8064A2", borderRadius: "8px" }}>Get It</button>
                </div>
                <div className="explore col-6 m-2 p-4" style={{ border: "1px solid #CED4DA", borderRadius: "8px", width: "640px" }}>
                    <h3 className="mt-3" style={{ fontSize: "1.5rem" }}>
                        <svg className="mx-3" width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.6832 11.9997L20.3832 1.06636C20.0665 0.599697 19.5332 0.366364 18.9998 0.366364C18.4665 0.366364 17.9332 0.599697 17.6165 1.08303L10.3165 11.9997H2.33317C1.4165 11.9997 0.666504 12.7497 0.666504 13.6664C0.666504 13.8164 0.683171 13.9664 0.733171 14.1164L4.9665 29.5664C5.34984 30.9664 6.63317 31.9997 8.1665 31.9997H29.8332C31.3665 31.9997 32.6498 30.9664 33.0498 29.5664L37.2832 14.1164L37.3332 13.6664C37.3332 12.7497 36.5832 11.9997 35.6665 11.9997H27.6832ZM13.9998 11.9997L18.9998 4.66636L23.9998 11.9997H13.9998ZM18.9998 25.333C17.1665 25.333 15.6665 23.833 15.6665 21.9997C15.6665 20.1664 17.1665 18.6664 18.9998 18.6664C20.8332 18.6664 22.3332 20.1664 22.3332 21.9997C22.3332 23.833 20.8332 25.333 18.9998 25.333Z" fill="#C0504D" />
                        </svg>

                        Program
                    </h3>
                    <p className="mt-2">
                        Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                    </p>
                    <button className="expbtn my-2 px-4" style={{ backgroundColor: "transparent", border: "1px solid #8064A2", color: "#8064A2", borderRadius: "8px" }}>Meet Up</button>
                </div>
            </div>
        </div>
    )
}
