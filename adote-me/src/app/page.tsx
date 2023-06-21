import Image from 'next/image'
import {Navigation} from "@/app/components/navigation";

export default function Home() {
  return (
      <div className="bg-primary">
        <Navigation></Navigation>
      </div>
  )
}
