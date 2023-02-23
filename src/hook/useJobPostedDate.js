
import moment from 'moment';

export const useJobPostedDate = (job) => {

    const postedDate = moment.utc(job?.createdAt).format('MM/DD/YYYY')
    const current = Date.now();
    const currentDateFormat = moment.utc(current).format('MM/DD/YYYY')
    const date1 = new Date(currentDateFormat);
    const date2 = new Date(postedDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let different;
    if (diffDays === 0) {
        different = 'Today'
    }
    if (diffDays === 1) {
        different = '1 Day ago'
    }
    if (diffDays > 1 && 7 > diffDays) {
        different = `${diffDays} Days ago`
    }
    if (diffDays >= 7 && 30 > diffDays) {
        const week = Math.round(diffDays / 7)
        if (week === 1) {
            different = `${week} week ago`
        }
        if (week > 1) {
            different = `${week} weeks ago`
        }
    }
    if (diffDays >= 30 && 365 > diffDays) {
        const month = Math.round(diffDays / 30)
        if (month === 1) {
            different = `${month} month ago`
        }
        if (month > 1) {
            different = `${month} months ago`
        }
    }
    if (diffDays > 365) {
        const year = Math.round(diffDays / 365)
        if (year === 1) {
            different = `${year} year ago`
        }
        if (year > 1) {
            different = `${year} years ago`
        }
    }

    return { postedDate: different }
}