function formatDateMonthYear(myDate: Date): string;
function formatDateMonthYear(myDate: number): string;
function formatDateMonthYear(myDate: string): string;
function formatDateMonthYear(myDate: Date | number | string): string {
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
    if (typeof myDate === "number" || typeof myDate === "string") date = new Date(myDate);
    else date = myDate;

    return `${monthStringArr[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  };

function formatYYYYMMDD(myDate: string): string {
  let date: Date = new Date(myDate);

  return `${date.getUTCFullYear()}/${(date.getUTCMonth() + 1).toString().padStart(2, '0')}/${date.getUTCDate().toString().padStart(2, '0')}`;
}

export { formatDateMonthYear as formatDate };
export {formatYYYYMMDD};