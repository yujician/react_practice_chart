import React from 'react';

type PageTitleProps = {
  pageTitle: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle }) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <h1 className="py-4 text-center text-3xl font-bold text-white">{pageTitle}</h1>
    </div>
  );
};

export default PageTitle;
