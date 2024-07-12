import { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);
  return { data, setData, err, setErr, loading, setLoading };
}
