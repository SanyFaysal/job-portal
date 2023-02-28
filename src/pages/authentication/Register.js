import React from 'react';
import { useNavigate } from 'react-router-dom';
import candidate from '../../assets/images/candidate.svg';
import employer from '../../assets/images/employer.svg';

const Register = () => {
  const navigate = useNavigate();


  return (
    <div className="h-[80vh] ">
      <h1 className="text-center my-10 text-2xl">Continue as ...</h1>
      <div className="flex justify-evenly ">
        <div
          onClick={() => navigate('/register/candidate')}
          className="flex flex-col bg-slate-100 justify-between transition-all rounded-lg p-5 border border-white hover:border-blue-500 hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[50vh] w-[60vh]" src={candidate} alt="" />
          <p className="text-center text-3xl">Candidate</p>
        </div>
        <div
          onClick={() => navigate('/register/employer')}
          className="flex flex-col bg-slate-100 justify-between transition-all rounded-lg p-5 border border-white hover:border-blue-500 hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[50vh] w-[60vh]" src={employer} alt="" />
          <p className="text-center text-3xl">Employer</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
