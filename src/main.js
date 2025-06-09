import FilterPresenter from './presenter/filter-presenter.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonPresenter from './presenter/new-point-button-presenter.js';
import PointsModel from './model/trip-points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsApiService from './api-service/destinations-api.js';
import OffersApiService from './api-service/offers-api.js';
import PointsApiService from './api-service/points-api.js';

const AUTHORIZATION = 'Basic HiStepan!';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');

const pointsModel = new PointsModel(new PointsApiService(END_POINT, AUTHORIZATION));
const destinationsModel = new DestinationsModel(new DestinationsApiService(END_POINT, AUTHORIZATION));
const offersModel = new OffersModel(new OffersApiService(END_POINT, AUTHORIZATION));

const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({
  filterContainer: siteHeaderElement.querySelector('.trip-controls__filters'),
  pointsModel: pointsModel,
  destinationsModel: destinationsModel,
  offersModel: offersModel,
  filterModel: filterModel
});
filterPresenter.init();

const tripPresenter = new TripEventsPresenter({
  tripInfoContainer: siteHeaderElement.querySelector('.trip-main__trip-info'),
  tripContainer: siteMainElement.querySelector('.trip-events'),
  pointsModel: pointsModel,
  filterModel: filterModel,
  destinationsModel: destinationsModel,
  offersModel: offersModel
});
tripPresenter.init();

const newPointButtonPresenter = new NewPointButtonPresenter({
  newPointButtonContainer: siteHeaderElement,
  destinationsModel: destinationsModel,
  pointsModel: pointsModel,
  offersModel: offersModel,
  tripPresenter: tripPresenter
});

newPointButtonPresenter.init();

offersModel.init().finally(() => {
  destinationsModel.init().finally(() => {
    pointsModel.init().finally(() => {
      newPointButtonPresenter.renderNewPointButton();
    });
  });
});
