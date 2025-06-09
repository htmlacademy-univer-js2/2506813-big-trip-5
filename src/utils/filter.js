import { isPastPoint, isFuturePoint, isPresentPoint } from './point-date.js';
import { FilterType } from '../const.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentPoint(point)),
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturePoint(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastPoint(point.dateTo)),
};

export { filter };
