"use client"
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";  // Import Link for navigation

export default function Left() {
  return (
    <div className="flex flex-col w-full p-6 rounded-xl bg-white shadow-lg text-black h-full">
      {/* Classify EEG Data section */}
      <Link href="/classify">
      <div className="flex justify-between items-center mb-3 border-b">
        <div className="text-black text-2xl font-semibold mb-2">Classify EEG Data</div>
        
          <Button variant="ghost" className="flex items-center w-32 text-8xl hover:bg-white">
            <MoveRight />
          </Button>
       
      </div>
      </Link>

      {/* XAI section
      <div className="flex justify-between items-center mb-3 border-b">
        <div className="text-black text-2xl font-semibold mb-3">Explain Model Prediction (XAI)</div>
        <Link href="/xai">
          <Button variant="ghost" className="flex items-center w-32 text-8xl hover:bg-white">
            <MoveRight />
          </Button>
        </Link>
      </div> */}
    </div>
  );
}
