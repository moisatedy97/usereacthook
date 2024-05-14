"use client";

import { useEffect, useState } from "react";

const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

export default useHasMounted;
