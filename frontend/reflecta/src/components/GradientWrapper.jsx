export default function Gradientwrapper(props) {
  return (
    <div class={`relative ${props.className || ""}`}>
      <div
        class={`absolute m-auto blur-[160px] ${props.wrapperClassName || ""}`}
        style={{
          background:
            "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
        }}
      ></div>
      <div class='relative'>{props.children}</div>
    </div>
  );
}
