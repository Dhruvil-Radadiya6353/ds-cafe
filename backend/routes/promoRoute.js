import express from "express";
import promoModel from "../models/promoModel.js";

const router = express.Router();

// Apply Promo Code
router.post("/apply", async (req, res) => {
    try {
        const { code } = req.body;

        const promo = await promoModel.findOne({ code });

        if (!promo) {
            return res.json({ success: false, message: "Invalid promo code" });
        }

        if (promo.usageLimit <= 0) {
            return res.json({ success: false, message: "Promo code expired" });
        }

        if (new Date() > promo.expiryDate) {
            return res.json({ success: false, message: "Promo code expired" });
        }

        // Apply discount
        res.json({ success: true, discountType: promo.discountType, discountValue: promo.discountValue });
    } catch (error) {
        res.json({ success: false, message: "Error applying promo code" });
    }
});

export default router;
