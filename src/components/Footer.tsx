import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-glow bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gradient-cyan">{SITE_NAME}</span>
            <span className="text-muted text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:hello@kovio.ai"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/for-manufacturers"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Manufacturers
            </Link>
            <Link
              href="/for-advertisers"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Advertisers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
