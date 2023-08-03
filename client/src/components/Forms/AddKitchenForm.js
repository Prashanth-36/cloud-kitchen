import { Form, json, redirect } from "react-router-dom";
import Input from "../UI/Input";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./KitchenForm.module.css";
import { getToken } from "../../util/sessionHandler";

const AddKitchenForm = () => {
  return (
    <Card className={classes.form}>
      <Form method="post">
        <Input
          label="Kitchen Name"
          attr={{ id: "kitchen", name: "name", required: true }}
        />
        <Input
          label="Location"
          attr={{ id: "location", name: "location", required: true }}
        />
        <Input
          label="Cuisine Type"
          attr={{ id: "cuisine", name: "cuisineType", required: true }}
        />
        <Input
          label="Kitchen Image Link"
          attr={{ type: "url", id: "image", name: "image", required: true }}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  );
};

export default AddKitchenForm;

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const response = await fetch("http://localhost:5050/kitchens/add-kitchen", {
    method: "post",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw json({ message: "Could not add new Kitchen." }, { status: 500 });
  }
  const token = await response.json();
  localStorage.setItem("token", token);
  return redirect("/");
};
