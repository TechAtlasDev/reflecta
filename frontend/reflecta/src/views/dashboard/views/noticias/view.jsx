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
  }, []);

  return (
    <main>
      <Navbar />
      <Title text='Noticias del Landsat9' />
      <GridIntegrations>
        {listNews.length > 0 ? (
          listNews.map((item) => (
            <ItemIntegrations
              size='md:col-span-4'
              key={item.title}
              title={item.title}
              image={item.image}
            >
              {item.Fecha}
              <br /> {item.Extracto}
            </ItemIntegrations>
          ))
        ) : (
          <p>No hay noticias disponibles</p>
        )}
      </GridIntegrations>
    </main>
  );
}
