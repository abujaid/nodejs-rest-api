const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>
{
    res.status(200).json({
        message: 'Order are fetched'
    })
});

router.post('/', (req, res, next) =>
{
    res.status(201).json({
        message: 'Order was created'
    })
});

router.get('/:orderId', (req, res, next) =>
{
    const id = req.params.orderId;

    res.status(200).json({
        message: 'Order details',
        id: id
    })



});
router.patch('/:orderId', (req, res, next) =>
{
    const id = req.params.orderId;

    res.status(200).json({
        message: 'Updated order details',
        id: id
    })
})
router.delete('/:orderId', (req, res, next) =>
{
    const id = req.params.orderId;

    res.status(200).json({
        message: 'Deleted order',
        id: id
    })
})
module.exports = router;