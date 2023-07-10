import React, { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  expandable: boolean;
}

function AdminNavigation({ expandable = true, ...props }: Props) {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <div
      {...props}
      data-state={isExpanded && expandable ? "expanded" : ""}
      className="fixed inset-0 grid grid-cols-[min(4rem,16vw),1fr] data-[state=expanded]:grid-cols-[min(16rem,50vw),1fr] transition-all delay-100"
    >
      <div
        className="bg-slate-200 rounded-tr-lg rounded-br-lg"
        onClick={() => setExpanded((prev) => !prev)}
      ></div>
      <div className="bg-slate-200 m-2 rounded-xl right-1 shadow"></div>
    </div>
  );
}

export default AdminNavigation;
