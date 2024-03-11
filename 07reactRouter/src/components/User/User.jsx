import React from "react";
import { useParams } from "react-router";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-500 text-white p-4 font-semibold">
      User: {userid}
    </div>
  );
}

export default User;
