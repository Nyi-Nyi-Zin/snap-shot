import Products from "@/components/products";
import SearchBox from "@/components/products/search-box";
import { db } from "@/server";
import { productVariants } from "@/server/schema";
import TagFilter from "@/components/products/tag-filter";

export default async function Home() {
  const productwithVariants = await db.query.productVariants.findMany({
    with: {
      variantImages: true,
      variantTags: true,
      product: true,
    },
    // orderBy: (productVariants, { desc }) => [desc(productVariants.id)],
  });

  return (
    <main>
      <SearchBox productWithVariants={productwithVariants} />
      <TagFilter />
      <Products productWithVariants={productwithVariants} />
    </main>
  );
}
