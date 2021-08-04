const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const passport = require("passport");
const stripe = new Stripe(
  "sk_test_51JDBoyGdIVmQXHqKwQXFP1XJ0d42nRpAeQytLMWVeUw2xjThbWl3bLLey8nc5C3s5UDMrGmUfLITpK5Qq3XkitHk00IjmUwInB"
);

router.post(
  "/checkout",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { id, amount } = req.body;
    console.log(id);
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "HOUSE & WINES",
        payment_method: id,
        confirm: true,
      });
      console.log(payment);
      res.send({ message: "Sucessfull payment" });
    } catch (error) {
      res.json({ message: error.raw.message });
    }
  }
);

module.exports = router;
