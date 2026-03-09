import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Kovio" width={32} height={32} className="w-8 h-8 rounded-md" />
            <span className="text-sm font-semibold text-foreground">
              {SITE_NAME}
            </span>
            <span className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/brands"
              className="text-sm text-text-body hover:text-foreground transition-colors"
            >
              Brands
            </Link>
            <Link
              href="/oem"
              className="text-sm text-text-body hover:text-foreground transition-colors"
            >
              OEMs
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-body hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
