import Spaces from "./lib/Spaces.jsx";

export const refreshFrequency = false;
export const command = "./nibar/scripts/spaces.sh 1";

export const render = ({output}) => {
  return <Spaces output={output} />
}
export default null;
