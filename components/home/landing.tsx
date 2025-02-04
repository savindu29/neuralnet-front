import { MdOutlineRemoveRedEye } from "react-icons/md";

import { LuBrain } from "react-icons/lu";
export default function Landing() {
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-sky-950 to-indigo-950 min-h-[50vh] flex flex-col p-8 justify-center items-start">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl ">
        {/* Text Content */}
        <div className="text-white flex-1 space-y-6">
          <div className="mb-6">
            <span className="text-purple-400 font-semibold text-lg">NeuralNet Research Initiative</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Explainable AI for Multi-Class 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Motor Imagery Classification
              </span>
            </h1>
            <p className="text-lg text-sky-100 leading-relaxed">
              Decoding neural patterns with transparent AI to revolutionize 
              brain-computer interfaces. Our framework combines deep learning 
              with neurodynamic visualization for actionable insights.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-3xl">
            <div className="flex items-center gap-3 py-2 px-4 bg-white/10 rounded-lg">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <LuBrain className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-lg">Multi-Class Motor Imagery Decoding</span>
            </div>
            
            <div className="flex items-center gap-3 py-2 px-4 bg-white/10 rounded-lg">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <MdOutlineRemoveRedEye className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-lg">Interpretable AI Visualizations</span>
            </div>
          </div>

          
        </div>

        {/* Visualization Placeholder */}
      
      </div>
    </div>
  );
}

// Example icons (install react-icons or use your own)


