import React , {useEffect} from "react";
import { Container, Button } from "reactstrap";


const Home = () => {

    useEffect(()=> {
        document.title="Home Page";
    },[])

    return(
        <div>
             <div className="container-fluid text-sm-center p-5 bg-light"> 
             <h5 >This is Home Page</h5>
             <p className="lead">A One-day Conference About All Things JavaScript!</p>

             <Container>
                <Button color="primary" outline>Begin Your Journey Now!</Button>
             </Container>
        </div>
            
        </div>
    )
}

export default Home;