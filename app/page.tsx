import Landing from "@/components/home/landing";
import Left from "@/components/home/left";
import Right from "@/components/home/right";


export default function Home() {
  
  return (
    <div className="w-full min-h-screen bg-gray-900  text-white p-4">
    <Landing/>
    <div className="flex lg:flex-row flex-col w-full h-[45vh] py-4 gap-4 ">
     < div className="flex h-[45vh]  flex-col lg:w-1/3 w-full  gap-4">
     <Left/>
      </div>
      < div className="flex h-[45vh] flex-col lg:w-2/3 w-full gap-4">
     <Right/>
      </div>
  
 
    </div>
  </div>
  );
}
