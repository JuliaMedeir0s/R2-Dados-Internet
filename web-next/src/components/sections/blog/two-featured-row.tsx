import type { BlogPost } from "@/lib/blog";
import { PostCard } from "./post-card";

// Par de cards médios lado a lado ("Internet Cai Toda Hora?" / "Home Office
// Sem Travar", no PDF).
export function TwoFeaturedRow({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} sizes="(min-width: 640px) 528px, 100vw" />
      ))}
    </div>
  );
}
