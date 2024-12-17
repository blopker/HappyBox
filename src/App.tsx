import { type Component, For, createSignal } from "solid-js";

const squareSize = 4;
const total = (100 / squareSize) ** 2;

function getColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getColors() {
  const colors = Array(total);
  for (let i = 0; i < total; i++) {
    colors[i] = getColor();
  }
  return colors;
  // return [...Array(2500).keys()].map(getColor);
}

function HappyBoxes() {
  const [colors, setCorlors] = createSignal(getColors());

  return (
    <div
      class="happy-boxes"
      onMouseMove={() => {
        setCorlors(getColors());
      }}
      onTouchMove={() => {
        setCorlors(getColors());
      }}
    >
      <For each={colors()}>{(i) => <HappyBox color={i} />}</For>
    </div>
  );
}

const HappyBox = (props: { color: string }) => {
  return <div class="happy-box" style={`background-color: ${props.color}`} />;
};

export default HappyBoxes;
