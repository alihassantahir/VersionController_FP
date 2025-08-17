export default function handler(req, res) {
  res.status(200).json({
    latest: "2.0.0",
  });
}