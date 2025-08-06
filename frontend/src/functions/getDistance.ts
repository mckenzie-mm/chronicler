// This is the action function used by the react form useActionState hook 

import fetchWrapper from "./fetchWrapper";

// Define the state of the form
type State = {
  message?: string
  err: boolean
  evenArr?: number[]
  oddArr?: number[]
  sum?: number
} | null;

async function getDistance(prevState: State, queryData: FormData): Promise<State> {

  const list = queryData.get('list')?.toString();
  const data: string[] = list ? list.trim().replace(/\s+/g, ' ').split(" ") : [];
  let evenArr: number[] = []; 
  let oddArr: number[] = []; 

  let err = false;
  let message = "";

  // validate list client side for speed
  if (!list) {
    return { message: "Please enter list", err: true}
  }
 
  for( let i = 0; i < data.length; i++) {
      const value = Number(data[i]);
      // validate list items client side for speed
      if (!value) {
        message = `Invalid list item. \'${data[i]}\' is not a number`;
        err = true;
        break;
      }
    (i % 2 === 0) ? evenArr.push(value) : oddArr.push(value);
  };

  if (err) {
    return { message, err: true }
  }

  return fetchWrapper({
    evenArr,
    oddArr,
  });
};

export default getDistance;