import Header from "@/composite/Header"
import { HomeView } from "@/components/view/index"
export default function HomePage() {
  return (
    <div >
      <Header />
      <div className=" bg-[#E5E5E5]">
        <HomeView />
      </div>
    </div>
  )
}
