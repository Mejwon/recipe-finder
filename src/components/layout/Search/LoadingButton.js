import React from "react";

const Spinner = () => {
  return (
    <button
      className='btn btn-color btn-block btn-loading'
      type='button'
      disabled
    >
      <span
        className='spinner-border spinner-border-sm'
        role='status'
        aria-hidden='true'
      />
      Loading...
    </button>
  );
};

export default Spinner;
