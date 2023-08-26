import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is a Dashboard for a private ticket bot",
  authors: [{ name: 'Ziath', url: 'https://github.com/ziad-gg' }],
  assets: ['https://cdn.discordapp.com/avatars/860865950945378325/72f8505946186d114ae54a9c22f4c133.png?size=1024']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
