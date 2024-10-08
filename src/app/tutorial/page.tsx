import React from 'react'

interface YoutubeProps {
  id:number;
  src:string;
  title:string;
}

const Youtube: YoutubeProps[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/kUMe1FH4CHE?si=9WEB8cRRJFINVoJL",
    title: "Learn HTML – Full Tutorial for Beginners (2022)",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/G3e-cpL7ofc?si=mIBGeCcObuf2IRvF",
    title: "HTML & CSS Full Course - Beginner to Pro",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/uDkjZ-UjgX0?si=JnzfQybd8g72dlob",
    title: "HTML & CSS Full Course (2024)",
  },
];

const Tutorial = () => {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] py-5 xl:w-[70%] mx-auto">
      <h1 className="font-semibold text-gray-900 text-2xl sm:text-3xl ld:text-4xl mb-3">
        Tutorial Video To watch
      </h1>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="text-xl text-gray-900 font-medium md:font-semibold py-2">
            HTML and CSS Tutorial Recomended
          </h1>
          <div className="grid md:grid-col-2 xl:grid-cols-3 gap-8 mx-auto">
            {Youtube.map((youtube) => (
              <div key={youtube.id} className="w-full">
                <iframe
                  className="w-full h-[300px]"
                  src={youtube.src}
                  title="YouTube video player"
                  frameBorder={0} // Change 'frameborder' to 'frameBorder'
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" // 'referrerpolicy' should be in camelCase
                  allowFullScreen // 'allowfullscreen' should be in camelCase
                ></iframe>
                <h2 className="font-medium py-2 text-gray-800">
                  {youtube.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial