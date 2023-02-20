import clientPromise from "@/pages/lib/mongodb";

export default async function createOrder(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const newOrder = await db.collection("orders").insertOne({
      phoneName: req.body.phoneName,
      price: req.body.price,

      varientSelected: req.body.varientSelected,

      phoneValue: req.body.phoneValue,
      paymentMethod: req.body.paymentMethod,

      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,

      state: req.body.state,
      postCode: req.body.postCode,

      phone: req.body.phone,

      date: new Date(),

      status: "pending",
    });

    res.json({
      message: "Order created successfully",
      orderId: newOrder.insertedId,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to create order" });
  }
}
