import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
    code: String,
    discountType: String,
    discountValue: Number,
    expiryDate: Date,
    usageLimit: Number,
    usedCount: { type: Number, default: 0 }
});

const Promo = mongoose.model("Promo", promoSchema);

async function createPromos() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Dscafe");

    const promoCodes = [
        { code: "HAPPYHOUR20", discountType: "amount", discountValue: 50, expiryDate: new Date("2025-06-01"), usageLimit: 5 },
        { code: "DSCAFE20", discountType: "amount", discountValue: 70, expiryDate: new Date("2025-08-01"), usageLimit: 3 },
        { code: "FOODIE25", discountType: "amount", discountValue: 25, expiryDate: new Date("2025-09-01"), usageLimit: 7 },
        { code: "LIVEVIBES10", discountType: "amount", discountValue: 30, expiryDate: new Date("2025-06-15"), usageLimit: 4 },
        { code: "BRUNCHBREW15 ", discountType: "amount", discountValue: 15, expiryDate: new Date("2024-03-24"), usageLimit: 4 }
    ];

    await Promo.insertMany(promoCodes);
    console.log("Promo codes created successfully!");
    mongoose.connection.close();
}

createPromos();
