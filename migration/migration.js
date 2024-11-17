import mongoose from 'mongoose';
import xlsx from 'xlsx';
import Province from '../models/Province.js';
import City from '../models/City.js';
import Hall from '../models/Hall.js';
import DB_start from '../startup/db.js';
import dotenv from 'dotenv';

dotenv.config();
DB_start();




// Read the Excel file
const workbook = xlsx.readFile('./migration/نسخة من جميع محافظات مصر1.xlsx');
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

const provinceMap = {};



// Insert unique job categories
async function mig() {
    // // Clear existing data
    await Province.deleteMany({});
    await City.deleteMany({});
    await Hall.deleteMany({});

    for (const row of data) {
        const provinceName = row['المحافظه'].trim();
        if (!provinceMap[provinceName]) {
            let provinceDocument = await Province.findOne({ name: provinceName });
            if (!provinceDocument) {
                provinceDocument = new Province({ name: provinceName });
                await provinceDocument.save();
            }
            provinceMap[provinceName] = provinceDocument._id;
        }
    }
    for (const row of data) {
        // Ensure city uniqueness
        const existingCity = await City.findOne({ name: row['المدينه'], province: provinceMap[row['المحافظه'].trim()] });
        if (existingCity) {
            continue; // Skip if the city already exists
        }
        for (const row of data) {
            let existingCity = await City.findOne({ name: row['المدينه'], province: provinceMap[row['المحافظه'].trim()] });
            if (!existingCity) {
                existingCity = new City({
                    name: row['المدينه'],
                    province: provinceMap[row['المحافظه'].trim()]
                });
                await existingCity.save();

            }
            const hallDoc = new Hall({
                cityId: existingCity._id,
                name: row['اسم القاعه'] || "_",
                city: existingCity._id,
                phone: row['الهاتف'] || "_",
                facebook: row['فيسبوك'] || "_",
                instagram: row['انستجرام'] || "_",
                photos: row['photo'] || "_",
                location: row['اللوكيشن'] || "_",
            });
            await hallDoc.save();
        }

        console.log('Data populated successfully');

        mongoose.connection.close(() => {
            console.log('Database connection closed');
        });

        process.exit(0);
    }
}


mig();
