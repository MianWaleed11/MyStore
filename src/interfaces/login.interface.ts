export interface ILoginData {
  email: string;
  username: string;
  password: string;
  name: nameData;
  address: addressData;
  phone: number;
}

interface nameData {
  firstname: string;
  lastname: string;
}
interface addressData {
  city: string;
  street: string;
  number: number;
  zipcode: number;
  geolocation: locationData;
}

interface locationData {
  lat: number;
  long: number;
}
