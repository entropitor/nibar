import Spaces from "./lib/Spaces.jsx";

export const refreshFrequency = false;
export const command = "./nibar/scripts/spaces.sh";

export const render = ({output}) => {
  return <Spaces output={output} index={3} />
}
export default null;
