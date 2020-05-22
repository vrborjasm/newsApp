import React from 'react';
import News from './News'

const ListNews = ({newsList}) => (
    <div className="row">
        {newsList.map(news => (
            <News 
                key={news.url}
                news={news}
            />
        ))}
    </div>
);
 
export default ListNews;