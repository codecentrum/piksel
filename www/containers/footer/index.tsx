export default function Footer() {
  const d = new Date()
  const year = d.getFullYear()

  return (
    <footer className="mx-auto w-full border-t border-gray-200 px-4 py-4 lg:w-3/4 lg:px-0">
      <p>&#169; Copyright {year}. All rights reserved.</p>
    </footer>
  )
}
