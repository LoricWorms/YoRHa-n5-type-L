import { useEffect, useState } from "react";

/**
 * Props for the Typer component.
 */
interface TyperProps {
  /**
   * The text to be typed out.
   */
  receivedText: string;

  /**
   * The callback function to be called once typing is complete.
   */
  callBack: () => any;

  /**
   * The speed at which the text is typed, in milliseconds. Default is 10.
   */
  speed?: number;
}

/**
 * Typer component types out the received text character by character at a given speed.
 *
 * @param {TyperProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element that represents the Typer component.
 */
export const Typer = ({ receivedText, callBack, speed = 10 }: TyperProps): JSX.Element => {
  const [typingText, setTypingText] = useState<string>("");

  /**
   * Function to start the typing effect. It updates the typingText state by adding one character
   * at a time from receivedText until the entire text is typed out, then calls the callBack function.
   */
  function startTyping() {
    if (typingText.length < receivedText.length) {
      setTimeout(() => {
        setTypingText(
          (prev) => (prev += receivedText.charAt(typingText.length))
        );
      }, speed);
    } else callBack();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(startTyping, [receivedText, typingText]);

  if (!receivedText) return <></>;

  return <p>{typingText}</p>;
};
