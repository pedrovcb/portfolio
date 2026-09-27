const SpotifyApi = {
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
}

const basic = Buffer.from(
  `${SpotifyApi.client_id}:${SpotifyApi.client_secret}`
).toString('base64')

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

let cachedAccessToken = null
let tokenExpiresAt = 0

async function getAccessToken() {
  // Return cached token if still valid
  if (cachedAccessToken && Date.now() < tokenExpiresAt) {
    return cachedAccessToken
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SpotifyApi.refresh_token,
    }),
  })

  const data = await response.json()
  if (data.access_token) {
    cachedAccessToken = data.access_token
    tokenExpiresAt = Date.now() + (data.expires_in * 1000) - 10000 // Refresh 10s before expiry
    return data.access_token
  }
  throw new Error('Failed to get access token')
}

export async function GET() {
  try {
    const accessToken = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (response.status === 204) {
      return Response.json({ isPlaying: false, trackName: '', artistName: '', albumName: '', albumImageUrl: null, progressMs: 0, durationMs: 0, externalUrl: '' })
    }

    if (!response.ok) {
      return Response.json({ error: 'Spotify API error' }, { status: response.status })
    }

    const data = await response.json()
    const item = data.item

    return Response.json({
      isPlaying: data.is_playing,
      trackName: item?.name || '',
      artistName: item?.artists?.[0]?.name || '',
      albumName: item?.album?.name || '',
      albumImageUrl: item?.album?.images?.[0]?.url || null,
      progressMs: data.progress_ms || 0,
      durationMs: item?.duration_ms || 0,
      externalUrl: item?.external_urls?.spotify || '',
    })
  } catch (error) {
    console.error('Spotify API Error:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
