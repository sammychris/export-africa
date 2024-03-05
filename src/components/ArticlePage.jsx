import React from 'react';

const ArticlePage = () => {
  // Dummy data - replace with actual data
  const dummyArticle = {
    id: 1,
    title: 'Exploring the Latest Trends in African Trade',
    author: {
      name: 'John Doe',
      credentials: 'Senior Analyst, Trade Insights',
      bio: 'John Doe is a seasoned analyst with expertise in African trade trends...',
    },
    content: `
      <p>Africa is experiencing a transformative period in its trade landscape...</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, orci eget bibendum accumsan, mauris augue pretium libero, vitae luctus nulla orci nec tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin auctor sapien ac nunc facilisis, quis blandit justo vestibulum. Vivamus sodales mauris vitae neque tempor, ac euismod nisl auctor. Nullam vel sapien quam.</p>
      <h2>Understanding Market Dynamics</h2>
      <p>Curabitur malesuada tortor ut maximus venenatis. Duis eu malesuada mi, vel ullamcorper nulla. Nunc vel aliquet orci. Quisque feugiat, nunc sit amet vulputate cursus, tortor massa congue odio, vel hendrerit felis leo at tortor. Fusce et fringilla sapien, id gravida sapien.</p>
      <h2>Challenges and Opportunities</h2>
      <p>Donec laoreet lectus eu hendrerit laoreet. Integer nec bibendum arcu. Phasellus quis odio eu nulla posuere euismod eu et mauris. Phasellus vel arcu at purus cursus tincidunt. Fusce id est a odio pellentesque cursus ut eu arcu. Aliquam erat volutpat. Donec non odio purus. Curabitur gravida vestibulum est in eleifend. Ut id nisi sem.</p>
      <!-- Add more content -->
    `,
    estimatedReadingTime: '8 min',
    multimedia: {
      videoUrl: 'https://www.youtube.com/watch?v=example',
      infographicUrl: 'infographic.jpg',
    },
    relatedArticles: [
      {
        id: 2,
        title: 'Empowering African Entrepreneurs: A Success Story',
        author: 'Jane Smith',
        thumbnail: 'success_story_thumbnail.jpg',
      },
      {
        id: 1,
        title: 'Empowering African Entrepreneurs: A Success Story',
        author: 'Jane Smith',
        thumbnail: 'success_story_thumbnail.jpg',
      },
      // Add more related articles
    ],
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      {/* Featured Image */}
      <img
        src={`/${dummyArticle.featuredImage}`}
        alt={dummyArticle.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      {/* Headline, Author, and Estimated Reading Time */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-deep-blue mb-2">{dummyArticle.title}</h1>
        <p className="text-gray-600">{`By ${dummyArticle.author.name}, ${dummyArticle.author.credentials}`}</p>
        <p className="text-gray-600">{`${dummyArticle.estimatedReadingTime} read`}</p>
        {/* <p className="text-gray-600 mb-4">{dummyArticle.author.bio}</p> */}
      </div>

      {/* Article Content */}
      <div dangerouslySetInnerHTML={{ __html: dummyArticle.content }} className="mb-6" />

      {/* Multimedia */}
      <div className="mb-6">
        {dummyArticle.multimedia.videoUrl && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-deep-blue mb-2">Watch Video</h2>
            <iframe
              title="Article Video"
              width="100%"
              height="400"
              src={dummyArticle.multimedia.videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {dummyArticle.multimedia.infographicUrl && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-deep-blue mb-2">Infographic</h2>
            <img
              src={`/${dummyArticle.multimedia.infographicUrl}`}
              alt="Article Infographic"
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* Social Sharing Buttons */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-deep-blue mb-2">Share this Article</h2>
        {/* Add social media sharing buttons */}
        {/* You may use third-party libraries or APIs for social sharing functionality */}
      </div>

      {/* Related Articles */}
      <div>
        <h2 className="text-xl font-bold text-deep-blue mb-2">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyArticle.relatedArticles.map((relatedArticle) => (
            <div key={relatedArticle.id} className="border p-4 rounded-md">
              <img
                src={`/${relatedArticle.thumbnail}`}
                alt={relatedArticle.title}
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg font-bold mb-2">{relatedArticle.title}</h3>
              <p className="text-gray-700">{`By ${relatedArticle.author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
