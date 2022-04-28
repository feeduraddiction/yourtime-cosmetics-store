export interface goodPropTypes {
  //types for all data of one object from DB
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

export interface goodDataPropTypes {
  /// For description page
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

export interface orderPropTypes {
  _id: string;
  username: string;
  status: string;
  orderDetails: {
    date: string;
    address: string;
    country: string;
    comment: string;
    goods: cartPropTypes[];
  };
}

export interface goodDescriptionPropTypes {
  goodData: goodPropTypes;
  goods: goodPropTypes[];
}

export interface buttonPropTypes {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface cardTextPropTypes {
  name: string;
  price: number;
  brand: string;
}

export interface goodCardPropTypes {
  key?: string;
  good: goodPropTypes;
}
