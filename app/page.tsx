import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import logo from "@/app/logo_65.png";
import Image from "next/image";
import Link from "next/link";
import Short from "@/components/short";

export default function Home() {
  return (
    <div className="container border border-border border-dashed relative font-sans min-h-screen mx-auto bg-gradient-to-t from-slate-50 to-green-100">
      <GridPattern strokeDasharray={"3 3"} className={cn("absolute inset-0")} />
      <header className="flex  items-center justify-between p-4 sm:p-6 lg:p-8">
        <div className="z-10">
          <Link href="/">
            <Image src={logo.src} alt="Logo" width={40} height={40} />
          </Link>
        </div>
      </header>
      <main className="min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
              Clean Links,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-green-600">
                Dirty Fast
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Turn long, messy links into clean, trackable short URLs in
              seconds. Fast, simple, and reliable
            </p>
          </div>
          <Short />
        </div>
      </main>
    </div>
  );
}
