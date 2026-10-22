import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  X,
  Printer,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        {
          name: "Bruschetta",
          description:
            "Toasted bread with tomatoes, basil, garlic and olive oil.",
          price: 9,
          image:
            "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Creamy Mushroom Soup",
          description:
            "Rich mushroom soup finished with cream and fresh herbs.",
          price: 8,
          image:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Garlic Prawns",
          description:
            "Juicy prawns sautéed with garlic, butter and herbs.",
          price: 12,
          image:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },

    {
      title: "Main Course",
      items: [
        {
          name: "Truffle Pasta",
          description:
            "Creamy pasta with parmesan, herbs and fresh truffle.",
          price: 18,
          image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Grilled Salmon",
          description:
            "Fresh grilled salmon with herbs and seasonal vegetables.",
          price: 24,
          image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Creamy Chicken",
          description:
            "Tender chicken breast in a creamy garlic herb sauce.",
          price: 20,
          image:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },

    {
      title: "Pizza",
      items: [
        {
          name: "Margherita Pizza",
          description:
            "Fresh mozzarella, basil and classic tomato sauce.",
          price: 16,
          image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Pepperoni Pizza",
          description:
            "Crispy pepperoni, mozzarella and rich tomato sauce.",
          price: 18,
          image:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Four Cheese Pizza",
          description:
            "A delicious combination of four premium cheeses.",
          price: 19,
          image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },

    {
      title: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description:
            "Classic Italian dessert with mascarpone and espresso.",
          price: 9,
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Chocolate Cake",
          description:
            "Rich chocolate cake served with a smooth chocolate glaze.",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Panna Cotta",
          description:
            "Silky vanilla panna cotta with fresh berries.",
          price: 8,
          image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showBill, setShowBill] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    table: "",
  });

  const addToOrder = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (name) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (name) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (name) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.name !== name)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const serviceCharge = subtotal * 0.05;
  const grandTotal =
    subtotal + tax + serviceCharge;

  const formatPrice = (price) =>
    `$${price.toFixed(2)}`;

  const startNewOrder = () => {
    setCart([]);
    setCustomer({
      name: "",
      phone: "",
      table: "",
    });
    setShowBill(false);
    setShowCart(false);
    setShowCustomerForm(false);
  };

  // SAVE ORDER TO MYSQL
  const saveOrder = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer_name: customer.name,
            phone: customer.phone,
            table_number: customer.table,
            items: cart,
            subtotal: subtotal,
            tax: tax,
            service_charge: serviceCharge,
            grand_total: grandTotal,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to save order"
        );
      }

      console.log("Order saved:", data);

      setShowCustomerForm(false);
      setShowCart(false);
      setShowBill(true);
    } catch (error) {
      console.error("Order error:", error);
      alert(
        "Could not save the order. Please try again."
      );
    }
  };

  return (
    <div className="menu-page">

      {/* HEADER */}
      <header className="menu-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back Home
        </Link>

        <Link to="/" className="inner-logo">
          BELLA BISTRO
        </Link>

        <button
          className="order-button"
          onClick={() => setShowCart(true)}
        >
          <ShoppingBag size={18} />
          My Order

          {totalItems > 0 && (
            <span className="order-count">
              {totalItems}
            </span>
          )}
        </button>
      </header>

      {/* MENU HERO */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <p className="section-label">
            BELLA BISTRO
          </p>

          <h1>
            Our <span>Menu</span>
          </h1>

          <p>
            Carefully crafted dishes made with fresh
            ingredients and unforgettable flavors.
          </p>
        </div>
      </section>

      {/* MENU */}
      <main className="menu-content">
        {menuCategories.map((category) => (
          <section
            className="menu-category"
            key={category.title}
          >
            <div className="menu-category-heading">
              <p className="section-label">
                BELLA BISTRO
              </p>

              <h2>{category.title}</h2>
            </div>

            <div className="menu-grid">
              {category.items.map((item) => (
                <article
                  className="menu-card"
                  key={item.name}
                >
                  <div
                    className="menu-card-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <span>CHEF'S CHOICE</span>
                  </div>

                  <div className="menu-card-content">
                    <div className="menu-card-top">
                      <div>
                        <h3>{item.name}</h3>

                        <p>
                          {item.description}
                        </p>
                      </div>

                      <strong>
                        {formatPrice(item.price)}
                      </strong>
                    </div>

                    <button
                      className="add-order-button"
                      onClick={() =>
                        addToOrder(item)
                      }
                    >
                      <Plus size={17} />
                      Add to Order
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* BOTTOM ORDER CTA */}
      {cart.length > 0 && !showBill && (
        <div className="menu-order-cta">
          <div>
            <strong>
              {totalItems}{" "}
              {totalItems === 1
                ? "item"
                : "items"}{" "}
              in your order
            </strong>

            <span>
              Total: {formatPrice(subtotal)}
            </span>
          </div>

          <button
            className="primary-button"
            onClick={() => setShowCart(true)}
          >
            View My Order
            <ShoppingBag size={18} />
          </button>
        </div>
      )}

      {/* ORDER CART */}
      {showCart && (
        <div className="order-overlay">
          <div className="order-panel">

            <div className="order-header">
              <div>
                <p className="section-label">
                  BELLA BISTRO
                </p>

                <h2>Your Order</h2>
              </div>

              <button
                className="close-order"
                onClick={() =>
                  setShowCart(false)
                }
              >
                <X size={22} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-order">
                <ShoppingBag size={45} />

                <h3>
                  Your order is empty
                </h3>

                <p>
                  Add something delicious from
                  our menu.
                </p>

                <button
                  className="primary-button"
                  onClick={() =>
                    setShowCart(false)
                  }
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="order-items">
                  {cart.map((item) => (
                    <div
                      className="order-item"
                      key={item.name}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="order-item-details">
                        <h3>{item.name}</h3>

                        <p>
                          {formatPrice(item.price)}
                          {" "}each
                        </p>

                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.name
                              )
                            }
                          >
                            <Minus size={15} />
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.name
                              )
                            }
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="order-item-right">
                        <strong>
                          {formatPrice(
                            item.price *
                              item.quantity
                          )}
                        </strong>

                        <button
                          className="remove-item"
                          onClick={() =>
                            removeItem(
                              item.name
                            )
                          }
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>
                      {formatPrice(subtotal)}
                    </strong>
                  </div>

                  <div>
                    <span>Tax</span>
                    <strong>
                      {formatPrice(tax)}
                    </strong>
                  </div>

                  <div>
                    <span>Service Charge</span>
                    <strong>
                      {formatPrice(
                        serviceCharge
                      )}
                    </strong>
                  </div>

                  <div className="order-total">
                    <span>Total</span>
                    <strong>
                      {formatPrice(grandTotal)}
                    </strong>
                  </div>

                  <button
                    className="place-order-button"
                    onClick={() =>
                      setShowCustomerForm(true)
                    }
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CUSTOMER DETAILS */}
      {showCustomerForm && (
        <div className="customer-overlay">
          <div className="customer-form">

            <div className="customer-form-header">
              <div>
                <p className="section-label">
                  BELLA BISTRO
                </p>

                <h2>Your Details</h2>
              </div>

              <button
                className="close-order"
                onClick={() =>
                  setShowCustomerForm(false)
                }
              >
                <X size={22} />
              </button>
            </div>

            <p className="customer-intro">
              Please enter your details before
              placing your order.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                saveOrder();
              }}
            >
              <label>
                Full Name

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={customer.name}
                  onChange={(event) =>
                    setCustomer({
                      ...customer,
                      name: event.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Phone Number

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={customer.phone}
                  onChange={(event) =>
                    setCustomer({
                      ...customer,
                      phone: event.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Table Number

                <select
                  value={customer.table}
                  onChange={(event) =>
                    setCustomer({
                      ...customer,
                      table: event.target.value,
                    })
                  }
                  required
                >
                  <option value="">
                    Select table
                  </option>

                  <option value="Table 1">
                    Table 1
                  </option>

                  <option value="Table 2">
                    Table 2
                  </option>

                  <option value="Table 3">
                    Table 3
                  </option>

                  <option value="Table 4">
                    Table 4
                  </option>

                  <option value="Table 5">
                    Table 5
                  </option>
                </select>
              </label>

              <button
                type="submit"
                className="place-order-button"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PROFESSIONAL BILL */}
      {showBill && (
        <div className="bill-overlay">
          <div className="bill">

            <div className="bill-top">
              <CheckCircle
                size={48}
                strokeWidth={1.5}
              />

              <p className="section-label">
                ORDER CONFIRMED
              </p>

              <h2>BELLA BISTRO</h2>

              <p>
                Thank you for dining with us.
              </p>
            </div>

            <div className="bill-divider"></div>

            <div className="bill-customer">
              <div>
                <span>Customer</span>
                <strong>
                  {customer.name}
                </strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  {customer.phone}
                </strong>
              </div>

              <div>
                <span>Table</span>
                <strong>
                  {customer.table}
                </strong>
              </div>
            </div>

            <div className="bill-divider"></div>

            <div className="bill-items">
              <div className="bill-items-heading">
                <span>ITEM</span>
                <span>TOTAL</span>
              </div>

              {cart.map((item) => (
                <div
                  className="bill-item"
                  key={item.name}
                >
                  <div>
                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.quantity} ×{" "}
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  <strong>
                    {formatPrice(
                      item.price *
                        item.quantity
                    )}
                  </strong>
                </div>
              ))}
            </div>

            <div className="bill-divider"></div>

            <div className="bill-totals">
              <div>
                <span>Subtotal</span>
                <strong>
                  {formatPrice(subtotal)}
                </strong>
              </div>

              <div>
                <span>Tax 5%</span>
                <strong>
                  {formatPrice(tax)}
                </strong>
              </div>

              <div>
                <span>Service Charge 5%</span>
                <strong>
                  {formatPrice(
                    serviceCharge
                  )}
                </strong>
              </div>

              <div className="bill-grand-total">
                <span>Grand Total</span>
                <strong>
                  {formatPrice(grandTotal)}
                </strong>
              </div>
            </div>

            <div className="bill-footer">
              <p>
                Thank you for choosing
                <br />
                <strong>BELLA BISTRO</strong>
              </p>

              <small>
                Good food. Good moments.
              </small>
            </div>

            <div className="bill-actions">
              <button
                className="print-bill-button"
                onClick={() =>
                  window.print()
                }
              >
                <Printer size={18} />
                Print Bill
              </button>

              <button
                className="new-order-button"
                onClick={startNewOrder}
              >
                New Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          BELLA BISTRO
        </div>

        <p>
          Good food. Good moments.
        </p>

        <div className="footer-bottom">
          <span>
            © 2026 Bella Bistro
          </span>

          <span>
            Made with passion.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Menu;