import { Index } from '@upstash/vector';

export type Product = {
    id: string
    imageId: string
    name: string
    size: 'S' | 'M' | 'L'
    color: 'white' | 'beige' | 'blue' | 'green' | 'purple'
    price: number
}

export const data = new Index<Product>()
