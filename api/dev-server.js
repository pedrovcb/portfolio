import { createServer } from 'http'
import { GET } from './spotify.js'

const server = createServer(async (req, res) => {
  // Verifica se é a rota correta
  if (req.url === '/api/spotify' && req.method === 'GET') {
    try {
      // Chama a função da API (que já lê process.env)
      const response = await GET()
      const data = await response.json()
      
      res.writeHead(response.status || 200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(data))
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: error.message }))
    }
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(3001, () => {
  console.log('🟢 API Server rodando em http://localhost:3001')
  console.log('ℹ️  Certifique-se de que suas credenciais estão no .env.local')
})