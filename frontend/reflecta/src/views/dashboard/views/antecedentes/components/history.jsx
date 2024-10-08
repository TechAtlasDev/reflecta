import React from "react";
import { Timeline } from "@/components/Timeline";

export function History() {
  const data = [
    {
      title: "Landsat 1 (1972)",
      content: (
        <div>
          <p>
            🚀 <b className='font-bold'>Launched on July 23, 1972</b>, Landsat 1 was the first civilian satellite to observe the Earth. With a multispectral camera, it was possible to study geology, hydrology, and cartography, contributing to the monitoring of natural resources and global environmental analysis.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Gq9mrdSIVeY6emShe42jXYgtMpAhHRwjJw&s'
              alt='Landsat 1'
              className='self-center'
            />
            <img
              src='https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/L1b_0.jpg?itok=kh5Hh1Jw'
              alt='Landsat 1'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCfNUsztzjc8KzvBT2fPgXyv9HoYCkxOISA&s'
              alt='Landsat 1'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDaTYiUjySaUZvJnlx-bF9QYlzXk3cDrC8A&s'
              alt='Landsat 1'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 2 (1975)",
      content: (
        <div>
          <p>
            📅 <b className='font-bold'>Launched on January 22, 1975</b>, Landsat 2 improved multispectral image capture, helping to monitor ecosystems and crops. It was also crucial in managing natural disasters such as floods.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://landsat.gsfc.nasa.gov/wp-content/uploads/2020-07/Landsat2_concept.jpg'
              alt='Landsat 2'
              className='self-center'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/3/38/Landsat-1.jpg'
              alt='Landsat 2'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUnyEyoirJPTkxWVnKvKrXQiLukc-JvTCFQ&s'
              alt='Landsat 2'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiRrSuMnm8NaiG5Xaw57Z-6-EfNa-CihAxA&s'
              alt='Landsat 2'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 3 (1978)",
      content: (
        <div>
          <p>
            🛰️ <b className='font-bold'>Launched on March 5, 1978</b>, the Landsat 3 improved sensor sensitivity for more accurate imaging, but its mission was limited by technical problems. Still, it was valuable for studies of climate change and urbanization.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/3/31/Landsat3.jpg'
              alt='Landsat 3'
              className='self-center'
            />
            <img
              src='https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/Sketch_of_ERTS-1_renamed_Landsat1_0.jpg?itok=Naz8L5zB'
              alt='Landsat 3'
              className='self-center'
            />
            <img
              src='https://landsat.gsfc.nasa.gov/wp-content/uploads/2022/08/OSAM_CAPTURED_ARMS-EXTENDED242-web-768x1024.jpg'
              alt='Landsat 3'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ihXxOxX6EFrMBNyMcJUdIJzWhPCYq9tWgw&s'
              alt='Landsat 3'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 4 (1982)",
      content: (
        <div>
          <p>
            🛰️ <b className='font-bold'>Launched on July 16, 1982</b>, Landsat 4 introduced the Thematic Mapper (TM), which increased resolution and the number of spectral bands, thereby improving ecosystem analysis and monitoring of long-term environmental changes.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://landsat.gsfc.nasa.gov/wp-content/uploads/2022/08/OSAM_CAPTURED_ARMS-EXTENDED242-web-768x1024.jpg'
              alt='Landsat 4'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5ePNrGrN6XNFDvGWzlOfOoYE3MZuwnYC8w&s'
              alt='Landsat 4'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGD1XMospyTP1d1jMyL3NbUSg2lIz4n4piw&s'
              alt='Landsat 4'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuH3GTGylsi5KVKgaZk__XqWuVaGZ2AQI42Q&s'
              alt='Landsat 4'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 5 (1984)",
      content: (
        <div>
          <p>
            📅 <b className='font-bold'>Launched on March 1, 1984</b>, Landsat 5 operated for more than 29 years, capturing millions of images that documented urban expansion, deforestation and the effects of climate change.
          </p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://landsat.gsfc.nasa.gov/wp-content/uploads/2022/08/OSAM_CAPTURED_ARMS-EXTENDED242-web-768x1024.jpg'
              alt='Landsat 5'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5EYHkVtj71evyJe4LaG1ANdqz6lwwW25vA&s'
              alt='Landsat 5'
              className='self-center'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Landsat5.jpg'
              alt='Landsat 5'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilAkys8VD8PMmu1hMI16pR-gNE38DLG14dg&s'
              alt='Landsat 5'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 6 (1993)",
      content: (
        <div>
          <p>
            📅 <b className='font-bold'>Landsat 6, launched on October 5, 1993</b>, failed to reach orbit, but was planned to continue the mission of its predecessors. Despite the loss, data from earlier Landsats remained useful.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://landsat.gsfc.nasa.gov/wp-content/uploads/2022/08/OSAM_CAPTURED_ARMS-EXTENDED242-web-768x1024.jpg'
              alt='Landsat 6'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UNQsazC3ETxNi9g1Jws8d2PpNt1ve-ysug&s'
              alt='Landsat 6'
              className='self-center'
            />
            <img
              src='https://ars.els-cdn.com/content/image/3-s2.0-B9780128092545000014-f01-26-9780128092545.jpg'
              alt='Landsat 6'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMh4yBwxXvQ1LxFJRPOEyJBxYBRbc4C-7dew&s'
              alt='Landsat 6'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 7 (1999)",
      content: (
        <div>
          <p>
            🚀 <b className='font-bold'>Launched on April 15, 1999</b>, Landsat 7 introduced the Enhanced Thematic Mapper Plus (ETM+). Although it failed in 2003, it remained useful in deforestation and glaciology studies.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafoAaE4Y9geob_F4h0I9TuB44jRzWXf9A3Q&s'
              alt='Landsat 7'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrfNFcZWJ2R5iV6esqq7wGRWZXtsRUOrr7A&s'
              alt='Landsat 7'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycOXdgF7Jadpp2oJrY9N9kxTQez_Ypi6a4A&s'
              alt='Landsat 7'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKgGqiSUHwPNMxYVoDoKkJ14jokTuQ6CWPfP_h4_c1Q8w8gGg2H8AKPu3zTzGG2IjjzE&usqp=CAU'
              alt='Landsat 7'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 8 (2013)",
      content: (
        <div>
          <p>
            🚀 <b className='font-bold'>Launched on February 11, 2013</b>, Landsat 8 incorporated the Operational Land Imaging (OLI) sensor and Thermal Infrared Sensor (TIRS), improving image resolution and enabling detailed studies of ecosystem health.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='data:image/jpeg;base64,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'
              alt='Landsat 8'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7YdqUOFYzGZL8EYWDWOc9TLxBV-C7IcW2w&s'
              alt='Landsat 8'
              className='self-center'
            />
            <img
              src='https://landsat.gsfc.nasa.gov/wp-content/uploads/2013/01/ldcm_2012_COL.png'
              alt='Landsat 8'
            />
            <img
              src='https://www.eoportal.org/ftp/satellite-missions/l/LS82022_220722/LS82022_Auto72.jpeg'
              alt='Landsat 8'
            />
          </div>
        </div>
      ),
    },
    {
      title: "Landsat 9 (2021)",
      content: (
        <div>
          <p>
            📅 <b className='font-bold'>Launched on September 27, 2021</b>, Landsat 9 continues the Earth-observing mission, providing essential data for monitoring climate change and conserving resources.
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxL9PMIFpZuFSO39GZf1G8Nj499Nwbb7y1A&s'
              alt='Landsat 9'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5ucc1l90ru8ocF179GuYX1WBN8H-tONdiw&s'
              alt='Landsat 9'
              className='self-center'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFmydg0CGwtZVAiaY09Tqt7fGFJOLqGijrg&s'
              alt='Landsat 9'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRD0CRg7nTdeq5lvsJzsQwL0m2OBGZeP_CA&s'
              alt='Landsat 9'
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='w-full overflow-x-hidden'>
      <Timeline
        data={data}
        title='Background of Landsat'
        description="Let's dive into the amazing world of Landsat and how its development impacted the entire world to this day!"
      />
    </div>
  );
}
