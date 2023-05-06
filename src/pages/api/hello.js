// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// API folder servers as the backend of application, not rendered on the frontend

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
