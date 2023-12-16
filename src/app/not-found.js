'use client'
import { useRouter } from "next/navigation"
export default function NotFound() {
  const router = useRouter()
  return (
    <div>
      mere pass to hai hi nhi
      <button onClick={() => router.push("/")}>login</button>
    </div>
  )
}
