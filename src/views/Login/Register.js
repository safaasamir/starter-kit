import { Link } from 'react-router-dom'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub,User,Lock,Phone } from 'react-feather'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, CardTitle, Form, Label, Input, Button } from 'reactstrap'


// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/bus.svg"
import illustrationsDark from "@src/assets/images/pages/bus-dark.svg"

// ** Styles
import '@styles/react/pages/page-authentication.scss'

import buslogo from "@src/assets/images/pages/logo.svg"
const LogoBus = buslogo


function Register (props){
  
    const { skin } = useSkin()

  const source = skin === 'dark' ? illustrationsDark : illustrationsLight
  const {userName,setUserName,email,setEmail,phone,setPhone,password,setPassword,signUp}=props
  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
        <img src={LogoBus} alt="LogoBus" width="60"/>
        <h2 className="brand-text ms-1 my-auto" style={{fontFamily:'PT Serif', color:"black"}}>Waslna</h2>
          
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source}  width={500} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              sign up
            </CardTitle>
          

            <Form action='/' className='auth-register-form mt-2' onSubmit={signUp}>
            <div className='mb-1'>
            <User size={20}/>
            <Label className='form-label' for='register-username'>
              Username
            </Label>
            <Input type='text' id='register-username' placeholder='johndoe' autoFocus style={{backgroundColor:"#FCFEB2"}} value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          <div className='mb-1'>
          <Mail size={20} />
            <Label className='form-label' for='register-email'>
              Email
            </Label>
            <Input type='text' id='register-email' placeholder='john@example.com' style={{backgroundColor:"#FCFEB2"}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className='mb-1'>
          <Phone size={20}/>
          <Label className='form-label' for='register-phone'>
            Phone
          </Label>
          <Input type='text' id='register-phone' placeholder='0125656655' style={{backgroundColor:"#FCFEB2"}}  value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
          <div className='mb-1'>
          <Lock size={20} />
            <Label className='form-label' for='register-password'>
              Password
            </Label>
            <InputPasswordToggle className='input-group-merge' id='register-password' style={{backgroundColor:"#FCFEB2"}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div className='form-check mb-1'>
            <Input type="checkbox" id='terms' />
            <Label className='form-check-label' for='terms'>
              I agree to
              <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                privacy policy & terms
              </a>
            </Label>
          </div>
          <Button color='primary' block >
            Sign up
          </Button>
        </Form>
        <p className='text-center mt-2'>
          <span className='me-25'>Already have an account?</span>
          <Link to='/login'>
            <span>Sign in instead</span>
          </Link>
        </p>
        <div className='divider my-2'>
          <div className='divider-text'>or</div>
        </div>
        <div className='auth-footer-btn d-flex justify-content-center'>
          <Button color='facebook'>
            <Facebook size={14} />
          </Button>
          <Button color='twitter'>
            <Twitter size={14} />
          </Button>
          <Button color='google'>
            <Mail size={14} />
          </Button>
          <Button className='me-0' color='github'>
            <GitHub size={14} />
          </Button>
        </div>
      </Col>
    </Col>
  </Row>
</div>
  )
}

export default Register
