import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {


  public data = [

    {
      id: 1,
      url: '../../assets/photos/btc.jpg',
      title: 'Bitcoin',
      author: 'Satoshi Nakamoto',
      description: 'crypto monnais'
    },
    {
      id: 2,
      url: '../../assets/photos/eth.jpg',
      title: 'Etherum',
      author: 'Vitalik Buterin',
      description: 'crypto monnais'
    },
    {
      id: 3,
      url: '../../assets/photos/xrp.jpg',
      title: 'Ripple',
      author: 'Chris Larsen',
      description: 'crypto monnais'
    },
    {
      id: 4,
      url: '../../assets/photos/ltc.jpg',
      title: 'Litecoin',
      author: 'Charlie Lee',
      description: 'crypto monnais'
    },
    {
      id: 5,
      url: '../../assets/photos/tezos.jpg',
      title: 'Tezos',
      author: 'Arthur Breitman',
      description: 'crypto monnais'
    }
  ];

  constructor() { }
}
