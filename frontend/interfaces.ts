interface Company {
  bs: string;
  name: string;
  catchPhrase: string;
}

interface GeoLocation {
  lat: string;
  lng: string;
}

interface Address {
  city: string;
  suite: string;
  street: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  address: Address;
  company: Company;
}

export interface AlertProps {
  msg: string;
  zIndex?: string;
  bgColor?: string;
  duration?: number;
  textColor?: string;
}
