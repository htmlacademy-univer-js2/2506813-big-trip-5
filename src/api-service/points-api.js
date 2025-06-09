import ApiService from '../framework/api-service.js';
import { ApiServiceResponse } from '../const.js';

export default class PointsApiService extends ApiService {
  get points() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  get offers() {
    return this._load({ url: 'offers' })
      .then(ApiService.parseResponse);
  }

  get destinations() {
    return this._load({ url: 'destinations' })
      .then(ApiService.parseResponse);
  }

  updatePoint = async (point) => {
    if (point.basePrice > 0) {
      const response = await this._load({
        url: `points/${point.id}`,
        method: ApiServiceResponse.PUT,
        body: JSON.stringify(this.#adaptToServer(point)),
        headers: new Headers({'Content-Type': 'application/json'}),
      });

      const parsedResponse = await ApiService.parseResponse(response);

      return parsedResponse;
    }
  };

  addPoint = async (point) => {
    if (point.basePrice > 0){
      const response = await this._load({
        url: 'points',
        method: ApiServiceResponse.POST,
        body: JSON.stringify(this.#adaptToServer(point)),
        headers: new Headers({'Content-Type': 'application/json'}),
      });

      const parsedResponse = await ApiService.parseResponse(response);

      return parsedResponse;
    }
  };

  deletePoint = async (point) => {
    const response = await this._load({
      url: `points/${point.id}`,
      method: ApiServiceResponse.DELETE,
    });

    return response;
  };

  #adaptToServer = (point) => {
    const adaptedPoint = {...point,
      'base_price': point.basePrice,
      'date_from': point.dateFrom instanceof Date ? point.dateFrom.toISOString() : null,
      'date_to': point.dateTo instanceof Date ? point.dateTo.toISOString() : null,
      'is_favorite': point.isFavorite,
    };

    delete adaptedPoint.basePrice;
    delete adaptedPoint.dateFrom;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.isFavorite;

    return adaptedPoint;
  };
}
