import { GlareCard } from "@/components/Glarecard";

export default function Modelcard(props) {
  const title = props.title;
  const image = props.image;
  const description = props.description;
  const to = props.to;

  return (
    <a href={to || ""}>
      <GlareCard className='flex flex-col items-start justify-end py-8 px-6 relative'>
        <img
          className='h-full w-full absolute inset-0 object-cover -z-1 opacity-55'
          src={
            image ||
            "https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <p className='font-bold text-white text-lg relative'>{title}</p>
        <p className='font-normal text-base text-neutral-200 mt-4 relative'>
          {description}
        </p>
      </GlareCard>
    </a>
  );
}
