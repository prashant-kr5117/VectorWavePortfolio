import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import { ConsultationModalProvider } from "@/components/ConsultationModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VectorWave Technologies Zoho & ERP Solutions for Growth",
  description:
    "VectorWave Technologies offers Zoho & ERP Solutions tailored for growing businesses. Minimize downtime and enhance operational efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ConsultationModalProvider>
          <Header />
          {children}
        </ConsultationModalProvider>
        <Script id="zsiq-init" strategy="afterInteractive">
          {`window.$zoho = window.$zoho || {};
$zoho.salesiq = $zoho.salesiq || { ready: function () {} };`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq6f8903107a8b817d8ef6172d9f7859f5110c8b5761dd815ba383efcd446c75f420f72f74bd858ff51404ca330c48216c"
          strategy="afterInteractive"
        />
        <div id="google_translate_element" className="hidden" />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    { pageLanguage: 'en', includedLanguages: 'en,nl', autoDisplay: false },
    'google_translate_element'
  );
}`}
        </Script>
        <Script
          id="google-translate-script"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
