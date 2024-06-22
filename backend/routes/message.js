const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Send a message
router.post('/send', auth, async (req, res) => {
    try {
        const { receiverId, content } = req.body;

        // Check receiver exists
        const receiver = await User.findById(receiverId);
        if (!receiver) {
            return res.status(404).json({ error: 'Receiver not found' });
        }

        // Check sender and receiver roles
        if (!['admin', 'farmer'].includes(req.user.role) || !['admin', 'farmer'].includes(receiver.role)) {
            return res.status(400).json({ error: 'Invalid roles for messaging' });
        }

        const message = new Message({
            sender: req.user._id,
            receiver: receiverId,
            content
        });
        await message.save();

        res.status(200).json({ message: 'Message sent successfully', message });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get messages for a conversation
router.get('/conversation/:userId', auth, async (req, res) => {
    try {
        const { userId } = req.params;

        // Check conversation participant exists
        const participant = await User.findById(userId);
        if (!participant) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check sender and participant roles
        if (!['admin', 'farmer'].includes(req.user.role) || !['admin', 'farmer'].includes(participant.role)) {
            return res.status(400).json({ error: 'Invalid roles for messaging' });
        }

        const messages = await Message.find({
            $or: [
                { sender: req.user._id, receiver: userId },
                { sender: userId, receiver: req.user._id }
            ]
        }).sort({ createdAt: 1 });

        res.status(200).json({ messages });
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Mark messages as read
router.post('/read', auth, async (req, res) => {
    try {
        const { messageIds } = req.body;
        await Message.updateMany(
            { _id: { $in: messageIds }, receiver: req.user._id },
            { $set: { read: true } }
        );

        res.status(200).json({ message: 'Messages marked as read' });
    } catch (error) {
        console.error('Error marking messages as read:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
