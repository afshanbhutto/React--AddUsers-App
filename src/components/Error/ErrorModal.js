import  Card from "../UI/Card"
import Button from "../UI/Button";
import "./ErrorModal.css";


const ErrorModal = props => {
    return(
        <div>
            <div className="backdrop" onClick={props.onErrorHandler}/>
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.messege}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onErrorHandler}>Okay</Button>
                </footer>
            </Card>
        </div>

    );
};

export default ErrorModal;