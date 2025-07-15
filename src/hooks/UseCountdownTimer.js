"use client"

import { useEffect, useState } from "react";

export function UseCountdownTimer(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const reset = () => {
    setSecondsLeft(initialSeconds);
    setIsRunning(true);
  };

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  const formattedTime = `${minutes}:${seconds}`;

  return {
    formattedTime,
    secondsLeft,
    isRunning,
    reset,
  };
}
