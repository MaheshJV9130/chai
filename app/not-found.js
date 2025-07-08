import Link from "next/link";
import React from "react";

const Page = () => {
 
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-start items-center">
      <img src="/no-search.gif" alt="404" />
      <span className="flex justify-center items-center gap-2 text2xl font-bold">
        <p className="text-red-500">Page Not Found</p>
        <Link className="underline text-green-800" href="/">Go to Home</Link>
      </span>
    </div>
  );
};

export default Page;
export const metadata = {
  title: "Chai - 404",
  description: "Page Not Found",
};
