
'万', '条' ，'筒'
'东' '南' '西' '北' '中' '发'

const map = {
  一万: 'c1w',
  二万: 'c2w',
  三万: 'c3w',
  四万: 'c4w',
  五万: 'c5w',
  六万: 'c6w',
  七万: 'c7w',
  八万: 'c8w',
  九万: 'c9w',
  
  一条: 'c1t',
  二条: 'c2t',
  三条: 'c3t',
  四条: 'c4t',
  五条: 'c5t',
  六条: 'c6t',
  七条: 'c7t',
  八条: 'c8t',
  九条: 'c9t',

  一筒: 'c1o',
  二筒: 'c2o',
  三筒: 'c3o',
  四筒: 'c4o',
  五筒: 'c5o',
  六筒: 'c6o',
  七筒: 'c7o',
  八筒: 'c8o',
  九筒: 'c9o',

  东风: 'dong',
  南风: 'nan',
  西风: 'xi',
  北风: 'bei',
  发: 'fa',
  中: 'zhong'
}

const matchedIndexs = (cards, playedCard) => myCards.reduce(
  (pre, cur, curIndex) => (
    cur === playedCard ? [...pre, curIndex] : pre
  ),
  []
);

const pengBuPeng = (cards, playedCard) => matchedIndexs(cards, playedCard).length === 2;

const gangBuGang = (cards, playedCard) => matchedIndexs(cards, playedCard).length === 3;

const chiBuChi = (cards, playedCard) => {


};
