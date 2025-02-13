async function authentication(req, res, next) {
  try {
    const token = req.cookies["ebuddy_recruitment"];
    if (!token) throw Error("unauthenticated");

    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAit_BWmuTFJ3dns_yKh727nVSmcq3l0-U`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
      }
    );

    if (!res.ok) {
      throw new Error("unauthenticated");
    }

    next();
  } catch (error) {
    if (error.message === "unauthenticated")
      res.status(401).json({ message: "Unauthenticated" });
    else res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = authentication;
