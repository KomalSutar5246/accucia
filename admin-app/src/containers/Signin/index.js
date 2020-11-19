import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from '../../actions';
import { useDispatch, useSelector  } from 'react-redux';
import { Redirect } from 'react-router-dom';


/**
 * @author
 * @function Signin
 **/
const Signin = (props) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

const userLogin = (e) => {

  
    e.preventDefault();
  
  const user = {
    email, password
  }

  dispatch(login(user));
};

//once admin logged in it should redirect to home 
if(auth.authenticate){
  return <Redirect to={'/'} />
}

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span:6, offset: 3}}>
            <Form onSubmit={ userLogin}>
            <Input 
                Label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange = { (e) => setEmail(e.target.value)}          
               />
              <Input 
                Label="Password"
                placeholder="Password"
                value={password}
                type="Password"
                onChange = { (e) => setPassword(e.target.value)}          
               />
              {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit" style={{ width: '100px', }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
