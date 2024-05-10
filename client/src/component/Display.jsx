import React from 'react';
import Note from './Note';

function Display() {
  const data = [
    {
      title: "Note1",
      details: "lfsfsdfsdfsd fsdf sd f ds fsd f sdf sd f sd f sd fbsdbjs csd csd acsdcsdc  cds csdcsdcsd c sd csd c sdsc sd c sd c sdc sd dc sdcsdsc sd c ",
      tags: ["test", "note", 'fds', 'fdsfd', 'fsdf']
    },
    {
      title: "Note2",
      details: "this is note2"
    }
  ];
  return (
    <div className="flex h-screen bg-neutral-800 rounded-t-3xl p-20">
      {data.map((ele, idx) => {
        return <Note key={idx} data={ele}/>;
      })}
    </div>
  );
}

export default Display;
