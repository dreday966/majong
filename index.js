
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

const matchedIndexs = (cards, playedCard) => cards.reduce(
  (pre, cur, curIndex) => (
    cur === playedCard ? [...pre, curIndex] : pre
  ),
  []
);

const pengBuPeng = (cards, playedCard) => matchedIndexs(cards, playedCard).length === 2;

const gangBuGang = (cards, playedCard) => matchedIndexs(cards, playedCard).length === 3;

const chiBuChi = (cards, playedCard) => {

  const mapedPlayedCard = map[playedCard];

  if (mapedPlayedCard[0] === 'c') {
    const mappedCards = cards.map(card => map[card]);
    
    const filtered = mappedCards
      .filter(card => card[0] === 'c' && card[2] === mapedPlayedCard[2]);

    const digit = Number(mapedPlayedCard[1]);

    return [
      [digit + 1, digit - 1],
      [digit - 1, digit - 2],
      [digit + 1, digit + 2],
    ].map(
      arr => {
        const [fir, sec] = arr;

        const findedFir = filtered
          .find(card => Number(card[1]) === fir);

        const findedSec = filtered
          .find(card => Number(card[1]) === sec);

        const firIndex = mappedCards
          .findIndex(val => val === findedFir)

        const secIndex = mappedCards
          .findIndex(val => val === findedSec)

        return (firIndex !== -1 && secIndex !== -1) ?
          [firIndex, secIndex] : undefined
      }
    ).filter(val => val);
  } else {
    return [];
  }
};

const check = (array) => {
  const maped = array.map(val => map[val]),
    [a, b ,c] = maped;

  if(a === b && b === c){
    return '碰';
  }

  if (a[0] === 'c' && b[0] === 'c' && c[0] === 'c'){
    const sorted = maped.map(val => Number(val[1]))
    .sort((a, b) => a > b);

    if (
      sorted[0] + 1 === sorted[1] &&
      sorted[1] + 1 === sorted[2]
    ){
      return '吃'
    }
  }

}

const hubuhu = (cards, playedCard) => {

};

exports.chiBuChi = chiBuChi;
exports.pengBuPeng = pengBuPeng;
exports.gangBuGang = gangBuGang;
exports.hubuhu = hubuhu;
exports.check = check;