/* eslint-disable default-case */
import React, { useEffect, useContext } from "react";
import Axios from "axios";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";

// React Tostify

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import DispatchContext from "../Contexts/DispatchContext";
import StateContext from "../Contexts/StateContext";

function Login() {
  function loggedin(props) {
    toast.success(props);
  }

  function WrongLogin(props) {
    toast.error(props);
  }

  const GlobalDispatch = useContext(DispatchContext);
  const GlobalState = useContext(StateContext);

  const navigate = useNavigate();

  const initialState = {
    usernameValue: "",
    passwordValue: "",
    sendRequest: 0,
    token: "",
    serverError: false,
  };

  function ReducerFuction(draft, action) {
    switch (action.type) {
      case "catchUsernameChange":
        draft.usernameValue = action.usernameChosen;
        draft.serverError = false;
        break;

      case "catchPasswordChange":
        draft.passwordValue = action.passwordChosen;
        draft.serverError = false;
        break;

      case "changeSendRequest":
        draft.sendRequest = draft.sendRequest + 1;
        break;

      case "catchToken":
        draft.token = action.tokenValue;
        break;

      case "catchServerError":
        draft.serverError = true;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  function FormSubmit(e) {
    e.preventDefault();

    dispatch({ type: "changeSendRequest" });
  }

  useEffect(() => {
    const source = Axios.CancelToken.source();
    if (state.sendRequest) {
      async function SingIn() {
        try {
          const response = await Axios.post(
            "https://ci-myhome.herokuapp.com/api-auth-djoser/token/login/",
            {
              username: state.usernameValue,

              password: state.passwordValue,
            },
            { cancelToken: source.token }
          );

          dispatch({
            type: "catchToken",
            tokenValue: response.data.auth_token,
          });

          GlobalDispatch({
            type: "catchToken",
            tokenValue: response.data.auth_token,
          });
          
        } catch (error) {
          dispatch({ type: "catchServerError" });
          WrongLogin("We cannot find the user with this e-mail or password");
        }
      }
      SingIn();
      
      return () => {
        source.cancel();
      };
    }
  }, [state.sendRequest]);

  // Get token

  useEffect(() => {
    const source = Axios.CancelToken.source();
    if (state.token !== "") {
      async function GetUserInfo() {
        try {
          const response = await Axios.get(
            "https://ci-myhome.herokuapp.com/api-auth-djoser/users/me/",
            {
              headers: { Authorization: "Token ".concat(state.token) },
            },
            { cancelToken: source.token }
          );

          GlobalDispatch({
            type: "userSignsIn",
            usernameInfo: response.data.username,
            emailInfo: response.data.email,
            IdInfo: response.data.id,
          });
          loggedin('You are logged in')
          navigate('/')
        } catch (error) {
          WrongLogin('Invalid username or e-mail')
        }
      }
      GetUserInfo();
      return () => {
        source.cancel();
      };
    }
  }, [state.token]);

  return (
    <Row className="text-center login-form justify-content-center align-items-center">
      <Col className="my-4" xs={12} md={9} lg={9} xl={9}>
        <Form onSubmit={FormSubmit} className="px-5 box bg-light">
          <h1 className="m-4">Login</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={state.usernameValue}
              onChange={(e) =>
                dispatch({
                  type: "catchUsernameChange",
                  usernameChosen: e.target.value,
                })
              }
              error={state.serverError ? true : false}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Enter Password"
              value={state.passwordValue}
              onChange={(e) =>
                dispatch({
                  type: "catchPasswordChange",
                  passwordChosen: e.target.value,
                })
              }
              type="password"
              error={state.serverError ? true : false}
            />
            <Form.Text className="text-muted">Enter your password</Form.Text>
          </Form.Group>

          <Button className="mx-1" variant="success" type="submit">
            Log In
          </Button>

          <h5 className="text-muted mt-5">Don't have an account?</h5>
          <Link className=" no-decoration" to="/register">
            Create here
          </Link>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
