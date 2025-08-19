import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discountType: { type: String, enum: ["percentage", "fixed"], required: true },
    discountValue: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
    usageLimit: { type: Number, default: 1 }
});

const promoModel = mongoose.models.promo || mongoose.model("promo", promoSchema);
export default promoModel;
