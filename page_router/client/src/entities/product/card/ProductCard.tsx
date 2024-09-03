import Link from "next/link";
import {CatalogApiV3Product} from "@/src/api-client/data-contracts";
import noImage from '../assets/noImageIllustration.svg';
import styles from './ProductCard.module.css';

interface IProductCardProps {
    product: CatalogApiV3Product
}

export const ProductCard = ({product}: IProductCardProps) => {
    return (
        <Link href={product.canonicalUrl ?? '/metro'}>
            <div>
                <img src={product.imageUrl ?? noImage} alt={product.name} className={styles.img}/>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        </Link>
    )
}