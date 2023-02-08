import React from 'react';
import ArticleCard from './ArticleCard';

const Articles = () => {
  return (
    <div className="lg:px-16 px-6 py-16 ">
      <div>
        <h1 className="text-3xl font-semibold text-center ">
          Recent News Articles
        </h1>
        <p className="text-center font-semibold">
          Fresh job related news content posted each day.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 my-12">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Articles;
