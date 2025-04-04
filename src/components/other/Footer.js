import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#fbf6f3] text-[#000000] py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Logo</h2>
          </div>

          {/* INFO Column */}
          <div>
            <h3 className="text-sm font-medium uppercase mb-6">INFO</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-[#233d4d]">
                  Cats
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#233d4d]">
                  Dogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#233d4d]">
                  Other Pets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#233d4d]">
                  Join as Organization
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT Column */}
          <div>
            <h3 className="text-sm font-medium uppercase mb-6">ABOUT</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-[#233d4d]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#233d4d]">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US Column */}
          <div>
            <h3 className="text-sm font-medium uppercase mb-6">CONTACT US</h3>
            <address className="not-italic space-y-4">
              <p>
                1901 Thornridge Cir. Shiloh,
                <br />
                Hawaii 81063
              </p>
              <p>+1 891 989-11-91</p>
              <p>
                <Link href="mailto:hello@logoipsum.com" className="hover:text-[#233d4d]">
                  hello@logoipsum.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Row with Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#00000020]">
          <div className="text-sm text-[#00000080] mb-4 md:mb-0">© 2023 — Copyright</div>
          <div className="flex space-x-6">
            <Link href="#" aria-label="Instagram" className="text-[#000000] hover:text-[#233d4d]">
              <Instagram size={24} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-[#000000] hover:text-[#233d4d]">
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

