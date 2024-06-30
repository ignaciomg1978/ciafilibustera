// src/components/LeftMenu.tsx
import React from "react";

const LeftMenu: React.FC = () => {
  return (
    <aside className="w-1/5 bg-gray-100 p-4">
      <ul className="list-none p-0">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </aside>
  );
};

export default LeftMenu;
