export interface goodPropTypes { //types for all data of one object from DB
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  type: string;
  id: string;
}

export interface cartPropTypes extends goodPropTypes {
  quantity: number;
}

export interface goodDataPropTypes {  /// For description page
    goodData: goodPropTypes;
}

export interface goodsPropTypes {
    goods: goodPropTypes[];
}

export interface cartGoodsPropTypes {
  cartGoods: cartPropTypes[];
}

export interface cartGoodPropTypes {
  cartGood: cartPropTypes;
}




