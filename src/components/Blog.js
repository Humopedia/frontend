import React from "react";

export default function CardComponent() {
    const posts = [
        {
            title: "React Tailwind Card with Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];
    return (
        <> 
           <div className="flex flex-col">
              <div className=" flex justify-center py-10">
                   <h1 className="text-6xl">Blogs</h1>
                </div>
            <div className="grid gap-2   pb-10 ml-12 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="card w-96 border-2  border-black p-1  rounded-xl bg-base-100 drop-shadow-xl" key={key}>
                        <figure>                               
                        <img
                            // className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        </figure>
                        <div className="card-body pb-2">
                            <h4 className="card-title">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}