import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const frontend_url = "http://localhost:5174";

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address, discount = 0 } = req.body;

        const finalTotal = Math.max(amount - discount, 0);

        const newOrder = new orderModel({
            userId,
            items,
            amount: finalTotal,
            address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        const line_items = items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: `${item.name} (Qty: ${item.quantity})`,
                    description: "Helping a greener planet! 🌿 $0.50 Eco Contribution. Thanks! 💚"
                },
                unit_amount: 25,
            },
            quantity: 1
        }));

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Service Fee & Tip",
                    description: "Includes service fees & Tips"
                },
                unit_amount: 300,
            },
            quantity: 1,
        });

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Total Payable Amount",
                    description: "Final price after discounts and charges"
                },
                unit_amount: finalTotal * 100,
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${frontend_url}/myorders?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error processing order" });
    }
};

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === true) {
            // Mark order as paid
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" });
        } else {
            // Delete the order
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Listing orders for admin panel

const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({}).sort({ _id: -1 });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// api for updating order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus }
