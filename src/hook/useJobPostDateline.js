export function useJobPostDateLine(job) {
  const currentDateFormat = new Date(); // Get current date

  if (!job || !job.dateline) {
    return {
      status: false,
      msg: "Invalid date format",
      color: "bg-[#f9eaea] text-red-500 font-bold",
    };
  }

  // Parse job's dateline
  const dateLineFormat = new Date(job.dateline);

  const diffTime = dateLineFormat - currentDateFormat;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Calculate difference in days

  if (diffDays > 1) {
    return {
      status: true,
      msg: `${diffDays} days remaining`,
      color: "text-green-500 bg-green-50",
    };
  }

  if (diffDays === 1) {
    return {
      status: true,
      msg: "Tomorrow is remaining to apply",
      color: "bg-yellow-100 text-yellow-500",
    };
  }

  if (diffDays === 0) {
    return {
      status: true,
      msg: "Today is the last day to apply",
      color: "bg-red-100 text-red-500",
    };
  }

  return {
    status: false,
    msg: "Dateline is over!",
    color: "bg-[#f9eaea] text-red-500 font-bold",
  };
}
