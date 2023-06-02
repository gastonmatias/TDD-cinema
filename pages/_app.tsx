import '@/styles/global.css'

import 'remixicon/fonts/remixicon.css'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
