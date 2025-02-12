const controller = {
  getAll: async (req, res) => {
    res.status(200).json({ message: "test bruv" });
  },
};

module.exports = controller;
