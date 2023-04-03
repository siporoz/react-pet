import React from "react"

interface ErrorMessageProps {
  error: string;
}

export function ErrorMassage({ error }: ErrorMessageProps) {
  return(
    <p className="text-center text-red-600">{ error }</p>
  )
}