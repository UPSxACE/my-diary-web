"use client";
import { useIntersection } from "@mantine/hooks";
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import useApi from "../../../../../api/hook";
import { GetNotesParams } from "../../../../../api/types";
import { NotesContext, OrderByOption } from "../../../_context/notes-context";

const orderByDictionary: Record<OrderByOption, GetNotesParams["order"]> = {
  "Latest First": "latest",
  "Oldest First": "oldest",
  "Title A-Z": "az",
  "Title Z-A": "za",
};

export default function useInfiniteRequest({
  intersection,
}: {
  intersection: ReturnType<typeof useIntersection>;
}) {
  const { entry } = intersection;

  const { menuOpen, setMenuOpen, orderBy, setOrderBy } =
    useContext(NotesContext);
  const api = useApi();

  async function fetchNotes({
    pageParam = "",
  }: QueryFunctionContext<QueryKey, string>) {
    const res = await api.getNotes({
      order: orderByDictionary[orderBy],
      cursor: pageParam,
    });
    return res;
  }

  const { isLoading, error, data, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["notes" + orderBy],
      queryFn: fetchNotes,
      initialPageParam: "",
      getNextPageParam: (lastPage, pages) => {
        const nextCursor = lastPage?.pagination?.cursor;
        if (nextCursor === "") {
          return null;
        }
        return lastPage?.pagination?.cursor;
      },
    });

  useEffect(() => {
    if (hasNextPage && entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [hasNextPage, entry?.isIntersecting, fetchNextPage]);

  return { isLoading, error, data, hasNextPage };
}
