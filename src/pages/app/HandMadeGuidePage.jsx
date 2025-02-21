import React, { useEffect, useState } from "react";
import Divider from "../../components/Divider";
import { useGetBlog } from "../../react-query/admin/admin";
import HandmadeCard from "../../components/Cards/HandmadeCard";
import { Languages } from "lucide-react";

const HandMadeGuidePage = () => {
  const [lang, setLang] = useState(false);

  // get data
  const { data: handmadeBlog, isLoading, isError } = useGetBlog();
  // Effect to set initial language from localStorage
  useEffect(() => {
    const currentLang = localStorage.getItem("Language");
    if (currentLang === "myanmar") {
      setLang(false); // Assuming true means Myanmar
    } else {
      setLang(true); // Assuming false means English
    }
  }, [lang]);

  // Function to toggle language
  const toggleLanguage = () => {
    // Get the current language from localStorage
    const currentLang = localStorage.getItem("Language");

    // Toggle the language
    if (currentLang === "myanmar") {
      localStorage.setItem("Language", "english"); // Set to English
      setLang(true); // Update state to English
    } else {
      localStorage.setItem("Language", "myanmar"); // Set to Myanmar
      setLang(false); // Update state to Myanmar
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xl">Handmade Samples</div>
        <button
          className="btn btn-primary "
          onClick={() => {
            setLang(!lang);
            toggleLanguage();
          }}
        >
          {" "}
          <Languages /> Translate
        </button>
      </div>
      <Divider />
      {isError && (
        <p className="text-error text-2xl  flex items-center gap-4 justify-center">
          {" "}
          Failed to fetch data! <Unplug />
        </p>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-3/5 w-full">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      {handmadeBlog?.map((blog) => (
        <div key={blog.id}>
          <HandmadeCard blog={blog} lang={lang} />
        </div>
      ))}
    </div>
  );
};

export default HandMadeGuidePage;
