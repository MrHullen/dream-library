import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: 'h9kvjmt5',
  dataset: 'production',
  apiVersion: '2022-03-24', // choose the API version you want
  useCdn: true,
});

export default client;