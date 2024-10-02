const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { email, username, firstName, lastName, bio } = req.body;

    if (!email || !username || !firstName || !lastName) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newUser = new User({
      userID: Date.now().toString(),
      email,
      username,
      firstName,
      lastName,
      bio,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { userID: req.params.userId },
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
