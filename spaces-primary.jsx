import Spaces from "./lib/Spaces.jsx";

export const refreshFrequency = false;
export const command = "./nibar/scripts/spaces.sh";

export const render = ({output}) => {
  return <Spaces output={output} index={1} />
}
export default null;
