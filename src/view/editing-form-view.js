import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { getDateTime } from '../utils/point-date.js';
import { Point, PointDescription } from '../const.js';
import dayjs from 'dayjs';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';

const BLANK_FORM = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: 1,
  isFavorite: false,
  offers: [],
  type: Point.FLIGHT,
};

const renderPictures = (pictures) => {
  if (pictures.length === 0) {
    return '';
  }
  return pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('');
};

const renderDestinationNames = (destinations) => {
  if (destinations.length === 0) {
    return '';
  }
  return destinations.map((destination) => `<option value="${destination.name}"></option>`).join('');
};

const renderOffers = (allOffers, checkedOffers, isDisabled) => allOffers.map((offer) => `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-luggage" ${checkedOffers.includes(offer.id) ? 'checked' : ''}${isDisabled ? 'disabled' : ''}>
    <label class="event__offer-label" for="event-offer-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`).join('');

const renderOffersContainer = (allOffers, checkedOffers, isDisabled) => {
  if (!allOffers || allOffers.offers.length === 0) {
    return '';
  }

  return `<section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>
  <div class="event__available-offers">
  ${renderOffers(allOffers.offers, checkedOffers, isDisabled)}
  </div>
  </section>`;
};

const renderDestinationContainer = (destination) => {
  if (destination) {
    return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destination.description !== null ? destination.description : ''}</p>
    <div class="event__photos-container">
                <div class="event__photos-tape">
                ${renderPictures(destination.pictures)}
                </div>
              </div>
  </section>`;
  }
  return '';
};

const createEditingPointDateTemplate = (dateFrom, dateTo, isDisabled) => (
  `<div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFrom ? getDateTime(dateFrom) : ''}" ${isDisabled ? 'disabled' : ''}>
    —
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateTo ? getDateTime(dateTo) : ''}" ${isDisabled ? 'disabled' : ''}>
  </div>`
);

const createEditingPointTypeTemplate = (currentType, isDisabled) => (Object.values(Point).map((type) => (
  `<div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${currentType === type ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${PointDescription[type]}</label>
  </div>`)).join('')
);

const renderResetButtonTemplate = (isNewPoint, isDisabled, isDeleting) => isNewPoint ? `<button class="event__reset-btn" type="reset" ${isDisabled ? 'disabled' : ''}>Cancel</button>` : `<button class="event__reset-btn" type="reset" ${isDisabled ? 'disabled' : ''}> ${isDeleting ? 'Deleting...' : 'Delete'}</button>
  <button class="event__rollup-btn" type="button">`;

const createEditFormTemplate = (point, destinations, allOffers, isNewPoint) => {
  const {basePrice, type, destination, dateFrom, dateTo, offers, isDisabled, isSaving, isDeleting} = point;
  const allPointTypeOffers = allOffers.find((offer) => offer.type === type);
  const destinationData = destinations.find((item) => item.id === destination);
  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox"  ${isDisabled ? 'disabled' : ''}>
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createEditingPointTypeTemplate(type, isDisabled)}
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${destination}">
          ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-${destination}" type="text" name="event-destination" value="${destinationData ? he.encode(destinationData.name) : ''}" list="destination-list-1">
          <datalist id="destination-list-1" ${isDisabled ? 'disabled' : ''}>
          ${renderDestinationNames(destinations)}
          </datalist>
        </div>
        ${createEditingPointDateTemplate(dateFrom, dateTo, isDisabled)}
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${basePrice}"  ${isDisabled ? 'disabled' : ''}>
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? 'disabled' : ''}> ${isSaving ? 'Saving...' : 'Save'}</button>
        ${renderResetButtonTemplate(isNewPoint, isDisabled, isDeleting)}
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
      ${renderOffersContainer(allPointTypeOffers, offers, isDisabled)}
      ${renderDestinationContainer(destinationData)}
      </section>
    </form>
  </li>`
  );
};

