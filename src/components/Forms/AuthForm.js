import { Form, Link, useSearchParams } from "react-router-dom";
import "./AuthForm.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";
// import { useState } from "react";
const AuthForm = () => {
  //   const [] = useState();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  isLogin ? (document.title = "Log in") : (document.title = "Sign in");

  return (
    <Card>
      <Form>
        <div className="input-container">
          <h2>{isLogin ? "Login" : "Create New Account"}</h2>
          <Input
            label="Email"
            attr={{ name: "email", type: "email", id: "email" }}
          />
          <Input
            label="Password"
            attr={{ name: "password", type: "password", id: "password" }}
          />
          {!isLogin && (
            <>
              <Input
                label="Confirm Password"
                attr={{
                  name: "confirm-password",
                  type: "password",
                  id: "confirm-password",
                }}
              />
              <Input
                label="Phone Number"
                attr={{
                  name: "number",
                  type: "tel",
                  id: "number",
                }}
              />
            </>
          )}
        </div>
        <div className="button-container">
          <Link className="link" to={`?mode=${isLogin ? "sigin" : "login"}`}>
            {isLogin ? "Singin" : "Login"}
          </Link>
          <Button>Send</Button>
        </div>
      </Form>
    </Card>
  );
};

export default AuthForm;
