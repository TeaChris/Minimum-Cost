import './globals.css'

export const metadata = {
  title: 'Minimum Cost Landing Page',
  description: 'Your Number One Rental Service Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">{children}</body>
    </html>
  )
}
