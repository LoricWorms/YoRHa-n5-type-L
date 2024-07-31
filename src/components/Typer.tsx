import { useEffect, useState } from "react";

/* TODO: Add props descriptions */

interface TyperProps {
  receivedText: string,
  callBack: () => any
  speed?: number
}
export const Typer = ({ receivedText, callBack, speed = 10 }: TyperProps) => {
  const [typingText, setTypingText] = useState<string>("")

  function startTyping() {
    if (typingText.length < receivedText.length) {
      setTimeout(() => {
        setTypingText(prev => prev += receivedText.charAt(typingText.length));
      }, speed);
    }
    else callBack()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(startTyping, [receivedText, typingText])

  if (!receivedText) return <></>

  return <p>{typingText}</p>
}