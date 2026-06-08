import { ReactNode } from "react";

export function renderWithEmphasis(text: string, emphasis: string): ReactNode {
  const index = text.indexOf(emphasis);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <strong>{emphasis}</strong>
      {text.slice(index + emphasis.length)}
    </>
  );
}
