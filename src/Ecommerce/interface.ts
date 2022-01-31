export interface Children {
  children: React.ReactChild | React.ReactChild[];
}

export interface Name {
  name: string;
}

export interface Price {
  price: string;
}

export interface FoodItems {
  id: string;
  name: string;
  price: string;
  itemImage: string;
}

export interface ProductContentProps extends Name, Price {
  children?: React.ReactChild | React.ReactChild[];
}

export interface ButtonProps {
  className?: string;
  value?: string;
  onClick: () => void;
  children?: React.ReactChild | React.ReactChild[];
  type?: "button" | "submit" | "reset";
}

export interface PanelProps {
  heading: string;
  className?: string[];
  children: React.ReactChild | React.ReactChild[];
}

export interface PlateProps extends Name {
  image: string;
  quantity?: number;
}

export interface Cart {
  id: string;
  itemImage: string;
  name: string;
  price: string;
  quantity: number;
}