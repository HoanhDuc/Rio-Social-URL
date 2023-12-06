import axios from "axios";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

const styles = {
  containerTag: {
    background: "rgb(222, 222, 222)",
    padding: "5px 10px",
    borderRadius: "50px",
    width: "fit-content",
    display: "flex",
    gap: "5px",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "500",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  title: {
    fontSize: "14px",
    lineHeight: "10px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  } as React.CSSProperties,
};

export interface IPropsRioSocialTag {
  url: string;
  size?: string;
}

const RioSocialTag: React.FC<IPropsRioSocialTag> = ({ url, size }) => {
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    handleFetchTitle();
  }, []);

  const handleFetchTitle = async () => {
    try {
      const response: any = await axios.get(`https://cors.eu.org/${url}`);
      const html = await response.data;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const pageTitle: any = tempDiv.querySelector("title");
      setTitle(pageTitle ? pageTitle.textContent : "Title not found");
    } catch (error) {
      setTitle("Click here");
    }
  };

  return (
    <div style={styles.containerTag} onClick={() => window.open(url)}>
      <SocialIcon url={url} style={styles.icon} />
      <span style={styles.title}>{title}</span>
    </div>
  );
};
export default RioSocialTag;
