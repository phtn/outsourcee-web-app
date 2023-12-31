import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navbar from './_components/navbar'

const outfit = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Outsourcee App',
	description: 'Simplify your workload.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={outfit.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
