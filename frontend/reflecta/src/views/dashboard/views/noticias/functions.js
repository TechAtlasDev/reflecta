import { urlAPI } from "@/components/variables";

export default async function fetchData() {
  const url = `${urlAPI}/landsat9/news`;

  const response = await fetch(url);
  const data = await response.json();

  const responseData = data.news;

  return responseData;
}
