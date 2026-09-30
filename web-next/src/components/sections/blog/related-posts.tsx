import type { BlogCategoria, BlogPost } from "@/lib/blog";
import { Categorias } from "./categorias";
import { PostCard } from "./post-card";

// "Postagens Relacionadas": fileira de pills de categoria + grid de 3 cards
// (mesma categoria do artigo primeiro, completando com os mais recentes).
export function RelatedPosts({
  posts,
  categorias,
}: {
  posts: BlogPost[];
  categorias: BlogCategoria[];
}) {
  if (posts.length === 0) return null;

  return (
    <div>
      <Categorias categorias={categorias} />

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} sizes="(min-width: 640px) 360px, 100vw" />
        ))}
      </div>
    </div>
  );
}
