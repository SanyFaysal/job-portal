import React, { useState } from 'react';
import { } from 'react-icons/md';

const Pagination = ({ page, total, setPagination }) => {
    const [selected, setSelected] = useState(1);
    const array = [];
    for (let index = 0; index < page; index++) {
        array.push(index);
    }
    const handleClick = (arr) => {
        setPagination(Number(arr));
        setSelected(arr);
    };
    return (
        <div className="flex justify-center ">
            {array.map((arr) => (
                <button
                    key={arr}
                    className={`btn btn-sm mx-2 ${selected === arr + 1 &&
                        'bg-green-500 hover:bg-green-500 border-none hover:border-none'
                        }`}
                    onClick={() => handleClick(arr + 1)}
                >
                    {arr + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;