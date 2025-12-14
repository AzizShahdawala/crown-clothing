import { createContext, useState, useEffect, useContext } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { LoaderContext } from "../loader-context/loader-context";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  const { showLoader, hideLoader } = useContext(LoaderContext);

  useEffect(() => {
    const fetchCategories = async () => {
      showLoader(); 
      try {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        hideLoader(); 
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={categoriesMap}>
      {children}
    </CategoriesContext.Provider>
  );
};
