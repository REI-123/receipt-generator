import React from "react";

const ItemRow = ({
  index,
  item,
  handleItemChange,
  removeItem,
}) => {
  return (
    <div className="row g-2 align-items-center mb-3">
      {/* Item Name */}
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={item.name}
          onChange={(e) =>
            handleItemChange(index, "name", e.target.value)
          }
        />
      </div>

      {/* Quantity */}
      <div className="col-md-2">
        <input
          type="number"
          min="1"
          className="form-control"
          placeholder="Qty"
          value={item.quantity}
          onChange={(e) =>
            handleItemChange(index, "quantity", Number(e.target.value))
          }
        />
      </div>

      {/* Unit Price */}
      <div className="col-md-3">
        <input
          type="number"
          min="0"
          className="form-control"
          placeholder="Price"
          value={item.price}
          onChange={(e) =>
            handleItemChange(index, "price", Number(e.target.value))
          }
        />
      </div>

      {/* Remove Button */}
      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-danger w-100"
          onClick={() => removeItem(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ItemRow;