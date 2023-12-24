export default function Footer() {
  const d = new Date()
  const year = d.getFullYear()

  return (
    <footer className="mx-auto w-full border-t border-zinc-900/10 p-4 dark:border-white/10">
      <p className="text-sm">&#169; Copyright {year}. All rights reserved.</p>
    </footer>
  )
}
