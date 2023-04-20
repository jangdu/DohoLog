import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewPost, getAllPosts } from "../api/firebase";

export default function usePost() {
  const queryClient = useQueryClient();

  const postsQuery = useQuery(["posts"], getAllPosts);

  const addPost = useMutation(({ post }) => addNewPost(post), {
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  });

  return { postsQuery, addPost };
}
