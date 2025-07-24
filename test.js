const TextToSVG = require("text-to-svg");
const textToSVG = TextToSVG.loadSync();

const attributes = { fill: "red", stroke: "black" };
const options = {
  x: 0,
  y: 0,
  fontSize: 72,
  anchor: "top",
  attributes: attributes,
};

const svg = textToSVG.getSVG("C", options);

console.log(svg);

<text
  x="50%"
  y="90%"
  textAnchor="middle"
  fontFamily="Pacifico, cursive"
  fontSize="32"
  fill="#fff"
>
  Abdessamad Chahbi
</text>;

{
  /* <path
class="letter"
d="M217.153 158V149.968H223.101V118.488H217.153V110.456H240.122V118.488H235.132V128.913H248.086V118.488H243.267V110.456H266.099V118.488H260.117V149.968H266.099V158H243.267V149.968H248.086V136.979H235.132V149.968H240.122V158H217.153Z"
stroke="red"
stroke-width="3"
/> */
}
