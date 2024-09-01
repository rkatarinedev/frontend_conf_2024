import {useRouter} from "next/router";
import {NextPageContext} from "next";
import commonGetServerSideProps from "@/src/pages-lib/commonGetServerSideProps";
import {getProductsQueryOptions} from "@/src/queries/products/getProductsQueryOptions";
import {ICatalogWebV1ServiceGetProductListParams} from "@/src/queries/products/types";
import {useProductsInfiniteQuery} from "@/src/queries/products/useProductsInfiniteQuery";
import {ProductsList} from "@/src/entities/category/ProductsList";

function prettySlugs(slugs?: string | string[]) {
    if (!slugs) {
        return '';
    }
    if (typeof slugs === 'string') {
        return slugs;
    }
    return slugs.join('/');
}

export default function CategoryPage() {
    const router = useRouter();
    const {slugs} = router.query;
    const categoryPermalink = prettySlugs(slugs);

    const productsBody: ICatalogWebV1ServiceGetProductListParams = {
        storeId: `1`,
        categoryPermalink,
        page: `1`,
        perPage: `24`,
        filter: [{"key": "brand", "values": []}, {"key": "permalinks", "values": []}, {
            "key": "discounted",
            "values": ["1"]
        }],
        tenantId: 'sbermarket'
    }

    const result= useProductsInfiniteQuery(productsBody)

    return <ProductsList categoryPermalink={categoryPermalink} {...result}/>
}

export const getServerSideProps = async (ctx: NextPageContext) => commonGetServerSideProps(
    ctx,
    async (ctx: NextPageContext, reactQueryServerService) => {
        const {slugs} = ctx.query;
        const categoryPermalink = prettySlugs(slugs);

        const productsBody: ICatalogWebV1ServiceGetProductListParams = {
            storeId: `1`,
            categoryPermalink,
            page: `1`,
            perPage: `24`,
            filter: [
                {"key": "brand", "values": []},
                {"key": "permalinks", "values": []},
                {"key": "discounted", "values": ["1"]}
            ],
            tenantId: 'sbermarket'
        }

        await reactQueryServerService.prefetchInfiniteQuery(getProductsQueryOptions(productsBody));

        return {props: {}};
    }
)
