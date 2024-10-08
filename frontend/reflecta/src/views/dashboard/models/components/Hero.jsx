import GridModels from "./Gridmodels";
import Gradientwrapper from "@/components/GradientWrapper";

import React from "react";
import Title from "@/components/Title";

export default function Hero() {
  return (
    <section>
      <Gradientwrapper wrapperClassName='max-w-xl h-[200px] top-12 inset-0 sm:h-[200px] lg:h-[400px]'>
        <Title text='Predictive models' />
      </Gradientwrapper>
      <p className='mx-5 lg:mx-32 text-center text-lg font-medium'>
        Thanks to the amazing field of Machine Learning, we can propose really interesting and powerful solutions!
      </p>
      <GridModels />
    </section>
  );
}
