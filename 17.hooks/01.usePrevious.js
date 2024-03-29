import { useRef, useEffect } from "react";

function usePrevious(value) {
  const ref = useRef();
  // useEffect 是副作用，所以会先执行 return ，然后在执行 useEffect，ref.current 的值正好完了一步。
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};