export default class EditingFormView extends AbstractStatefulView {
  #datepickerFrom = null;
  #datepickerTo = null;
  #isNewPoint = null;
  #destinations = null;
  #offers = null;
  _callback = {};
  #offersByType = null;

  constructor({point = BLANK_FORM, destinations, offers, isNewPoint}) {
    super();
    this._state = EditingFormView.parsePointToState(point);
    this.#destinations = destinations;
    this.#offers = offers;
    this.#isNewPoint = isNewPoint;
    this.#offersByType = this.#offers.find((offer) => offer.type === this._state.type);
    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state, this.#destinations, this.#offers, this.#isNewPoint);
  }

  reset = (point) => {
    this.updateElement(
      EditingFormView.parsePointToState(point),
    );
  };

  removeElement = () => {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }
    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }

  };

  setPreviewClickHandler = (callback) => {
    this._callback.previewClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#previewClickHandler);
  };

  setResetClickHandler = (callback) => {
    this._callback.resetClick = callback;
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formResetClickHandler);
  };

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSubmitHandler);
  };

  _restoreHandlers = () => {
    this.#setInnerHandlers();
    this.#setOuterHandlers();
    this.#setDatepickerFrom();
    this.#setDatepickerTo();
  };

  #dateFromChangeHadler = ([userDate]) => {
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #dateToChangeHadler = ([userDate]) => {
    this.updateElement({
      dateTo: userDate,
    });
  };

  #previewClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.previewClick();
  };

  #destinationInputHandler = (evt) => {
    evt.preventDefault();
    const destination = this.#destinations.find((dest) => dest.name === evt.target.value);
    this.updateElement({
      destination: destination.id,
    });
  };

  #pointPriceClickHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: Number(evt.target.value),
    });
  };

  #pointTypeClickHandler = (evt) => {
    evt.preventDefault();
    this._state.offers = [];
    this.#offersByType = this.#offers.find((offer) => offer.type === evt.target.value);
    this.updateElement({
      type: evt.target.value,
    });
  };

  #setDatepickerFrom = () => {
    this.#datepickerFrom = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.dateFrom || null,
        maxDate: this._state.dateTo,
        onChange: this.#dateFromChangeHadler,
      },
    );
  };

  #setDatepickerTo = () => {
    this.#datepickerTo = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.dateTo || null,
        minDate: this._state.dateFrom,
        onChange: this.#dateToChangeHadler,
      },
    );
  };

  #offersClickHandler = (evt) => {
    evt.preventDefault();
    const offerId = evt.target.id.split('-').slice(2).join('-');
    const offers = this._state.offers.filter((offer) => offer !== offerId);
    let currentOffers = [...this._state.offers];
    if (offers.length !== this._state.offers.length) {
      currentOffers = offers;
    } else {
      currentOffers.push(offerId);
    }

    this._setState({
      offers: currentOffers,
    });
  };

  #formResetClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.resetClick(EditingFormView.parseStateToPoint(this._state));
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(EditingFormView.parseStateToPoint(this._state));
  };

  #setInnerHandlers = () => {
    this.element.querySelector('.event__type-list')
      .addEventListener('change', this.#pointTypeClickHandler);
    this.element.querySelector('.event__input')
      .addEventListener('change', this.#destinationInputHandler);
    if(this.#offersByType && this.#offersByType.offers.length > 0){
      this.element.querySelector('.event__available-offers').addEventListener('change', this.#offersClickHandler);
    }
    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#pointPriceClickHandler);
  };

  #setOuterHandlers = () => {
    if (!this.#isNewPoint) {
      this.setPreviewClickHandler(this._callback.previewClick);
    }
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setResetClickHandler(this._callback.resetClick);
  };

  static parsePointToState = (point) => ({
    ...point,
    dateFrom: point.dateFrom ? dayjs(point.dateFrom).toDate() : null,
    dateTo: point.dateTo ? dayjs(point.dateTo).toDate() : null,
    isDisabled: false,
    isSaving: false,
    isDeleting: false,
  });

  static parseStateToPoint = (state) => {
    const point = {...state};
    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;
    return point;
  };
}
