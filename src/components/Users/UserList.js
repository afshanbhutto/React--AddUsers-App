import "./UserList.css";
import Card from "../UI/Card";

// this component is for outputting the users
const UserList = (props) => {
    return(
        <Card className="users">
        <ul>
            {props.users.map((user)=>(
                <Card className="single-user" key={user.id}>
                    <li>Username: {user.name}</li>
                    <li>Age: {user.age} years</li>
                </Card>
                
            ))}
        </ul>
        </Card>
    );
};

export default UserList;