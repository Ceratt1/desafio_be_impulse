export default function ButtonNavBar({ children }: { children: React.ReactNode }) {
    return <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">{children}</button>
  }