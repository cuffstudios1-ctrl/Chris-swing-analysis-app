import './globals.css'; import { Header } from '@/components/UI';
export const metadata={title:'Fairway Frame',description:'AI golf swing analysis'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><Header/><main className="mx-auto max-w-6xl p-4 sm:p-6">{children}</main></body></html>}
