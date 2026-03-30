// creating a promise
// createOrder, proceedToPayment, showOrderSummary, updateWalletBalance
const cart = ["item1", "item2", "item3"];
const emptyCart = [];
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) {
      resolve(Math.random().toString(36).substring(2, 15));
    } else {
      const error = new Error("Cart is empty");
      reject(error);
    }
  });
}

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          paymentId: Math.random().toString(36).substring(2, 15),
          message: "Payment successful for orderId: " + orderId,
        });
      }, 5000);
    } catch (error) {
      reject(error);
    }
  });
};

function showOrderSummary(paymentId) {
  return new Promise((resolve, reject) => {
    resolve("Order summary displayed for paymentId: " + paymentId);
  });
}

function updateWalletBalance() {
  return new Promise((resolve, reject) => {
    resolve("Wallet balance updated successfully");
  });
}

// consuming promise

createOrder(cart)
  .then((orderId) => {
    console.log("Order created with ID:", orderId);
    console.log("Proceeding to payment...");
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo.message);
    return showOrderSummary(paymentInfo.paymentId);
  })
  .then((orderSummary) => {
    console.log(orderSummary);
    return updateWalletBalance();
  })
  .then((wallet) => {
    console.log(wallet);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

// async await
async function handleOrder() {
  try {
    const orderId = await createOrder(cart);
    console.log("Await Order created with ID:", orderId);
    console.log("Proceeding to payment...");
    const paymentInfo = await proceedToPayment(orderId);
    console.log(paymentInfo.message);
    const orderSummary = await showOrderSummary(paymentInfo.paymentId);
    console.log(orderSummary);
    const wallet = await updateWalletBalance();
    console.log(wallet);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}
handleOrder();
