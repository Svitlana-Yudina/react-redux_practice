// const ADD = 'goods/ADD';
// const TAKE = 'goods/TAKE';
// const CLEAR = 'goods/CLEAR';

enum Actions {
  ADD = 'goods/ADD',
  TAKE = 'goods/TAKE',
  CLEAR = 'goods/CLEAR',
}

type GoodAction = {
  type: Actions,
  payLoad: string,
};

const add = (good: string): GoodAction => (
  {type: Actions.ADD, payLoad: good}
);
const take = (good: string): GoodAction => (
  {type: Actions.TAKE, payLoad: good}
);
const clear = (): GoodAction => (
  {type: Actions.CLEAR, payLoad: ''}
);

export const goodsActions = { add, take, clear };

const goodsReducer = (goods:string[] = [], action: GoodAction) => {
  switch (action.type) {
    case Actions.ADD:
      return [...goods, action.payLoad];

    case Actions.TAKE:
      return goods.filter(good => good !== action.payLoad);

    case Actions.CLEAR:
      return [];

    default:
      return goods;
  }
};

export default goodsReducer;
