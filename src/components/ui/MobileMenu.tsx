import Link from "next/link";

export default function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}>
      <ul className="py-4">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item} className="px-6 py-3">
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-600 transition"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}