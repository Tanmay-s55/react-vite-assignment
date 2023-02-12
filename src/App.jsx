import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import './App.css';

function App(){
    const navigate = useNavigate();
    //state to manage form data
    const [userData,setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    //state to write to localStorage
    const [userRecord, setUserRecord] = useState([]);
    //this state checks for correct form values
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [newRoute,setNewRoute] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //validates form data,if correct then store to localstore else display error
        setFormErrors(validate(userData));
        setIsSubmit(true);
        if(Object.keys(formErrors).length==0 && isSubmit){
            const newRecord = {...userData};
            setUserRecord(newRecord);
            setUserData({name:"",email:"",phone:""});
            setNewRoute(true);
        }
    };
    const validate = (values) => {
        const errors = {};
        if(!values.name){
            errors.name = "Name is required";
        }
        if(!values.email){
            errors.email = "Email is required";
        }if(!values.phone){
            errors.phone = "Phone is required";
        }
        return errors;
    };
    useEffect(() => {
        localStorage.setItem('user data',JSON.stringify(userRecord));
        if(newRoute===true){
            navigate('/secondpage');
        }
    },[userRecord]);

    return(
        <div className="container">
            <form className="form" action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        id="name" />
                </div>
                <p>{formErrors.name}</p>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={userData.email}
                        onChange={handleChange}
                        id="email" />
                </div>
                <p>{formErrors.email}</p>
                <div>
                    <label htmlFor="phone">Phone No</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={userData.phone}
                        onChange={handleChange}
                        id="phone" />
                </div>
                <p>{formErrors.phone}</p>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;