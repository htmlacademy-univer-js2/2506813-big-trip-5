import { getRandomPrice } from '../utils';

const minPrice = 240;
const maxPrice = 4100;

const pointsMock = [
  {
    'id': '41984c0c-95b6-46dc-8063-6ad432dc15c7',
    'base_price': getRandomPrice(minPrice, maxPrice),
    'date_from': '2025-05-18T21:43:15.048Z',
    'date_to': '2025-05-19T12:06:15.048Z',
    'destination': 'c39f649d-6f60-4817-ab61-991f7e1f0daa',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '6c905af8-86ad-4f8b-ab49-27b99a3f9564',
    'base_price': 4098,
    'date_from': '2025-05-20T10:13:15.048Z',
    'date_to': '2025-05-21T10:29:15.048Z',
    'destination': 'aa76c36d-d8d3-4219-9043-6faf802f0db5',
    'is_favorite': false,
    'offers': [
      '1ad4db9c-a5fa-41c3-99f1-3b6d359e8b64',
      'e60c7a9c-bf5d-4277-a3e7-cacfb84b69b9'
    ],
    'type': 'ship'
  },
  {
    'id': '5d28e655-eab5-4534-99f9-3a55c6a72174',
    'base_price': 930,
    'date_from': '2025-05-22T01:55:15.048Z',
    'date_to': '2025-05-23T17:35:15.048Z',
    'destination': 'aa76c36d-d8d3-4219-9043-6faf802f0db5',
    'is_favorite': false,
    'offers': [
      '34629ed2-db20-465d-84ce-072e74af7ca5',
      'eb25922d-471b-4058-b1f4-4e1fb8e2161e'
    ],
    'type': 'check-in'
  },
  {
    'id': '260e378a-161c-43f3-94eb-fe99b087e822',
    'base_price': 5185,
    'date_from': '2025-05-24T14:22:15.048Z',
    'date_to': '2025-05-25T16:48:15.048Z',
    'destination': '3d15d0b4-0efa-4aca-bf66-eab12815665a',
    'is_favorite': true,
    'offers': [
      '07e9d764-9a28-4479-9ea6-fb83419e3d9b',
      '412e00fd-e50d-4195-bfdc-eef223c84ef4',
      '101022b2-5c0a-4dc3-9b37-30de228c7c70',
      '70574639-3fb5-4647-839e-c312c59bd537',
      'ddff2e3b-1153-4796-aeb2-cef59146dac2',
      'd406d2f0-4c3e-43a0-b000-23f0af37665f'
    ],
    'type': 'flight'
  },
  {
    'id': '73d6123d-dd11-4fdf-8148-99e07b79e8d1',
    'base_price': 5632,
    'date_from': '2025-05-27T08:21:15.048Z',
    'date_to': '2025-05-28T07:09:15.048Z',
    'destination': '3d15d0b4-0efa-4aca-bf66-eab12815665a',
    'is_favorite': false,
    'offers': [
      '34629ed2-db20-465d-84ce-072e74af7ca5',
      'eb25922d-471b-4058-b1f4-4e1fb8e2161e'
    ],
    'type': 'check-in'
  },
  {
    'id': '909a715d-3713-44d4-8f51-6b5e02d9dea5',
    'base_price': 3426,
    'date_from': '2025-05-28T19:54:15.048Z',
    'date_to': '2025-05-29T13:52:15.048Z',
    'destination': 'b6e3ed7a-2a29-494b-9f36-8eeac711c512',
    'is_favorite': true,
    'offers': [],
    'type': 'flight'
  },
  {
    'id': 'c80f21a3-cb9a-4a66-9496-d686950bbca7',
    'base_price': 27,
    'date_from': '2025-05-30T09:28:15.048Z',
    'date_to': '2025-06-01T05:58:15.048Z',
    'destination': '4d3e5c83-03d2-4930-83be-92ab45024bc2',
    'is_favorite': false,
    'offers': [
      '201690d5-2022-4f0b-91af-f30a27e45259',
      '3b263bb2-4e83-4feb-8463-a1ea0f7acee6'
    ],
    'type': 'drive'
  },
  {
    'id': '155b83ef-fb99-457b-add3-45fe9086b3ed',
    'base_price': 4629,
    'date_from': '2025-06-01T14:11:15.048Z',
    'date_to': '2025-06-03T14:49:15.048Z',
    'destination': 'b6e3ed7a-2a29-494b-9f36-8eeac711c512',
    'is_favorite': false,
    'offers': [
      'b3e5d124-fe3a-4ce5-b554-6881023c279f',
      '33f69901-7a33-4a52-b753-6eeabb40e3b6'
    ],
    'type': 'restaurant'
  },
  {
    'id': '29874c4a-6d8e-40b2-b3c1-3c80be56a05b',
    'base_price': 8307,
    'date_from': '2025-06-04T10:47:15.048Z',
    'date_to': '2025-06-05T14:19:15.048Z',
    'destination': 'b6e3ed7a-2a29-494b-9f36-8eeac711c512',
    'is_favorite': false,
    'offers': [
      'eb25922d-471b-4058-b1f4-4e1fb8e2161e'
    ],
    'type': 'check-in'
  },
  {
    'id': '1b8bb3eb-2068-432d-9eba-25ef1e65c160',
    'base_price': 1840,
    'date_from': '2025-06-05T23:58:15.048Z',
    'date_to': '2025-06-07T23:23:15.048Z',
    'destination': 'c39f649d-6f60-4817-ab61-991f7e1f0daa',
    'is_favorite': true,
    'offers': [
      '70574639-3fb5-4647-839e-c312c59bd537',
      'ddff2e3b-1153-4796-aeb2-cef59146dac2',
      'd406d2f0-4c3e-43a0-b000-23f0af37665f'
    ],
    'type': 'flight'
  },
  {
    'id': '62919b2d-7a59-4748-b20a-c4515bd60f71',
    'base_price': 6186,
    'date_from': '2025-06-09T05:31:15.048Z',
    'date_to': '2025-06-10T01:52:15.048Z',
    'destination': '379e956c-011d-4c48-a6bd-aee1e598b764',
    'is_favorite': false,
    'offers': [
      '2f1a221e-4b3f-4412-96e8-fc8ca5ca46f2',
      'ef36101f-d547-4613-b3c9-fd97412eb1e8',
      '1ad4db9c-a5fa-41c3-99f1-3b6d359e8b64',
      'e60c7a9c-bf5d-4277-a3e7-cacfb84b69b9'
    ],
    'type': 'ship'
  },
  {
    'id': '94d5f177-cd25-4a17-bf45-2ee15aac9274',
    'base_price': 4154,
    'date_from': '2025-06-11T18:13:15.048Z',
    'date_to': '2025-06-12T22:56:15.048Z',
    'destination': 'b6e3ed7a-2a29-494b-9f36-8eeac711c512',
    'is_favorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '3021275a-f659-444e-bc3f-63fa9acd4c8c',
    'base_price': 2047,
    'date_from': '2025-06-13T12:44:15.048Z',
    'date_to': '2025-06-14T05:54:15.048Z',
    'destination': '4d3e5c83-03d2-4930-83be-92ab45024bc2',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '52fd8c50-34aa-4f50-8b5b-c3c4418f5c6c',
    'base_price': 4504,
    'date_from': '2025-06-16T03:01:15.048Z',
    'date_to': '2025-06-17T14:13:15.048Z',
    'destination': 'acc76198-ed87-441b-866f-1dbaee760580',
    'is_favorite': false,
    'offers': [
      '6a3fa2fb-07ee-493b-a68b-78efae40569b',
      '0fe27890-0662-4e92-9486-04ea97a7d17a',
      '2f4aa8cf-bfec-4416-b83a-26dbbb91b6c3',
      '34629ed2-db20-465d-84ce-072e74af7ca5',
      'eb25922d-471b-4058-b1f4-4e1fb8e2161e'
    ],
    'type': 'check-in'
  },
  {
    'id': 'a78e5627-3cd9-46db-96fc-3151cede1fb0',
    'base_price': 982,
    'date_from': '2025-06-19T09:57:15.048Z',
    'date_to': '2025-06-19T17:03:15.048Z',
    'destination': 'e2e05979-e2cd-4457-a388-21c0a168a59b',
    'is_favorite': false,
    'offers': [
      'b3e5d124-fe3a-4ce5-b554-6881023c279f',
      '33f69901-7a33-4a52-b753-6eeabb40e3b6'
    ],
    'type': 'restaurant'
  },
  {
    'id': 'b55c40a6-0e78-4517-a0c8-e64f7b2491a0',
    'base_price': 3590,
    'date_from': '2025-06-21T18:01:15.048Z',
    'date_to': '2025-06-23T05:30:15.048Z',
    'destination': 'c6f2af50-afa4-4b93-a658-4e24babb95a3',
    'is_favorite': true,
    'offers': [
      'd406d2f0-4c3e-43a0-b000-23f0af37665f'
    ],
    'type': 'flight'
  },
  {
    'id': '6e84cc2d-50fb-4a60-a7d2-dd420c394dd2',
    'base_price': 8720,
    'date_from': '2025-06-24T11:44:15.048Z',
    'date_to': '2025-06-26T02:35:15.048Z',
    'destination': 'aa76c36d-d8d3-4219-9043-6faf802f0db5',
    'is_favorite': true,
    'offers': [
      '3b263bb2-4e83-4feb-8463-a1ea0f7acee6'
    ],
    'type': 'drive'
  },
  {
    'id': '16919738-c258-46ab-b924-3b23aa3618d6',
    'base_price': 3180,
    'date_from': '2025-06-27T13:07:15.048Z',
    'date_to': '2025-06-28T14:11:15.048Z',
    'destination': '3d15d0b4-0efa-4aca-bf66-eab12815665a',
    'is_favorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '4f78b4ba-fde9-48e1-aee1-6346a4cc2588',
    'base_price': 8180,
    'date_from': '2025-06-29T20:45:15.048Z',
    'date_to': '2025-06-30T23:04:15.048Z',
    'destination': 'c39f649d-6f60-4817-ab61-991f7e1f0daa',
    'is_favorite': true,
    'offers': [
      'a80ef544-5412-439a-a599-e5968798ea1d',
      'dd8281ff-10b2-4094-a77d-b455bc79b656'
    ],
    'type': 'bus'
  },
  {
    'id': 'b6278d15-6f79-4bd6-b93a-21f999565f94',
    'base_price': 8729,
    'date_from': '2025-07-01T20:44:15.048Z',
    'date_to': '2025-07-03T21:32:15.048Z',
    'destination': 'b6e3ed7a-2a29-494b-9f36-8eeac711c512',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'f544d95c-aee7-42ce-bf1b-1e2eec7dc2ab',
    'base_price': 8621,
    'date_from': '2025-07-05T12:47:15.048Z',
    'date_to': '2025-07-06T08:52:15.048Z',
    'destination': 'aa76c36d-d8d3-4219-9043-6faf802f0db5',
    'is_favorite': false,
    'offers': [
      'd406d2f0-4c3e-43a0-b000-23f0af37665f'
    ],
    'type': 'flight'
  },
  {
    'id': 'a2655a77-0631-497e-bc97-91a83070db90',
    'base_price': 1788,
    'date_from': '2025-07-07T16:58:15.048Z',
    'date_to': '2025-07-08T03:59:15.048Z',
    'destination': 'e2e05979-e2cd-4457-a388-21c0a168a59b',
    'is_favorite': false,
    'offers': [
      'c8756ba6-859f-4fb2-8f97-2b04164a4792',
      'a80ef544-5412-439a-a599-e5968798ea1d',
      'dd8281ff-10b2-4094-a77d-b455bc79b656'
    ],
    'type': 'bus'
  },
  {
    'id': '30b86c56-988d-4a18-9d46-da91b861b8ef',
    'base_price': 6952,
    'date_from': '2025-07-09T22:50:15.048Z',
    'date_to': '2025-07-11T20:01:15.048Z',
    'destination': 'c6f2af50-afa4-4b93-a658-4e24babb95a3',
    'is_favorite': true,
    'offers': [
      '70574639-3fb5-4647-839e-c312c59bd537',
      'ddff2e3b-1153-4796-aeb2-cef59146dac2',
      'd406d2f0-4c3e-43a0-b000-23f0af37665f'
    ],
    'type': 'flight'
  },
  {
    'id': '80e65fc0-b0c8-405f-88fc-77f186de5eee',
    'base_price': 5870,
    'date_from': '2025-07-13T12:40:15.048Z',
    'date_to': '2025-07-14T20:14:15.048Z',
    'destination': 'acc76198-ed87-441b-866f-1dbaee760580',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '93418d37-3a5a-4c52-af32-d468ccfac609',
    'base_price': 3104,
    'date_from': '2025-07-15T14:23:15.048Z',
    'date_to': '2025-07-17T05:15:15.048Z',
    'destination': '4d3e5c83-03d2-4930-83be-92ab45024bc2',
    'is_favorite': true,
    'offers': [
      '3b263bb2-4e83-4feb-8463-a1ea0f7acee6'
    ],
    'type': 'drive'
  }
];

export { pointsMock };
