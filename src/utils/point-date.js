import dayjs from 'dayjs';
import { SortType } from '../const.js';

const HOUR_MINUTES_COUNT = 60;
const TOTAL_DAY_MINUTES_COUNT = 1440;
const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';
const TIME_FORMAT = 'HH:mm';

const humanizePointDueDate = (date) => dayjs(date).format('DD MMM');

const formatWithLeadingZero = (value) => `${value}`.padStart(2, '0');

const getDaysOutput = (days) => (days <= 0 ? '' : `${formatWithLeadingZero(days)}D`);
const getHoursOutput = (days, restHours) => (days <= 0 && restHours <= 0 ? '' : `${formatWithLeadingZero(restHours)}H`);
const getMinutesOutput = (restMinutes) => `${formatWithLeadingZero(restMinutes)}M`;

const duration = (dateFrom, dateTo) => {
  const start = dayjs(dateFrom);
  const end = dayjs(dateTo);
  const difference = end.diff(start, 'minute');

  const days = Math.trunc(difference / TOTAL_DAY_MINUTES_COUNT);
  const restHours = Math.trunc((difference % TOTAL_DAY_MINUTES_COUNT) / HOUR_MINUTES_COUNT);
  const restMinutes = difference % HOUR_MINUTES_COUNT;

  return `${getDaysOutput(days)} ${getHoursOutput(days, restHours)} ${getMinutesOutput(restMinutes)}`.trim();
};

const getDate = (date) => dayjs(date).format(DATE_FORMAT);
const getTime = (date) => dayjs(date).format(TIME_FORMAT);
const getDateTime = (date) => dayjs(date).format(DATE_TIME_FORMAT);
const isPastPoint = (dateTo) => dateTo ? dayjs().diff(dateTo, 'minute') > 0 : false;
const isFuturePoint = (dateFrom) => dateFrom ? dayjs().isBefore(dateFrom) : false;
const isPresentPoint = (point) => point.dateFrom && point.dateTo ? (dayjs().isSame(point.dateFrom) || dayjs().isAfter(point.dateFrom)) && (dayjs().isSame(point.dateTo) || dayjs().isBefore(point.dateTo)) : false;

const sortPointsByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortPointsByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
const sortPointsByTime = (pointA, pointB) => {
  const timePointA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const timePointB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));
  return timePointB - timePointA;
};

const sorting = {
  [SortType.DAY]: (points) => points.sort(sortPointsByDay),
  [SortType.TIME]: (points) => points.sort(sortPointsByTime),
  [SortType.PRICE]: (points) => points.sort(sortPointsByPrice),
};

export {
  humanizePointDueDate,
  duration,
  getDate,
  getDateTime,
  getTime,
  isPastPoint,
  isFuturePoint,
  isPresentPoint,
  sorting
};
