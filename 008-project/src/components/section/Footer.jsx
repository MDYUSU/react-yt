import React from 'react'

const Footer = () => {
  return (
     <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mt-auto">
  {/* LEFT: logo + text */}
  <div className="flex items-center gap-3">
    <img
      src="data:image/webp;base64,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"
      className="w-10 h-10 object-contain"
      alt="logo"
    />

    <div className="text-sm font-medium leading-tight">
      <p>Azure Data</p>
      <p>Engineer</p>
    </div>
  </div>

  {/* RIGHT: button */}
  <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
    View
  </button>

</div>
  )
}

export default Footer
