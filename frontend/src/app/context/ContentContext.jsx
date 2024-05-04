"use client";

import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("alumnos");

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegúrate de incluir esta validación para 'children'
};

export const useContentContext = () => useContext(ContentContext);
