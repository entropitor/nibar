import {run} from 'uebersicht';
import styles from "./styles.jsx";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "8px"
};

const desktopStyle = {
  textAlign: "center",
  paddingLeft: "1ch",
  color: '#ccc'
};

const LABELS = {
  1: "🦊",
  2: "📜",
  3: "💻",
  4: "➕",
  5: "➕",
  6: "➕",
  7: "➕",
  8: "✉️",
  9: "#️⃣"
}
const LABEL_REGEX = /(\d)+:@/
const annotateLabel = label => {
  const groups = label.match(LABEL_REGEX)
  if (!groups) {
    return label
  }
  const number = groups[1]
  return `${number}:${LABELS[number]}`
}
const fixLabel = label => annotateLabel(label.split(':').reverse().join(':'))
const renderSpace = ({space}) => {
  const {index, focused, visible, windows, label} = space;
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = styles.colors.accent;
    contentStyle.fontWeight = "700";
  } else if (visible == 1) {
    contentStyle.color = styles.colors.red;
  } else if (!hasWindows) {
    contentStyle.color = styles.colors.empty;
  }
  const onClick = () => run(`/usr/local/bin/yabai -m space --focus ${index}`)

  return (
    <div style={contentStyle} onClick={onClick}>
      {label != "" ? fixLabel(label) : hasWindows ? `[ ${index} ]` : `-${index}:?-`}
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function(space) {
    spaces.push(renderSpace({space}));
  });

  return (
    <div style={containerStyle}>
      {spaces}
    </div>
  );
};

export default render;
