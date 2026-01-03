import { useEffect, useState } from "react";
import type { IProject } from "./Project";

type ProjectMedia = IProject["media"];
type MediaItem = ProjectMedia[number];

const Carousel = ({ media }: { media: ProjectMedia }) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(1);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem>(media[0]);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleNext = () => {
    setSelectedMediaIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % media.length;
      setSelectedMedia(media[nextIndex]);
      return nextIndex;
    });
  };

  const handleBack = () => {
    setSelectedMediaIndex((prevIndex) => {
      const prev = (prevIndex - 1 + media.length) % media.length;
      setSelectedMedia(media[prev]);
      return prev;
    });
  };

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullScreen]);

  return (
    <div>
      <div className="h-80 w-screen md:h-160 md:w-240 flex items-center justify-center gap-2">
        <div
          onClick={handleBack}
          className="hidden rounded-full text-center md:flex items-center justify-center bg-white/50
           text-white text-lg h-10 w-12 cursor-pointer hover:bg-white hover:text-black duration-300 select-none"
        >
          &lt;
        </div>
        <div
          onClick={() => setIsFullScreen(true)}
          className="rounded-2xl shadow-2xl shadow-black h-80 w-80 md:h-160 md:w-240 overflow-hidden"
        >
          {selectedMedia.type === "image" && (
            <img
              src={selectedMedia.src}
              alt="media item"
              className="object-cover h-full w-full"
            />
          )}

          {selectedMedia.type === "video" && (
            <video
              src={selectedMedia.src}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover h-full w-full"
            />
          )}
        </div>
        <div
          onClick={handleNext}
          className="hidden rounded-full text-center md:flex items-center justify-center bg-white/50 text-white text-lg h-10 w-12 cursor-pointer hover:bg-white hover:text-black duration-300 select-none"
        >
          &gt;
        </div>
      </div>
      <div className="flex items-center justify-center px-4 mt-8 md:mt-4">
        <div
          onClick={handleBack}
          className="flex rounded-full text-center md:hidden items-center justify-center bg-white/50 text-white text-lg h-7 w-8 cursor-pointer hover:bg-white hover:text-black duration-300 select-none"
        >
          &lt;
        </div>
        <ul className="flex items-center justify-center mt-4 px-6 py-2 gap-8 bg-white/40 w-fit mx-4 md:mx-auto rounded-full">
          {media.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedMediaIndex(index);
                setSelectedMedia(item);
              }}
              className={`rounded-full h-3 w-3 cursor-pointer duration-300
                        ${
                          selectedMediaIndex === index
                            ? "bg-white"
                            : "bg-white/55"
                        }
                `}
            />
          ))}
        </ul>
        <div
          onClick={handleNext}
          className="flex rounded-full text-center md:hidden items-center justify-center bg-white/50 text-white text-lg h-7 w-8 cursor-pointer hover:bg-white hover:text-black duration-300 select-none"
        >
          &gt;
        </div>
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-light
                 hover:scale-110 transition select-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Media container */}
          <div className="max-h-[90vh] max-w-[90vw] rounded-xl overflow-hidden">
            {selectedMedia.type === "image" && (
              <img
                src={selectedMedia.src}
                alt="media fullscreen"
                className="h-full w-full object-contain"
              />
            )}

            {selectedMedia.type === "video" && (
              <video
                src={selectedMedia.src}
                autoPlay
                loop
                controls
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
