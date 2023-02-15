import moment from "moment"

export const useJobPostDateLine = (job) => {
    const currentDateFormat = moment.utc(Date.now()).format('MM/DD/YYYY');
    const dateLineFormat = moment.utc(job?.dateline).format('MM/DD/YYYY')


    const date1 = new Date(currentDateFormat);
    const date2 = new Date(dateLineFormat);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {

        return { msg: `${diffDays} days remaining to apply`, color: 'text-[red] bg-[#f9eaea]' };
    }
    if (diffDays === 0) {

        return { msg: 'Today is remaining to apply', color: 'bg-[#edffeaf9] text-[#5bca5b]' };
    }
    if (diffDays <= 0) {

        return { msg: 'Dateline in over !', color: 'bg-[red] text-white' };
    }
}