"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("cd88a266-50ea-4ceb-9573-80bb1fe5b3b1");
  }, []);

  return null;
};
