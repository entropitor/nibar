import {run} from 'uebersicht';
import styles from "./styles.jsx";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "8px"
};

const desktopStyle = {
  width: "4ch",
};

const renderSpace = (index, focused, visible, windows) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = styles.colors.accent;
    contentStyle.fontWeight = "700";
  } else if (visible == 1) {
    contentStyle.color = styles.colors.fg;
  }
  const onClick = () => run(`/usr/local/bin/yabai -m space --focus ${index}`)

  return (
    <div style={contentStyle} onClick={onClick}>
      &nbsp;
      {hasWindows ? `[${index}]` : `-${index}-`}
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function(space) {
    spaces.push(renderSpace(space.index, space.focused, space.visible, space.windows));
  });

  return (
    <div style={containerStyle}>
      {spaces}
    </div>
  );
};

export default render;
