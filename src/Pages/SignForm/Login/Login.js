import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.jpg";
import Header from "../../Shared/Header/Header";
const Login = () => {
  const {
    signInUsingGoogle,
    processLogin,
    handleEmailChange,
    handlePasswordChange,
    setIsLoading,
    setUser,
    setError,
    saveUser,
    handleFacebookSignIn,
    user,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(user.email, user.displayName, "PUT");
        setUser(user);
        navigate(redirect);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    processLogin()
      .then((result) => {
        const user = result.user;
        navigate(redirect);
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
    <Header></Header>
      <Container className="p-5 text center">
        <Row>
          <Col className="mt-5 text center" lg={6} md={6} sm={12}>
            <h1 className="text-center pb-4 icon-lock">
              <i class="fas fa-user-lock fa-3x"></i>
            </h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                onClick={handleEmailSignIn}
                className="my-3 px-5 btn-design"
                variant="primary btn-block"
                type="submit"
              >
                Login
              </Button>
              <p>
                New User? Register <Link to="/register">Create Account</Link>
              </p>
            </Form>
            <button onClick={handleGoogleSignIn} className="btn-design me-2">
              <i className="google-icon fab fa-google"></i> Sign In With Google
            </button>
            <button onClick={handleFacebookSignIn} className="btn-design me-2">
              Facebook Sign In
            </button>
            <br />
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img className="img-fluid" src={login} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
