import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import "./styles.css";
export default function App() {
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_9uzFaRoEwyoZoP",
      amount: 300000 * 100,
      currency: "INR",
      name: "Fun Stop",
      description: "Apple Macbook Air M2 2022",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkATI6tx9fx_YOkMNGLWaduvwSrfhnfiPZA&usqp=CAU",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Abdur Rasheed",
        email: "abd205200@gmail.com",
        contact: "8973793648",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#faf218",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="page">
      <h5>Razorpay Payment</h5>
      <button onClick={handlePayment} className="button">
        Pay Now
      </button>
    </div>
  );
}
