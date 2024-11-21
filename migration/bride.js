import mongoose from "mongoose";
import XLSX from "xlsx";
import DB_start from "../startup/db.js";
import dotenv from "dotenv";
import Bride from "../models/bride.js";

dotenv.config();
DB_start();


// Load Excel file
const filePath = './migration/نسخة من عروسه اكسل.xlsx'; // Path to your Excel file
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0]; // Use the first sheet
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Transform data into MongoDB-compatible format
const transformedData = data.map(row => ({
    imageUrl: row[Object.keys(row)[0]], // First column
    description: (row[Object.keys(row)[1]] || "No description available").trim() // Second column
}));

await Bride.deleteMany({}); // Clear existing data

// Insert data into MongoDB
const loadData = async () => {
    try {
        await Bride.insertMany(transformedData);
        console.log('Data successfully loaded into MongoDB');
    } catch (error) {
        console.error('Error loading data:', error);
    } finally {
        mongoose.disconnect();
    }
};

loadData();