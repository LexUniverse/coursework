const Room = require('../models/room');

const createRoom = async (req, res) => {
    const { user1_id, user2_id } = req.body;

    // Устанавливаем expires_at на 24 часа вперед
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    try {
        const newRoom = await Room.create({
            user1_id,
            user2_id,
            expires_at: expiresAt,
        });
        res.status(201).json(newRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating room' });
    }
};

module.exports = {
    createRoom,
};