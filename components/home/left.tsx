

import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Left() {
  return (
    <div className="flex flex-col w-full p-6 rounded-xl bg-white shadow-lg text-black h-full">
      <div className="flex justify-between items-center mb-3  border-b ">
        <div className="text-black text-4xl font-semibold mb-2">Cosmetic</div>
        <Button variant="ghost" className="flex items-center w-32 text-8xl hover:bg-white">
  <MoveRight />
</Button>

      </div>
      <div className="flex justify-between items-center mb-3 border-b ">
        <div className="text-black text-4xl font-semibold mb-3">Nutritions</div>
        <Button variant="ghost" className="flex items-center w-32 text-8xl hover:bg-white">
  <MoveRight />
</Button>

      </div>

   

    
    </div>
  );
}
