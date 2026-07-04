
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReceiptForm from "./components/ReceiptForm";
import ReceiptPreview from "./components/ReceiptPreview";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [business, setBusiness] = useState({
    name: "My Store",
    address: "",
    phone: "",
  });

  const [customer, setCustomer] = useState("");

  const [items, setItems] = useState([
    { name: "", quantity: 1, price: 0 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [notes, setNotes] = useState("");

  const receiptNumber = `REC-${Date.now()}`;

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-6">
          <ReceiptForm
            business={business}
            setBusiness={setBusiness}
            customer={customer}
            setCustomer={setCustomer}
            items={items}
            setItems={setItems}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            notes={notes}
            setNotes={setNotes}
          />
        </div>

        <div className="col-lg-6">
          <ReceiptPreview
            receiptNumber={receiptNumber}
            business={business}
            customer={customer}
            items={items}
            paymentMethod={paymentMethod}
            notes={notes}
          />

          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

export default App;
