const mongoose = require('mongoose');
const Admin = require('../models/Admin');  // Import the Admin model

// Sample admin data
const adminData = [
  {
    email: 'admin1@example.com',
    password: 'adminpassword1',  // In a real app, password should be hashed
    name: 'Admin One',
  },
  {
    email: 'admin2@example.com',
    password: 'adminpassword2',  // In a real app, password should be hashed
    name: 'Admin Two',
  },
  {
    email: 'admin3@example.com',
    password: 'adminpassword3',  // In a real app, password should be hashed
    name: 'Admin Three',
  },
  {
    email: 'admin4@example.com',
    password: 'adminpassword4',  // In a real app, password should be hashed
    name: 'Admin Four',
  },
];

// Function to insert admin data into the database
const createAdmins = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect('mongodb+srv://myAtlasDBUser:2005@myatlasclusteredu.11maf.mongodb.net/nutritionassistant?retryWrites=true&w=majority&appName=myAtlasClusterEDU');

    for (const admin of adminData) {
      // Check if the admin email already exists
      const existingAdmin = await Admin.findOne({ email: admin.email });
      if (existingAdmin) {
        console.log(`❗Admin with email ${admin.email} already exists. Skipping insertion.`);
        continue; // Skip this admin
      }

      // If no existing admin, insert the new admin
      await Admin.create(admin);
      console.log(`✅Admin ${admin.name} inserted successfully!`);
    }
  } catch (err) {
    console.error('❌Error inserting admin data:', err.message);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Call the function to insert data
createAdmins();
