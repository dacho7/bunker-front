export class Date {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  date: string;
  time: string;

  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  ) {
    this.year = year;
    this.month = month;
    this.minute = minute;
    this.day = day;
    this.hour = hour;
    this.date = `${year}-${month}-${day}`;
    this.time = `${hour}:${minute}`;
  }
}
