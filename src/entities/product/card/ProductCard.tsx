import Link from "next/link";
import {
    CatalogCatalogWebV1Swagger
} from "@/src/.api-client/catalog/catalog_web_v1.swagger/data-contracts";
import noImage from '../assets/noImageIllustration.svg';
import styles from './ProductCard.module.css';

interface IProductCardProps {
    product: CatalogCatalogWebV1Swagger.CatalogApiV3Product
}

export const ProductCard = ({product}: IProductCardProps) => {
    console.log('ProductCard', product);
    return (
        <Link href={product.canonicalUrl ?? '/metro'}>
            <div>
                <img src={product.imageUrls?.[0] ?? noImage} alt={product.name} className={styles.img}/>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        </Link>
    )
}