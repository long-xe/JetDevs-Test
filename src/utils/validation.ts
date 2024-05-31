import { object, string } from "yup";

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const emailCheck = (email: string) => {
  if (!email || email.trim() === "") {
    return { errorMessage: "Required!", error: true };
  } else if (!validateEmail(email)) {
    return { errorMessage: "Please provide a valid email!", error: true };
  }
  return { errorMessage: undefined, error: false };
};

export const passwordCheck = (password: string) => {
  if (!password || password.trim() === "") {
    return { errorMessage: "Required!", error: true };
  } 
  return { errorMessage: undefined, error: false };
};

export const loginAccountCheck = (email: string, password: string) => {
  return (email === 'reactnative@jetdevs.com' && password === 'jetdevs@123') 
}