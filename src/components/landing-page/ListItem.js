import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/solid";

const ListItem = ({ text }) => {
  return (
    <li className="flex gap-x-4 text-[#666666] text-xl font-Museo-Sans-Rounded-500 mb-5">
      <CheckCircleIcon className="h-6 text-[#077997] shrink-0" />
      {text}
    </li>
  );
};

export default ListItem;
