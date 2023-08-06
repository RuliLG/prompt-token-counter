import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prompt Token Counter for OpenAI Models',
  description: 'Online tool to count tokens from OpenAI models and prompts. Make sure your prompt fits within the token limits of the model you are using.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
