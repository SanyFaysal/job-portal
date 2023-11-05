import moment from 'moment';

export const useJobPostDateLine = (job) => {
    const currentDateFormat = moment.utc(); // Get current date in UTC
    const dateLineFormat = moment.utc(job?.dateline, 'MM/DD/YYYY'); // Parse job's dateline in UTC

    const diffDays = dateLineFormat.diff(currentDateFormat, 'days'); // Calculate difference in days

    if (diffDays > 1) {
        return {
            status: true,
            msg: `${diffDays} days remaining to apply`,
            color: 'text-green-500 bg-green-50'
        };
    }

    if (diffDays === 1) {
        return {
            status: true,
            msg: 'Tomorrow is remaining to apply',
            color: 'bg-yellow-100 text-yellow-500'
        };
    }

    if (diffDays === 0) {
        return {
            status: true,
            msg: 'Today is the last day to apply',
            color: 'bg-red-100 text-red-500'
        };
    }

    return {
        status: false,
        msg: 'Dateline is over!',
        color: 'bg-[#f9eaea] text-red-500 font-bold'
    };
};
