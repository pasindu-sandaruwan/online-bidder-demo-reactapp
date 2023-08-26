/*
 * Contains some common functions that will be shared with the components
 */

export const formatDisplayPrice = (number: number) => {
    if (isNaN(number)) {
        return 0.0;
    }else {
        return number.toLocaleString();
    }
};
