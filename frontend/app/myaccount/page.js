"use client"
import ProblemList from "@/components/Home/problemList";
import Submission from "@/components/submission";
import { useState } from "react";

export default function MyAccountPage() {
    const [isRecentActive , setIsRecentActive] = useState(true)
  return (
    <div className="flex flex-col max-w-[1200px] my-20 mx-auto">
      <div className="flex gap-4 m-auto">
        <div className="flex gap-4 bg-base-200 py-10 px-16 rounded-lg font-semibold">
          <div className="w-24 rounded-lg overflow-hidden">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div className="flex flex-col py-2 justify-between">
            <span>Aditya Nandan</span>
            <span>solved: 12</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-base-200 px-16 py-4 rounded-lg ">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span className="text-green-400">Easy</span>
              <span>10/21</span>
            </div>
            <progress
              className="progress progress-success w-56"
              value="34"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span className="text-yellow-400">Medium</span>
              <span>10/21</span>
            </div>
            <progress
              className="progress progress-warning w-56"
              value="40"
              max="100"
            ></progress>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span className="text-red-400">Hard</span>
              <span>10/21</span>
            </div>
            <progress
              className="progress progress-error w-56"
              value="30"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div role="tablist" className="tabs tabs-bordered max-w-[250px] font-bold">
          <button role="tab" onClick={() => setIsRecentActive(true)} className={`tab ${isRecentActive ? 'tab-active' : ''}`}>
            Recent AC
          </button>
          <button role="tab" onClick={() => setIsRecentActive(false)} className={`tab ${!isRecentActive ? 'tab-active' : ''}`}>
            All Submissions
          </button>
        </div>
        {isRecentActive ? <ProblemList /> : <Submission/>}
      </div>
    </div>
  );
}