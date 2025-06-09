import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointDueDate } from '../utils/point-date.js';

const ROUTE_WITHOUT_SPLIT_LIMIT = 3;

const renderRouteTrip = (points, destinations) => {
  if (points.length === 0) {
    return '';
  }
  const routeWithoutRepeats = [points[0].destination];
  for (let i = 1; i < points.length; i++) {
    if (points[i].destination !== points[i - 1].destination) {
      routeWithoutRepeats.push(points[i].destination);
    }
  }

  if (routeWithoutRepeats.length > ROUTE_WITHOUT_SPLIT_LIMIT) {
    const startPoint = destinations.find((item) => item.id === routeWithoutRepeats[0]);
    const finishPoint = destinations.find((item) => item.id === routeWithoutRepeats[routeWithoutRepeats.length - 1]);
    return `${startPoint.name} &mdash; ... &mdash; ${finishPoint.name}`;
  }

  return routeWithoutRepeats.map((destination) => `${destinations.find((item) => item.id === destination).name}`).join(' &mdash; ');
};

const renderDatesTrip = (points) => {
  if (points.length === 0) {
    return '';
  }
  const startDate = points[0].dateFrom !== null ? humanizePointDueDate(points[0].dateFrom) : '';
  const finishDate = points[points.length - 1].dateTo !== null ? humanizePointDueDate(points[points.length - 1].dateTo) : '';
  return `${startDate}&nbsp;&mdash;&nbsp;${finishDate}`;
};

const getOffersPrice = (point, offers) => {
  if (offers.length === 0) {
    return 0;
  }
  let pricePointOffers = 0;
  const offersByType = offers.find((offer) => offer.type === point.type);
  const pointOffers = point.offers;
  pointOffers.forEach((offer) => {
    pricePointOffers += offersByType.offers.find((item) => item.id === offer).price;
  });
  return pricePointOffers;
};

const renderTotalPriceTrip = (points, offers) => {
  if (points.length === 0) {
    return '';
  }
  let totalPrice = 0;
  points.forEach((point) => {
    totalPrice += point.basePrice;
    totalPrice += getOffersPrice(point, offers);
  });
  return `Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>`;
};

const createTripInfoTemplate = (points, destinations, offers) => {
  if (destinations.length === 0 || offers.length === 0) {
    return '';
  }
  return `<div class="trip-info"><div class="trip-info__main">
  <h1 class="trip-info__title">${renderRouteTrip(points, destinations)}</h1>
  <p class="trip-info__dates">${renderDatesTrip(points)}</p>
</div>
<p class="trip-info__cost">
  ${renderTotalPriceTrip(points, offers)}
</p></div>`;
};

export default class TripInfoView extends AbstractView {
  #points = null;
  #destinations = null;
  #offers = null;

  constructor(points, destinations, offers) {
    super();
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template () {
    return createTripInfoTemplate(this.#points, this.#destinations, this.#offers);
  }
}
