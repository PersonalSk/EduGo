import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css"

const SideBar = () => {
  const [parentList, setParentList] = useState<{ parentItem: string; children: string[] }[]>([]);
  const [openParent, setOpenParent] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/parents")
      .then((response) => response.json())
      .then((data) => setParentList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleParent = (parent: string) => {
    console.log(parent)
    setOpenParent(openParent === parent ? null : parent);
  };

  const handleChildClick = (child: string) => {
    navigate(`/page/${child}`);
  };

  return (
    <div className="sidebar">
      <h3>Parent List</h3>
      <ul className="Side-bar-list">
        {parentList.map((parent) => (
          <li key={parent.parentItem} className="parent-item">
            <div className="parent-box" onClick={() => toggleParent(parent.parentItem)}>
              {parent.parentItem}
            </div>
            {openParent === parent.parentItem && (
              <ul className="child-list">
                {parent.children.map((child) => (
                  <li key={child} className="child-box" onClick={() => handleChildClick(child)}>
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
