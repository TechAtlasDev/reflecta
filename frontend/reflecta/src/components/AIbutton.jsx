export default function AIButton(props) {
  const text = props.text;
  const to = props.to;

  return (
    <a href={to} class='flex items-center'>
      <span class='relative overflow-hidden inline-flex rounded-full p-[2px]'>
        <span class='absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#c41d91_100%)]'></span>
        <div class='inline-flex items-center justify-center w-full px-3 py-1 text-sm text-white bg-gradient-to-t from-slate-950 to-pink-950 rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap'>
          {text}
        </div>
      </span>
    </a>
  );
}
