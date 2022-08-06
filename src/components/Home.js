import React from "react";

export default function Home() {
  return (
    <>
      <div className="vstack gap-2 col-md-5 mx-auto">
        <button type="button" className="btn btn-secondary">
          Save changes
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Cancel
        </button>
      </div>
    </>
  );
}
