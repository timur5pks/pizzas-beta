import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={488}
    viewBox="0 0 280 488"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="141" cy="133" r="133" />
    <rect x="0" y="286" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="322" rx="10" ry="10" width="280" height="120" />
    <rect x="0" y="458" rx="10" ry="10" width="280" height="30" />
  </ContentLoader>
);

export default PizzaSkeleton;
