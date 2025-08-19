import promoModel from "../models/promoModel.js";
import orderModel from "../models/orderModel.js";

// Create a new promo code
const createPromoCode = async (req, res) => {
    try {
        const { code, discountType, discountValue, expiryDate, usageLimit } = req.body;

        // Ensure promo code doesn't exist
        let existingPromo = await promoModel.findOne({ code });
        if (existingPromo) {
            return res.status(400).json({ success: false, message: "Promo code already exists!" });
        }

        const newPromo = new promoModel({ code, discountType, discountValue, expiryDate, usageLimit });
        await newPromo.save();

        res.json({ success: true, message: "Promo code created!", promo: newPromo });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Apply a promo code
const applyPromoCode = async (req, res) => {
    try {
        const { code, userId, orderAmount } = req.body;

        // Check if promo code exists
        let promo = await promoModel.findOne({ code });
        if (!promo) {
            return res.status(404).json({ success: false, message: "Invalid promo code!" });
        }

        // Check if promo is expired
        if (new Date(promo.expiryDate) < new Date()) {
            return res.status(400).json({ success: false, message: "Promo code expired!" });
        }

        // Check usage limit
        if (promo.usedCount >= promo.usageLimit) {
            return res.status(400).json({ success: false, message: "Promo code usage limit reached!" });
        }

        // Calculate discount
        let discount = promo.discountType === "percentage"
            ? (orderAmount * promo.discountValue) / 100
            : promo.discountValue;

        let discountedAmount = Math.max(0, orderAmount - discount);

        // Update promo usage count
        promo.usedCount += 1;
        await promo.save();

        res.json({ success: true, message: "Promo applied!", discountedAmount });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Delete a promo code
const deletePromoCode = async (req, res) => {
    try {
        const { code } = req.params;

        let promo = await promoModel.findOneAndDelete({ code });

        if (!promo) {
            return res.status(404).json({ success: false, message: "Promo code not found!" });
        }

        res.json({ success: true, message: "Promo code deleted!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { createPromoCode, applyPromoCode, deletePromoCode };
