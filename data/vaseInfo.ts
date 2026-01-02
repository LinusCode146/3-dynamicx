export interface VaseData {
    name: string,
    image: string,
    price: string,
    description: string,
    productId: string,
}

export interface CartProductData {
    name: string
    price: string
    description: string
    productId: string
    quantity: number
}

export const spiralComfort = {
    name: "Spiral Comfort",
    image: "/productImages/spiralComfort.jpeg",
    price: "8€",
    description: "15cm x 30cm",
    productId: "1",
}

export const elegantAmbient = {
    name: "Elegant Ambient",
    image: "/productImages/elegantAmbient.jpeg",
    price: "6€",
    description: "10cm x 45cm",
    productId: "2",
}

export const modernMinimalistic = {
    name: "Modern Minimalistic",
    image: "/productImages/ModernMinimalistic.jpeg",
    price: "4€",
    description: "15cm x 35cm",
    productId: "3",
}

export const productList = [spiralComfort, elegantAmbient, modernMinimalistic]