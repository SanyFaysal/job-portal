import {
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';
import { MdSearch, MdWorkOutline } from 'react-icons/md';

const JobFilter = () => {
  return (
    <div
      // className=" h-[100vh]  px-8 py-5 rounded shadow bg-gradient-to-l from-white  via-white to-slate-50 sticky top-[16px]  "
      className="  px-8 py-5 rounded shadow  sticky top-14 bg-white   mb-3 "
    >
      <div>
        <h3 className="font-semibold  mt-3 mb-1">Search by keywords</h3>
        <FormControl
          size="small"
          sx={{
            width: '100%',
            borderRadius: '10px',

            border: 'none',
          }}
          variant="outlined"
        >
          <OutlinedInput
            size="small"
            id="outlined-adornment-weight"
            sx={{
              borderRadius: '10px',
              padding: '2px 15px',
              fontSize: '15px',
              border: '0px',
            }}
            startAdornment={
              <InputAdornment position="start">
                <MdSearch className="text-black text-xl" />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder="Job title or keywords
            "
          />
        </FormControl>
      </div>
      <div>
        <h3 className="font-semibold   mt-4 mb-1">Search by Category</h3>

        <Select
          id="demo-simple-select"
          sx={{
            borderRadius: '10px',
            padding: '2px 10px',
            border: '0px',
            width: '100%',
          }}
          value="none"
          startAdornment={
            <InputAdornment position="start">
              <MdWorkOutline className="text-black text-xl mb-1" />
            </InputAdornment>
          }
          size="small"
        >
          <MenuItem disabled selected value="none">
            <em>Choose one category</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div>
        <h3 className="font-semibold   mt-2">Job Type</h3>

        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="job-type"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2">Full Time</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="job-type"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2">Part Time</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="job-type"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2">Freelancer</span>
          </label>
        </div>
      </div>
      <div>
        <h3 className="font-semibold  mt-1">Experience Level</h3>

        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="experience"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2">Fresher</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="experience"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2"> 1 year experience</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="experience"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2">2 - 3 years experience</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="experience"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2">3 - 5 years experience</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input
              type="radio"
              name="experience"
              className="radio checked:bg-green-500 radio-sm"
            />
            <span className="ml-2"> 5 years + experience</span>
          </label>
        </div>
      </div>
    </div>

  );
};

export default JobFilter;
