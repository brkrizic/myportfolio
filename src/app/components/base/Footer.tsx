
export default function Footer() {
  return (
    <footer className="w-full p-6 mt-12 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© 2025 Bruno Krizic. All rights reserved.</p>
        <div className="flex justify-center space-x-6 my-2">
          <a href="https://github.com/brkrizic" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/@bruno17111999" target="_blank">Twitter</a>
        </div>
        <div className="mt-2">
          <a href="#contact" className="hover:text-white transition">Contact Me</a>
        </div>
    </footer>
  );
}
