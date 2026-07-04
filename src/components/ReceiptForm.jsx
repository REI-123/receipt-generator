import React from "react";
import ItemRow from "./ItemRow";

const ReceiptForm = ({
  business,
  setBusiness,
  customer,
  setCustomer,
  items,
  setItems,
  paymentMethod,
  setPaymentMethod,
  notes,
  setNotes,
}) => {
  // Handle business details
  const handleBusinessChange = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });
  };

  // Handle item changes
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  // Add a new item
  const addItem = () => {
    setItems([
      ...items,
      {
        name: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  // Remove an item
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="card shadow p-4">
      <h3 className="mb-4">Receipt Generator</h3>

      {/* Business Information */}
      <h5>Business Information</h5>

      <input
        type="text"
        name="name"
        className="form-control mb-3"
        placeholder="Business Name"
        value={business.name}
        onChange={handleBusinessChange}
      />

      <input
        type="text"
        name="address"
        className="form-control mb-3"
        placeholder="Business Address"
        value={business.address}
        onChange={handleBusinessChange}
      />

      <input
        type="text"
        name="phone"
        className="form-control mb-4"
        placeholder="Business Phone"
        value={business.phone}
        onChange={handleBusinessChange}
      />

      {/* Customer */}
      <h5>Customer</h5>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />

      {/* Items */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Items</h5>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={addItem}
        >
          + Add Item
        </button>
      </div>

      {items.map((item, index) => (
        <ItemRow
          key={index}
          index={index}
          item={item}
          handleItemChange={handleItemChange}
          removeItem={removeItem}
        />
      ))}

      {/* Payment */}
      <h5 className="mt-4">Payment Method</h5>

      <select
        className="form-select mb-4"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="Cash">Cash</option>
        <option value="Transfer">Transfer</option>
        <option value="POS">POS</option>
        <option value="Card">Card</option>
      </select>

      {/* Notes */}
      <h5>Notes</h5>

      <textarea
        className="form-control"
        rows="3"
        placeholder="Optional..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
};

export default ReceiptForm;