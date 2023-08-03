import Header from "../components/Layouts/Header";
import OrderItemsList from "../components/Order/OrderItemsList";
import Card from "../components/UI/Card";
import { getToken } from "../util/sessionHandler";
import { useLoaderData } from "react-router-dom";
import classes from "./Orders.module.css";

const Orders = () => {
  const loaderData = useLoaderData();
  return (
    <>
      <Header />
      {loaderData.map((order) => (
        <Card key={order._id} className={classes["order-container"]}>
          <p>
            <b>User Name: </b>
            {order.userName}
          </p>
          <p>
            <b>User Id: </b>
            {order.userId}
          </p>
          <p>
            <b>Order date: </b>
            {new Date(order.date).toDateString()}
          </p>
          <p>
            <b>Delivery Slot: </b>
            {order.slot}
          </p>
          <p>
            <b>Delivery Address: </b>
            {order.address}
          </p>
          <p>
            <b>Number: </b>
            {order.number}
          </p>
          <p>
            <b>Special Instructions: </b>
            {order.instructions || "None"}
          </p>
          <OrderItemsList items={order.items} />
          <p>
            <b>Total Amount: ₹ </b>
            {order.totalAmount}
          </p>
        </Card>
      ))}
    </>
  );
};

export default Orders;

export const loader = async ({ params }) => {
  const id = params.id;
  const response = await fetch("http://localhost:5050/orders/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getToken(),
    },
  });
  if (!response.ok) {
    throw response;
  }
  return response;
};
