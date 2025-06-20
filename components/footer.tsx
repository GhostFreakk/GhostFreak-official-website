import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <Image src="/images/ghostfreak-logo.png" alt="GhostFreak Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold titanium-gradient">GhostFreak</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              An early-stage open source organization creating innovative tools for developers. Building the future of
              Linux distributions and developer environments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/ghostfreakos" className="text-gray-400 hover:text-white transition-colors">
                  GhostFreakOS
                </Link>
              </li>
              <li>
                <Link href="/projects/zenshell" className="text-gray-400 hover:text-white transition-colors">
                  ZenShell
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  All Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/GhostFreakOS"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 GhostFreak. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
