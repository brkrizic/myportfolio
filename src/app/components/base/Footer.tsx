import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full p-6 mt-12 border-t border-gray-800 text-center text-sm text-gray-500">
      <p>© 2025 Bruno Krizic. All rights reserved.</p>
      <div className="flex justify-center space-x-6 my-2">
        <a
          href="https://github.com/brkrizic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-k-99832a29a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com/@bruno17111999"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaTwitter size={20} />
        </a>
      </div>
      <div className="mt-2">
        <a href="#contact" className="hover:text-white transition">
          Contact Me
        </a>
      </div>
    </footer>
  );
}
