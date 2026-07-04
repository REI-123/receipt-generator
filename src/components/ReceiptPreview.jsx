import React from "react";

const ReceiptPreview = ({
  receiptNumber,
  business,
  customer,
  items,
  paymentMethod,
  notes,
}) => {
  const total = items.reduce(
    (sum, item) => sum + Number(item.quantity) * Number(item.price),
    0
  );

  const now = new Date();

  return (
    <div
      id="receipt"
      className="card shadow-sm p-4 mx-auto"
      style={{ maxWidth: "350px", fontFamily: "monospace" }}
    >
      {/* Business Header */}
      <div className="text-center mb-3">
        <h4 className="fw-bold mb-1">{business.name}</h4>
        <div>{business.address}</div>
        <div>{business.phone}</div>
      </div>

      <hr />

      {/* Receipt Details */}
      <div className="mb-3">
        <div>
          <strong>Receipt:</strong> {receiptNumber}
        </div>
        <div>
          <strong>Date:</strong> {now.toLocaleDateString()}
        </div>
        <div>
          <strong>Time:</strong> {now.toLocaleTimeString()}
        </div>
        <div>
          <strong>Customer:</strong> {customer}
        </div>
      </div>

      <hr />

      {/* Items */}
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Item</th>
            <th className="text-center">Qty</th>
            <th className="text-end">Price</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>

              <td className="text-center">
                {item.quantity}
              </td>

              <td className="text-end">
                ₦
                {(item.quantity * item.price).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* Total */}
      <div className="d-flex justify-content-between fw-bold fs-5">
        <span>TOTAL</span>
        <span>₦{total.toLocaleString()}</span>
      </div>

      <hr />

      {/* Payment */}
      <div className="mb-2">
        <strong>Payment:</strong> {paymentMethod}
      </div>

      {/* Notes */}
      {notes && (
        <div className="mb-3">
          <strong>Notes:</strong>
          <br />
          {notes}
        </div>
      )}

      <hr />

      {/* Footer */}
      <div className="text-center">
        <strong>THANK YOU!</strong>
        <br />
        See you next time!
      </div>
    </div>
  );
};

export default ReceiptPreview;