import {Fragment} from "react";
import type {useProductsInfiniteQuery} from "@/src/queries/products/useProductsInfiniteQuery";
import {ProductCard} from "@/src/entities/product/card/ProductCard";


type ProductsListProps = {
    categoryPermalink: string;
} & ReturnType<typeof useProductsInfiniteQuery>
export const ProductsList = ({
                                 categoryPermalink,
                                 data,
                                 fetchNextPage,
                                 hasNextPage,
                                 isFetchingNextPage,
                             }: ProductsListProps) => {
    return <>
        <div>Category: {categoryPermalink}</div>
        <main>
            <ul>
                {data?.pages.map((page, i) => (
                    <Fragment key={i}>
                        {page.products?.map((product) => (
                            <li key={product.id}>
                                <ProductCard product={product}/>
                            </li>
                        ))}
                    </Fragment>
                ))}
            </ul>
            <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
            </button>
        </main>
    </>
}