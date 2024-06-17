import { LoaderFunctionArgs, json } from "@remix-run/node";

// Loader Function is used when this route is accessed via a GET method
export const loader = async ({ params }: LoaderFunctionArgs) => {
  //TODO: should do a check/validation for params

  //Can access model functionality here to send data to FE 
  //https://shopify.dev/docs/apps/build/build?framework=remix#create-the-model
  console.log('params: ', params);
};
