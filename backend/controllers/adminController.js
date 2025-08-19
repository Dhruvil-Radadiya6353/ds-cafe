import Order from "../models/orderModel.js";
import Food from "../models/foodModel.js";
import User from "../models/userModel.js";

export const topItems = async (req, res) => {
    try {
        const orderedItems = await Order.aggregate([
            { $unwind: "$items" },
            {
                $group: {
                    _id: "$items.name",
                    totalQuantity: { $sum: "$items.quantity" },
                },
            },
        ]);

        const allFoods = await Food.find({}, { name: 1, _id: 0 });

        const allItems = allFoods.map((food) => {
            const orderedItem = orderedItems.find((item) => item._id === food.name);
            return {
                _id: food.name,
                totalQuantity: orderedItem ? orderedItem.totalQuantity : 0,
            };
        });

        res.json(allItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const topUsers = async (req, res) => {
    try {
        const usersWithOrders = await Order.aggregate([
            {
                $group: {
                    _id: "$userId",
                    totalOrders: { $sum: 1 }, 
                    totalSpent: { $sum: "$amount" }, 
                },
            },
            { $sort: { totalOrders: -1 } }, // Sort by highest orders
            { $limit: 5 },
        ]);

        // Fetch user names from user model
        const topUsers = await Promise.all(
            usersWithOrders.map(async (user) => {
                const userInfo = await User.findById(user._id, { name: 1 });
                return {
                    name: userInfo ? userInfo.name : "Unknown User",
                    totalOrders: user.totalOrders,
                    totalSpent: user.totalSpent,
                };
            })
        );

        res.json(topUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get total revenue from all completed orders
export const revenue = async (req, res) => {
    try {
        const total = await Order.aggregate([
            { $match: { payemnt: true } }, 
            {
                $group: {
                    _id: null,
                    revenue: { $sum: "$amount" }
                }
            }
        ]);

        res.json({ revenue: total[0]?.revenue || 0 });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
