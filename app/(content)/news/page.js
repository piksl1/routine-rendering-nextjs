// import NewsList from "@/components/news-list";
// import { getAllNews } from "@/lib/news";


// const NewsPage = async () => {

// const news = await getAllNews();
//   return (
//     <>
//       <h1>News Page</h1>
//       <NewsList news={news} />
//     </>
//   );
// };

// export default NewsPage;

import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  try {
    const news = await getAllNews();
    
    // Add debug logging
    console.log('Fetched news:', news);
    
    // Ensure news is an array before rendering
    if (!Array.isArray(news)) {
      console.error('News is not an array:', news);
      return <div>Error loading news</div>;
    }

    return (
      <>
        <h1>News Page</h1>
        <NewsList news={news} />
      </>
    );
  } catch (error) {
    console.error('Error in NewsPage:', error);
    return <div>Error loading news</div>;
  }
};

export default NewsPage;