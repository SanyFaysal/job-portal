import React from 'react';
import { Link } from 'react-router-dom';

const Path = ({ from, to }) => {
  return (
    <div className="text-sm breadcrumbs font-semibold">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/${from}`}>Dashboard</Link>
        </li>
        {to && <li className="text-sky-500">{to}</li>}
      </ul>
    </div>
  );
};

export default Path;
