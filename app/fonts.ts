import { Inter, Roboto_Mono,  Nunito, PT_Sans } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})


export const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"],   variable: "--font-nunito",
});
export const pt_sans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt_sans",
});