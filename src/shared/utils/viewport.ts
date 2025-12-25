import { useEffect, type RefObject } from "react"

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  excludeRef?: RefObject<HTMLElement | null>
) =>
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (excludeRef?.current && excludeRef.current?.contains(e.target)) {
        return
      }

      if (ref?.current && !ref.current?.contains(e.target)) {
        callback()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [ref, callback, excludeRef])
