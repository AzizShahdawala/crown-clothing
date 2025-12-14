import { useContext } from "react";
import { LoaderContext } from "./loader-context";
import Spinner from "../../components/spinner/spinner.component";

const GlobalLoader = () => {
  const { isLoading } = useContext(LoaderContext);
  return isLoading ? <Spinner /> : null;
};

export default GlobalLoader;
