const { getDocs, addDoc, doc, updateDoc } = require("firebase/firestore");
const { usersCollection, db } = require("../config");

const controller = {
  getUsers: async (_, res) => {
    try {
      const snapshot = await getDocs(usersCollection);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  createUser: async (req, res) => {
    try {
      const { totalAverageWeightRatings, numberOfRents, recentlyActive } =
        req.body;
      const newUser = {
        totalAverageWeightRatings: +totalAverageWeightRatings,
        numberOfRents: +numberOfRents,
        recentlyActive: +recentlyActive,
      };

      const docRef = await addDoc(usersCollection, newUser);

      res.status(201).json({ id: docRef.id, ...newUser });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { totalAverageWeightRatings, numberOfRents, recentlyActive } =
        req.body;

      const userRef = doc(db, "users", id);

      const updateData = {
        totalAverageWeightRatings: +totalAverageWeightRatings,
        numberOfRents: +numberOfRents,
        recentlyActive: +recentlyActive,
      };

      await updateDoc(userRef, updateData);

      res.status(200).json({
        message: "Success update data",
        data: {
          id,
          data: updateData,
        },
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

module.exports = controller;
