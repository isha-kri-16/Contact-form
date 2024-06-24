import { useState } from "react";
import './ContactForm.css';

function ContactForm() {

    const [formData, setFormData ] = useState( {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        byEmail: "",
        notifications: "",
        } )


// event.target => jis element pr click kiya ho uski baat ho rahi h 
// function changeHandle(event) {
//     setFormData(prevFormData => {
//         return {
//             ...prevFormData,
//             [event.target.name] : event.target.value
//         }
//     })
// }


// HOW TO HANDLE CHECKBOX OR RADIO BUTTONS

function changeHandle(event) {
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]:  type === "checkbox" ? checked : value
        }
    })
}


function submitHandle(event) {
    event.preventDefault();
    console.log("Form printing....");
    console.log(formData);
}


    return(
        <>

        <div className="container">
        <h1>Contact Form</h1>

        <div className="form">

            <form action=""  onSubmit={submitHandle}>

                <div className="firstname">
                <label htmlFor="">First Name</label> <br />
                <input type="text"
                placeholder="Pranay"
                name="firstName"
                onChange={changeHandle}
                value={formData.firstName}
                />
                </div>

                <div className="lastname">
                <label htmlFor="">Last Name</label> <br />
                <input type="text"
                placeholder="Gupta"
                name="lastName"
                onChange={changeHandle}
                value={formData.lastName}
                />
                </div>

                <div className="email">
                <label htmlFor="">Email address</label> <br />
                <input type="text"
                placeholder="pgupta@duck.com"
                name="email"
                onChange={changeHandle}
                value={formData.email}
                />
                </div>

                <div className="country">
                <label htmlFor="country">Country</label> <br />
                <select 
                name="country" 
                id="country"
                onChange={changeHandle}
                value={formData.country}
                >

                    <option value="india">India</option>
                    <option value="united states">United States</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                    
                </select> 
                </div>

                <div className="street">
                <label htmlFor="">Street address</label> <br />
                <input type="text"
                placeholder="1234 Main St."
                name="street"
                onChange={changeHandle}
                value={formData.street}
                />
                </div>

                <div className="city">
                <label htmlFor="">City</label> <br />
                <input type="text"
                placeholder="Asanol"
                name="city"
                onChange={changeHandle}
                value={formData.city}
                />
                </div>

                <div className="state">
                <label htmlFor="">State/Province</label> <br />
                <input type="text"
                placeholder="West Bengal"
                name="state"
                onChange={changeHandle}
                value={formData.state}
                />
                </div>

                <div className="zip">
                <label htmlFor="">ZIP/Postal code</label> <br />
                <input type="text"
                placeholder="713301"
                name="zip"
                onChange={changeHandle}
                value={formData.zip}
                />
                </div>

                <div className="option">
                {/* <fieldset> */}

                    <p className="heading">By Email</p>

                    <label htmlFor="comments">Comments</label>
                    <p className="sub">Get notified when someone posts a comment on a posting.</p>

                    <input type="radio" 
                    name="byEmail"
                    id="comments"
                    onChange={changeHandle}
                    value="comments"
                    checked={formData.byEmail === "comments"}
                    />

                    
                    <label htmlFor="candidates">Candidates</label>
                    <p className="sub">Get notified when a candidate applies for a job.</p>
                    <input type="radio" 
                    name="byEmail"
                    id="candidates"
                    onChange={changeHandle}
                    value="candidates"
                    checked={formData.byEmail === "candidates"}
                    />

                    <label htmlFor="offers">Offers</label>
                    <p className="sub">Get notified when a candidate accepts or rejects an offer.</p>
                    <input type="radio" 
                    name="byEmail"
                    id="offers"
                    onChange={changeHandle}
                    value="offers"
                    checked={formData.byEmail === "offers"}
                    />

                {/* </fieldset> */}
                </div>

                <div className="notification">
                    {/* <fieldset> */}
                        <p className="push">Push Notifications</p>
                        <p className="sub">These are delivered as SMS to your mobile phone.</p>
                        <br />

                        <input type="radio" 
                        className="input" 
                        name="notifications"
                        id="everything"
                        onChange={changeHandle}
                        value="everything"
                        checked={formData.notifications === "everything"}
                        />
                        <label htmlFor="everything">Everything</label> <br />

                        <input type="radio"
                        name="notifications" 
                        id="sameEmail"
                        onChange={changeHandle}
                        value="sameEmail"
                    checked={formData.notifications === "sameEmail"}
                        />
                        <label htmlFor="sameEmail">Same as email</label> <br />


                        <input type="radio"  
                        name="notifications" 
                        id="noPush"
                        onChange={changeHandle}
                        value="noPush"
                    checked={formData.notifications === "noPush"}
                        />
                        <label htmlFor="noPush">No push notifications</label>

                    {/* </fieldset> */}

                    <div className="button">
                        <button>Save</button>
                    </div>
                </div>


            </form>
            </div>
        </div>
        </>
    )
}

export default ContactForm;