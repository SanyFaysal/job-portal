import React from 'react';
import { BsRecord2 } from 'react-icons/bs';
const JobInfo = () => {
  return (
    <div>
      <div>
        <h1 className="mb-1 text-xl font-semibold">Job Details</h1>
        <hr />
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          recusandae ullam, ducimus animi sequi numquam accusantium laboriosam
          tenetur aliquid fuga odio, libero quod eum consectetur natus nisi
          placeat reiciendis delectus cum, impedit tempora suscipit minus enim
          sapiente. Quia temporibus iste pariatur, vel quas quaerat incidunt
          dolore, culpa quocitationem dolore molestiae distinctio ut quidem
          maiores numquam aliquid?
        </p>
      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">
          Key Responsibilities
        </h1>
        <hr />
        <p className="mt-3">
          <BsRecord2 className="inline mr-2 text-2xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repudiandae nisi recusandae vel itaque asperiores. Lorem ipsum dolor
          sit amet.
        </p>
        <p className="my-2">
          <BsRecord2 className="inline mr-2 text-2xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repudiandae nisi recusandae vel itaque asperiores. Lorem ipsum dolor
          sit amet.
        </p>
        <p className="my-2">
          <BsRecord2 className="inline mr-2 text-2xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repudiandae nisi recusandae vel itaque asperiores. Lorem ipsum dolor
          sit amet.
        </p>
      </div>
      <div className="my-4">
        <h1 className="mb-2 mt-5 text-xl font-semibold">Skill & Experience</h1>
        <hr />
        <p className="mt-3">
          <BsRecord2 className="inline mr-2 text-2xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repudiandae nisi recusandae vel itaque asperiores. Lorem ipsum dolor
          sit amet.
        </p>
        <p className="my-2">
          <BsRecord2 className="inline mr-2 text-2xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repudiandae nisi recusandae vel itaque asperiores. Lorem ipsum dolor
          sit amet.
        </p>
        <p className="my-2">
          <BsRecord2 className="inline mr-2 text-2xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repudiandae nisi recusandae vel itaque asperiores. Lorem ipsum dolor
          sit amet.
        </p>
      </div>
    </div>
  );
};

export default JobInfo;
