import { type Product, data } from '.'
import * as dotenv from 'dotenv'

dotenv.config()

const getRandomPrice = () => {
    const PRICES = [9.99, 19.99, 29.99, 39.99, 49.99]
    return PRICES[(Math.random() * PRICES.length)]
}

const COLORS = ['white', 'beige', 'blue', 'green', 'purple'] as const
const SIZE = ['S', 'M', 'L'] as const

const seed = async () => {
    const products: Product[] = []

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < COLORS.length; j++) {
            for (let k = 0; k < SIZE.length; k++) {
                const size = SIZE[k]
                const color = COLORS[j]
                products.push({
                    id: `${color}-${size}-${i + 1}`,
                    imageId: `/${color}_${i + 1}.png`,
                    color,
                    name: `${color.slice(0, 1).toUpperCase() + color.slice(1)}shirt${i}`,
                    size,
                    price: getRandomPrice(),
                })
            }
        }
    }

    const SIZE_MAP = {
        S: 0,
        M: 1,
        L: 2,
    }

    const COLOR_MAP = {
        white: 0,
        beige: 1,
        blue: 2,
        green: 3,
        purple: 4,
    }

    await data.upsert(
        products.map((item) => ({
            id: item.id,
            vector: [COLOR_MAP[item.color], SIZE_MAP[item.size], item.price],
            metadata: item
        }))
    )
}

seed()