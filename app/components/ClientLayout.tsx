"use client"
import { Suspense, ReactNode } from "react"
import dynamic from "next/dynamic"

const ProgressBar = dynamic(() => import("./ProgressBar").then(mod => ({ default: mod.ProgressBar })), {
  ssr: false,
})

const Navbar = dynamic(() => import("@/components/navbar").then(mod => mod.Navbar), {
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
})

interface ClientLayoutProps {
  children: ReactNode
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <Suspense fallback={null}>
        <ProgressBar />
      </Suspense>
      <Navbar />
      {children}
      <Suspense fallback={<div className="h-20 bg-[#122754]" />}>
        <Footer />
      </Suspense>
    </>
  )
}


