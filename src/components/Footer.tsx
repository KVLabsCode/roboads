import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{SITE_NAME}</span>
            <span className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/for-advertisers" className="text-sm text-text-body hover:text-foreground transition-colors">
              For Brands
            </Link>
            <Link href="/for-manufacturers" className="text-sm text-text-body hover:text-foreground transition-colors">
              For Robot Companies
            </Link>
            <Link href="/contact" className="text-sm text-text-body hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
