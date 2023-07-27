"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Herosection = () => {
    return (
        <main className="">
            <div className="">
                <div className="">
                    <div className="">
                        <h1>title</h1>
                        <p> From thriller stories to true horror stories, we&apos;ve got you covered. Browse our
                            selection of the latest blogs, and find your new favorite today.

                        </p>
                        <Link href="/write">
                        <button>
                            Explore blogs
                        </button>
                        </Link>


                    </div>

                    <div className="bg-red-200">
                        {/* <img alt="ok" src="/next.svg"/> */}
                        {/* <Image src={"/next.svg"} alt="exploring blogs" width={500} height={500}/> */}
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Herosection;