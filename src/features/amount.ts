enum Actions {
  ADD = 'amount/ADD',
  TAKE = 'amount/TAKE',
  CLEAR = 'amount/CLEAR',
}

type AmountAction = {
  type: Actions,
  payLoad: number,
};

const add = (value: number): AmountAction => (
  {type: Actions.ADD, payLoad: value}
);
const take = (value: number): AmountAction => (
  {type: Actions.TAKE, payLoad: value}
);
const clear = (): AmountAction => (
  {type: Actions.CLEAR, payLoad: 0}
);

export const amountActions = { add, take, clear };

const amountReducer = (amount = 0, action: AmountAction) => {
  switch (action.type) {
    case Actions.ADD:
      return amount + action.payLoad;

    case Actions.TAKE: {
      if (action.payLoad > amount) {
        return 0;
      }

      return amount - action.payLoad;
    }

    case Actions.CLEAR:
      return 0;

    default:
      return amount;
  }
};

export default amountReducer;
