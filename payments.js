const express = require('express');
const router = express.Router();

// Placeholder: add FNB integration logic

router.post('/initiate-payment', (req, res) => {
  res.json({ paymentUrl: 'https://fnb.co.za/payment/link-placeholder' });
});

module.exports = router;