import {useRouter} from "next/router";
import {NextPageContext} from "next";
import commonGetServerSideProps from "@/src/pages-lib/commonGetServerSideProps";
import {getProductsQueryOptions} from "@/src/queries/products/getProductsQueryOptions";
import {ICatalogWebV1ServiceGetProductListParams} from "@/src/queries/products/types";
import {createProductsQueryKey} from "@/src/queries/products/createProductsQueryKey";
import {apiClient} from "@/src/app/services/axios/apiClient";

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
  const { slugs } = router.query;
  return <div>Category: {prettySlugs(slugs)}</div>;
}

export const getServerSideProps = async (ctx: NextPageContext) => commonGetServerSideProps(
    ctx,
    async (ctx: NextPageContext, reactQueryServerService) => {
        const { slugs } = ctx.query;
        const categoryPermalink = prettySlugs(slugs);

        const page = 1;
        const productsBody: ICatalogWebV1ServiceGetProductListParams = {
            storeId: `1`,
            categoryPermalink,
            page: `${page}`,
            perPage: `24`,
            filter: [{"key":"brand","values":[]},{"key":"permalinks","values":[]},{"key":"discounted","values":["1"]}],
            tenantId: 'sbermarket'
        }

        await reactQueryServerService.prefetchInfiniteQuery({
            queryKey: createProductsQueryKey(productsBody),
            queryFn: ({
                          queryKey: [
                              , , params
                          ]
                      }) => apiClient.catalog.catalogWebV1Swagger.catalogWebV1ServiceGetProductList(params),
            initialPageParam: productsBody.page,
        });

        return { props: {} };
    }
)
