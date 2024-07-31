import { useEffect, useState } from "react"

export const LoadingDots = () => {
  const [dots, setDots] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setDots(prev => {
        if (prev.length === 3)
          return ""
        return prev + "."
      })
    }, 500)
  }, [dots])
  return <span>{dots}</span>
}