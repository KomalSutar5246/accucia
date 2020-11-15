import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

/**
 * @author
 * @function Signin
 **/
const Signin = (props) => {

  const dispatch = useDispatch();


const userLogin = (e) => {

  
    e.preventDefault();
  
  const user = {
    email: 'kaavi2305@gmail.com',
    password: 'zxc789'
  }
  dispatch(login(user));
};

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span:6, offset: 3}}>
            <Form onSubmit={ userLogin}>
            <Input 
                Label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange = { () => { }}          
               />
              <Input 
                Label="Password"
                placeholder="Password"
                value=""
                type="Password"
                onChange = { () => { }}          
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
