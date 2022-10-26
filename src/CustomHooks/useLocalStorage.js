import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem = initialValue;

        if (!localStorage.getItem(itemName)) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName));
        }

        setItems(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 5000);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { items, saveItem, loading, error };
}
