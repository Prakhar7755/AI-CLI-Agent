import dotenv from 'dotenv'
dotenv.config()

const config = {
  googleApiKey: process.env.GOOGLE_API_KEY || '',
  model: process.env.ORBITAL_MODEL || 'gemini-1.5-flash',
}
export { config }
