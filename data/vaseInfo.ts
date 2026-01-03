export interface VaseData {
    name: string,
    image: string,
    price: string,
    description: string,
    productId: string,
}

export interface CartProductData {
    id?: string,
    name: string
    price: string
    description: string
    productId: string
    quantity: number
    size?: string
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

export const earthyGoodness = {
    name: "Earhty Goodness",
    image: "/productImages/blumentopf.jpg",
    price: "5€",
    description: "20cm x 20cm",
    productId: "5",
}

export const pinkElegantAmbient = {
    name: "Elegant Ambient - Pink",
    image: "/productImages/PinkElegantAmbient.jpg",
    price: "6€",
    description: "10cm x 45cm",
    productId: "4",
}

export const productList = [spiralComfort, elegantAmbient, modernMinimalistic, pinkElegantAmbient, earthyGoodness]
