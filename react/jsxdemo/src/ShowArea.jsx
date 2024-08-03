import CalcArea from "./CalcArea";

// naed as .jsx as we are rendering HTML
function ShowArea() {
  const w = 100;
  const h = 100;
  const area = CalcArea(w, h);
  return (
    <div>
      <p>The calculated Area is {area}</p>
    </div>
  );
}

export default ShowArea;
