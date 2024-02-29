import React from 'react';
import ContentLoader from 'react-content-loader';

const Reddit = (props: any) => {
    return (
        <ContentLoader viewBox="0 0 462 160" height={160} width={462} {...props}>

            <rect x="26" y="10" rx="25" ry="25" width="50" height="50" />
            <rect x="90" y="16" rx="5" ry="5" width="321" height="15" />
            <rect x="129" y="39" rx="5" ry="5" width="220" height="9" />


        </ContentLoader>
    );
};

Reddit.metadata = {
    name: 'Sammy Baraka', // My name
    github: 'sbaraka', // Github username
    description: 'Reddit post', // Little tagline
    filename: 'Reddit', // filename of your loader
};

export default Reddit;
