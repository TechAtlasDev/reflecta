import Navbar from "../../components/navbar";
import Title from "@/components/Title";
import GridIntegrations from "../../components/GridIntegrations";
import ItemIntegrations from "../../components/ItemIntegrations";

import Footer from "../../components/Footer";

export default function Noticias() {
  const listNew = [
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2024/09/matogrosso_L8_09.09.24_horiz2-300x169.jpg",
      title: "Tracking losses in the Amazon, Beyond the Rainforest",
      date: "September 23, 2024",
      link: "https://landsat.gsfc.nasa.gov/article/tracking-losses-in-the-amazon-beyond-the-rainforest/",
      description:
        "The Amazon is in trouble. Researchers found that, between 2000 and 2022, the Brazilian Amazon lost about 10% of its natural non-forest vegetation.",
    },
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2024/09/etoshazm_oli2_20240307-300x227.jpg",
      title: "Tracking Elephants Across Namibia",
      date: "September 17, 2024",
      link: "https://landsat.gsfc.nasa.gov/article/tracking-elephants-across-namibia/",
      description:
        "In a new study, researchers used GPS tracking data and satellite imagery to map elephant movement in northwestern Namibia, looking for corridors of connectivity.",
    },
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2024/05/brunt_iceberg_oli2_20240522-300x277.jpg",
      title: "Antartic Ice Shelf Spawns Iceberg A-83",
      date: "May 24, 2024",
      link: "https://landsat.gsfc.nasa.gov/article/antarctic-ice-shelf-spawns-iceberg-a-83/",
      description:
        "The Brunt Ice Shelf lost a large wedge of floating ice, the third sizeable iceberg to calve from the shelf in recent years. The TIRS instrument on Landsat 9 captured false-color images of the calving.",
    },
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2024/04/leapscenezm_oli_20230722_th-KG32Se-300x200.jpeg",
      title: "Scenes from the Polar Night",
      date: "April 2, 2024",
      link: "https://landsat.gsfc.nasa.gov/article/scenes-from-the-polar-night/",
      description:
        "Landsat satellites have begun regularly acquiring images of ice at the poles during the winter, with enlightening results.",
    },
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2022/08/L9Handover_11Aug2022-300x225.jpg",
      title:
        "NASA Transfers Landsat 9 Satellite to USGS to Monitor Earth’s Changes",
      date: "August 11, 2022",
      link: "https://landsat.gsfc.nasa.gov/article/nasa-transfers-landsat-9-satellite-to-usgs-to-monitor-earths-changes/",
      description:
        "NASA transferred ownership and operational control of the Landsat 9 satellite to the U.S. Geological Survey (USGS) in a ceremony in Sioux Falls, South Dakota on on Thursday, Aug. 11, 2022.",
    },
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2022/01/L9SanFrancisco-300x175.jpg",
      title: "NASA/USGS Landsat 9 Passes Review, Now Operational",
      date: "January 31, 2022",
      link: "https://landsat.gsfc.nasa.gov/article/nasa-usgs-landsat-9-passes-review-now-operational/",
      description:
        "Landsat 9, a joint mission of NASA and the U.S. Geological Survey (USGS), passed its post-launch assessment review and is now in its operational phase.",
    },
    {
      img: "https://landsat.gsfc.nasa.gov/wp-content/uploads/2021/12/australia_oli2_2021304_crop-300x205.png",
      title: "Landsat 9 to Provide a Wealth of Data to Landsat Archive",
      date: "December 16, 2021",
      link: "https://landsat.gsfc.nasa.gov/article/landsat-9-to-provide-a-wealth-of-data-to-the-longest-continuous-global-record-of-earth-imagery/",
      description:
        "Launched September 27, Landsat 9 will provide a high-quality and reliable stream of land imaging data for the next 10-plus years.",
    },
  ];

  return (
    <main>
      <Navbar />
      <Title text='Landsat 9 News' />
      <GridIntegrations>
        {listNew.length > 0 ? (
          listNew.map((item) => (
            <ItemIntegrations
              to={item.link}
              size='md:col-span-4'
              key={item.title}
              title={item.title}
              image={item.img}
            >
              {item.date}
              <br /> {item.description}
            </ItemIntegrations>
          ))
        ) : (
          <p>Loading News...</p>
        )}
      </GridIntegrations>
      <Footer />
    </main>
  );
}
