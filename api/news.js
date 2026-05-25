module.exports = async function handler(req, res) {
  const { category = 'general', q = '', max = '9' } = req.query
  const apiKey = process.env.NEWS_API_KEY || '481eba476c0a46ca976c3daa22db608d'

  const endpoint = q
    ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&pageSize=${max}&sortBy=publishedAt&language=en&apiKey=${apiKey}`
    : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${max}&apiKey=${apiKey}`

  try {
    const upstream = await fetch(endpoint)
    const data = await upstream.json()
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    res.status(upstream.status).json(data)
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
}
