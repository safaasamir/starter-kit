import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from "styled-components"


const Eror404 = () => {
    return (<Wrapper>
        <div className='Errorcontainer'>
            <div>
                <h2>404</h2>
                <h3>UH OH! you're lost.</h3>
                <p>
                    The page you are looking for does not exist .How you got here is a
                    mystery. but you click the button bellow to go back to the home page  </p>
                    <NavLink to="/home">
                    <button type="button" className="btn btn-warning">Go Back to Home </button>
                </NavLink>
            </div>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.section`

.Errorcontainer {
    padding: 9rem 0 ;
    text-align:center;

    h2 {
      font-size:10rem;
      color:#FEC628;
    }
    h3{
        font-size: 4.2rem;
        color:#FEC628;
    }

    p{
        margin:2rem 0;
        color:#FEC628;
    }
}

`
export default Eror404;

