import { getRandomPrice } from '../utils';

const minPrice = 40;
const maxPrice = 180;

const offersMock = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '428eb112-af2f-4313-87f1-dff26c9f4c92',
        'title': 'Upgrade to a business class',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '0529e5d8-bce7-49bf-a78a-20d642ec6cf2',
        'title': 'Choose the radio station',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '8f53dd26-faf5-4427-9b70-42623223cbe7',
        'title': 'Choose temperature',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '276c975c-d8fe-4103-b917-56b524b93f43',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '7667ffdf-eea0-4cf3-8428-d5fc46f4790d',
        'title': 'Drive slowly',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 'c8756ba6-859f-4fb2-8f97-2b04164a4792',
        'title': 'Infotainment system',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'a80ef544-5412-439a-a599-e5968798ea1d',
        'title': 'Order meal',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'dd8281ff-10b2-4094-a77d-b455bc79b656',
        'title': 'Choose seats',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '7d09b26a-44a1-4e07-925f-f3881ade2389',
        'title': 'Book a taxi at the arrival point',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '2673b215-d01b-41eb-9a52-d0f0fc1a34e7',
        'title': 'Order a breakfast',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '183bf77e-48c7-4e91-8a83-f3d847b69ca7',
        'title': 'Wake up at a certain time',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': '07e9d764-9a28-4479-9ea6-fb83419e3d9b',
        'title': 'Choose meal',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '412e00fd-e50d-4195-bfdc-eef223c84ef4',
        'title': 'Choose seats',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '101022b2-5c0a-4dc3-9b37-30de228c7c70',
        'title': 'Upgrade to comfort class',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '70574639-3fb5-4647-839e-c312c59bd537',
        'title': 'Upgrade to business class',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'ddff2e3b-1153-4796-aeb2-cef59146dac2',
        'title': 'Add luggage',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'd406d2f0-4c3e-43a0-b000-23f0af37665f',
        'title': 'Business lounge',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': '6a3fa2fb-07ee-493b-a68b-78efae40569b',
        'title': 'Choose the time of check-in',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '0fe27890-0662-4e92-9486-04ea97a7d17a',
        'title': 'Choose the time of check-out',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '2f4aa8cf-bfec-4416-b83a-26dbbb91b6c3',
        'title': 'Add breakfast',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '34629ed2-db20-465d-84ce-072e74af7ca5',
        'title': 'Laundry',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'eb25922d-471b-4058-b1f4-4e1fb8e2161e',
        'title': 'Order a meal from the restaurant',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 'a639f84b-5743-40c8-a701-4892a8eb16c2',
        'title': 'Choose meal',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '81014b1e-435f-4c60-a211-9af3ca8f0b4f',
        'title': 'Choose seats',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '2f1a221e-4b3f-4412-96e8-fc8ca5ca46f2',
        'title': 'Upgrade to comfort class',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'ef36101f-d547-4613-b3c9-fd97412eb1e8',
        'title': 'Upgrade to business class',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '1ad4db9c-a5fa-41c3-99f1-3b6d359e8b64',
        'title': 'Add luggage',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'e60c7a9c-bf5d-4277-a3e7-cacfb84b69b9',
        'title': 'Business lounge',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': '201690d5-2022-4f0b-91af-f30a27e45259',
        'title': 'With automatic transmission',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '3b263bb2-4e83-4feb-8463-a1ea0f7acee6',
        'title': 'With air conditioning',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 'b3e5d124-fe3a-4ce5-b554-6881023c279f',
        'title': 'Choose live music',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '33f69901-7a33-4a52-b753-6eeabb40e3b6',
        'title': 'Choose VIP area',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  }
];

export { offersMock };
