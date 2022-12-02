import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import { useState } from "react";
import ErrorModal from "../Error/ErrorModal";


const AddUser = (props) =>{

    // managing state for username
    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge]= useState('');

    //managing state for Error
    const [error, setError] = useState();

    const AddUserHandler = (event) =>{
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                messege: "Please enter valid username and age (Non-empty)"
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid age",
                messege: "Please enter a valid age (> 0)"
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('')
       
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }
    return(
        <div>
            {error && <ErrorModal title={error.title} messege={error.messege} onErrorHandler={errorHandler}/>}
            <Card className="input">
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your name" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age"placeholder="Enter Age" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add</Button>
                    

                </form>
            </Card>
        </div>
       
    );
}

export default AddUser;