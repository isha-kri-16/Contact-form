import { useState } from "react";

function Form() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    // function changefirstHandler(event) {
        // console.log(event.target.value);
        // console.log(event.target);
        // console.log("Name entered");
        // setFirstName(event.target.value);
    // }


    // function changelastHandler(event) {
        // console.log(event.target.value);
        // console.log(event.target);
        // console.log(" Printing Last Name entered");
        // setLastName(event.target.value);

    // }

        const [formData, setFormData] = useState( {firstName: "",   lastName: "",   email:"",   comments: "",   isVisible:true,   mode: "",   favCar: ''} )

        function changeHandle(event) {
            setFormData(prevFormData => {          // prevFormData ->  formData me jo bhi old data hai whi copy ho rha h
                return {
                    ...prevFormData,        //purani state rahegi hi or old data copy kr dena
                    [event.target.name] : event.target.value
                }
            }) 
        }
        // console.log(formData);



        //HOW TO HANDLE CHECKBOX  

        // function changeHandle(event) {
        //     const {name, value, checked, type} = event.target
        //     setFormData(prevFormData => {
        //         return{
        //             ...prevFormData,
        //             [name]: type ==='checkbox' ? checked : value    // agar checkbox ka input type checked hua to ....check ho jayegi mhi to value print ho jayega
        //         }
        //     })
        // }


        function submitHandle(event){
        event.preventDefault();
        console.log("Finally printing.....  ");
        console.log(formData);
        }


        return(
        <>

        <form onSubmit={submitHandle}>
<br />

            <label>Enter name :  </label>
            <input
            type="text"
            placeholder="Enter your name"
            // onChange={changefirstHandler} 
            onChange={changeHandle}
            name="firstName"
            value={formData.firstName}
            /> 
<br />
<br />
            <label>Enter last name :  </label>
            <input
            type="text"
            placeholder="Enter last name"
            // onChange={changelastHandler} 
            onChange={changeHandle}
            name="lastName"
            value={formData.lastName}
            />
<br />
<br />
            <label>Enter Email :  </label>
            <input
            type="text"
            placeholder="Enter Email here"
            // onChange={changelastHandler} 
            onChange={changeHandle}
            name="email"
            value={formData.email}
            />
<br />
<br />
            <textarea 
            placeholder="enter your comment here..."
            onChange={changeHandle}
            name="comments"
            value={formData.comments}
            />
<br />
<br />
            <label htmlFor="isVisible">Am I Visible ?</label>
            <input
            type="checkbox"
            onChange={changeHandle}
            name="isVisible"
            checked={formData.isVisible}
            id="isVisible"
            />
<br>
</br>
<fieldset>
    <legend>Mode:</legend>
    <label htmlFor="Online-Mode">Online Mode</label>
            <input 
            type="radio"
            onChange={changeHandle}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
            />
<br>
</br>
            <label htmlFor="Offline-Mode">Offline Mode</label>
            <input 
            type="radio"
            onChange={changeHandle}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
            />
</fieldset>
            
<br />
<br />
            <label htmlFor="favCar">Select your Favourite Car : </label>
            <select 
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandle} >

            <option value="scorpio"> Scorpio</option>
            <option value="fortuner"> Fortuner</option>
            <option value="thar"> Thar </option>
            <option value="bmw">BMW </option>
            <option value="royal">Royal Rocle </option>
            <option value="gwagon"> G-wagon</option>
            <option value="mercedes">Mercedes </option>
            
            </select>
<br />
<br />
<br />
<br />
            {/* <input type="submit" value="submit" /> */}

            <button>Submit  </button>
            
            
        </form>
        </>
    ) 
} 

export default Form;