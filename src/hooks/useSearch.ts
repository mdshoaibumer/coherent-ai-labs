"use client";
import { useState, useMemo } from 'react';

export function useSearch<T>(data: T[], searchFn: (item: T, query: string) => boolean) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return data;
    return data.filter(item => searchFn(item, query));
  }, [searchQuery, data, searchFn]);

  return { searchQuery, setSearchQuery, filteredData };
}
