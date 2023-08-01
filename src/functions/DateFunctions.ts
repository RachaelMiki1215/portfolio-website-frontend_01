function formatDate(myDate: Date): string;
function formatDate(myDate: number): string;
function formatDate(myDate: Date | number): string {
    const monthStringArr: string[] = [
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
  
    let date: Date;
    if (typeof myDate === "number") date = new Date(myDate);
    else date = myDate;

    return `${monthStringArr[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  };

export { formatDate };