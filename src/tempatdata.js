const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongoose = require('mongoose');
const Reward = require('./models/modelhadiah');

console.log('URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  await Reward.deleteMany();

  await Reward.insertMany([
    { name: 'Emas 10 gram', quota: 1 },
    { name: 'Smartphone X', quota: 5 },
    { name: 'Smartwatch Y', quota: 10 },
    { name: 'Voucher Rp100.000', quota: 100 },
    { name: 'Pulsa Rp50.000', quota: 500 },
  ]);

  console.log('Seed data inserted');
  process.exit();
}

seed();
