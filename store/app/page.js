import { GET_Brands, GET_Category, GET_Items, GET_SLIDER } from "@/lib/GET_DATA";
import SwiperHeader from "./components/header/SwiperHeader";
import MainBrand from "./components/mainBrand/MainBrand";
import MainCat from "./components/mainCat/MainCat";
import ItemsSection from "./components/itemSection/ItemsSection";
export default async function Home() {
  const slider = await GET_SLIDER()
  const category = await GET_Category()
  const brand = await GET_Brands()
  const items = await GET_Items()

  return (
    <main>
      <SwiperHeader slider={slider.results} />
      <MainCat category={category} />
      <MainBrand brand={brand} />
      <ItemsSection items={items} />
    </main>
  )
}
