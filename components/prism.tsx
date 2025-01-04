"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash";

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return null;
}
