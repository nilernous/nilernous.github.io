import { useState } from "react";

// Returns [copiedKey, copy]. `copiedKey` holds the key of the last copied item for `resetMs`.
export default function useCopyToClipboard(resetMs = 2000) {
  const [copiedKey, setCopiedKey] = useState(null);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), resetMs);
  };

  return [copiedKey, copy];
}
