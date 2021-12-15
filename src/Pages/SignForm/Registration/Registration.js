import React from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import register from "../../../images/registration.jpg";
import Header from '../../Shared/Header/Header';

const Registration = () => {
    const {
        signInUsingGoogle,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleAgeChange,
        handleMobileChange,
        handleDobChange,
        saveUser,
        setIsLoading,
        setUser,
        handleFacebookSignIn,
        error,user,
      } = useAuth();
      const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(user.email, user.displayName, "POST");
        setUser(user);
        navigate(redirect);
      })
      .finally(() => setIsLoading(false));
  };
    return (
        <>
        <Header></Header>
        <Container className="p-5 text-center">
        <Row>
          <Col className="mt-5 text center" lg={4} md={6} sm={12}>
            <h1 className="text-center pb-4 icon-reg">
              <i class="fas fa-user-plus fa-2x icon-color"></i>
            </h1>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  onBlur={handleNameChange}
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onBlur={handleEmailChange}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  onBlur={handlePasswordChange}
                  placeholder="Password"
                />
              </Form.Group>
              <div className="row mb-3 text-danger">{error}</div>
              <Button
                className="btn-design my-3 px-5 "
                variant="btn-block"
                type="submit"
              >
                Register
              </Button>
              <p>
                Already have an Account?<Link to="/login">Login</Link>
              </p>
            </Form>
            <button onClick={handleGoogleSignIn} className="btn-design px-2 py-1 me-2">
              <i className="google-icon fab fa-google"></i> Sign In With Google
            </button>
            <button onClick={handleFacebookSignIn} className="btn-design px-2 py-1">
              Facebook Sign In
            </button>
            <br />
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className="img-fluid" src={register} alt="" />
          </Col>
        </Row>
      </Container>
        </>
    );
};

export default Registration;