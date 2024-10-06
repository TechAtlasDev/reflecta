import Navbar from "../../components/navbar";
import Title from "@/components/Title";
import GridIntegrations from "../../components/GridIntegrations";
import ItemIntegrations from "../../components/ItemIntegrations";

import fetchData from "./functions";
import { useEffect, useState } from "react";

export default function Noticias() {
  const [listNews, setListNews] = useState([]);

  async function fetchListData() {
    try {
      const response = await fetchData();
      // Verifica que la respuesta sea un array
      if (Array.isArray(response)) {
        setListNews(response);
      } else {
        console.error("Error: La respuesta no es un array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchListData();
    console.log(listNews);
  }, []);

  return (
    <main>
      <Navbar />
      <Title text='Noticias del Landsat9' />
      <GridIntegrations>
        {/* Verifica que listNews no esté vacío antes de hacer el map */}
        {listNews.length > 0 ? (
          listNews.map((item, index) => (
            <ItemIntegrations key={index} text={item.h1}>
              {item.h1}
            </ItemIntegrations>
          ))
        ) : (
          <p>No hay noticias disponibles</p>
        )}
      </GridIntegrations>
    </main>
  );
}
