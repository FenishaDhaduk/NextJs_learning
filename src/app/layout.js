import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import UseContextprovider from "@/context/provider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const ClientID = process.env.Client_ID
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleOAuthProvider clientId={ClientID}>
        <UseContextprovider>
          <ThemeProvider>
            <ToastContainer />
            <div>{children}</div>
          </ThemeProvider>
        </UseContextprovider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
