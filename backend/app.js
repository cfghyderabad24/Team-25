require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const ledgerRoutes = require('./routes/ledger');
<<<<<<< HEAD
const cors = require('cors');
=======
const messageRoutes = require('./routes/message');
const createLedgerRoutes= require('./routes/createLedger');

>>>>>>> 91694951c10ae78b4b548f183958c72835368892
const app = express();
app.use(bodyParser.json());
app.use(cors());
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Use auth, ledger, and messaging routes
app.use('/auth', authRoutes);
app.use('/ledger', ledgerRoutes);
app.use('/createLedger', createLedgerRoutes);
app.use('/messages', messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
