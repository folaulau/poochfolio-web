export const formateDate = (date1: any, date2: any) => {
    if (date1 !== undefined && date1 !== "" && date2 !== undefined && date2 !== "") {
        var startDate = new Date(date1);
        var endDate = new Date(date2);
        var month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        var startMonth = month[startDate.getMonth()];
        var endMonth = month[endDate.getMonth()];
        var str = startMonth + " " + startDate.getDate() + " - " + endMonth + " " + endDate.getDate() + " " + endDate.getFullYear();
        return str;
    }
    return "";
}