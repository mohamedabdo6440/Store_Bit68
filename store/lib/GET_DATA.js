export const Slider = "https://api-task.bit68.com/en/api/slider_image/";
export const Category = "https://api-task.bit68.com/en/api/categories/";
export const Brands = "https://api-task.bit68.com/en/api/brands/";
export const Items = "https://api-task.bit68.com/en/api/items/";


export async function GET_SLIDER() {
    const res = await fetch(Slider)
    if (!res.ok) throw new Error("Slider Not Load Data!")
    return res.json();
}

export async function GET_Category() {
    const res = await fetch(Category)
    if (!res.ok) throw new Error("Category Not Load Data!")
    return res.json();
}

export async function GET_Brands() {
    const res = await fetch(Brands)
    if (!res.ok) throw new Error("Brands Not Load Data!")
    return res.json();
}

export async function GET_Items() {
    const res = await fetch(Items)
    if (!res.ok) throw new Error("Items Not Load Data!")
    return res.json();
}