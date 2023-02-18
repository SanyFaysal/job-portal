import moment from "moment"

export const useJobPostDateLine = (job) => {
    const currentDateFormat = moment.utc(Date.now()).format('MM/DD/YYYY');
    const dateLineFormat = moment.utc(job?.dateline).format('MM/DD/YYYY')
    const date1 = new Date(currentDateFormat);
    const date2 = new Date(dateLineFormat);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {

        return { status: true, msg: `${diffDays} days remaining to apply`, color: 'text-green-500 bg-green-50' };
    }
    if (diffDays === 0) {

        return { status: true, msg: 'Today is remaining to apply', color: 'bg-[#edffeaf9] text-red-500' };
    }

    return { status: false, msg: 'Dateline in over !', color: 'bg-[#f9eaea] text-red-500 font-bold' };


}