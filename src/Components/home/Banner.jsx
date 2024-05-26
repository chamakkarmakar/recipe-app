import React from 'react'

const Banner = () => {
    return (
        <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/dinner-preparation-with-uncooked-pastas-cayenne-peppers-tied-one-another-with-rope-oil-bottle-lemon-garlic-notebook-mixed-color-table_140725-86664.jpg?t=st=1716691802~exp=1716695402~hmac=880f1ede8d0443d324ca1caf8564d3e783c7594f75f1039e6b8789ef56bc42b4&w=740")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-serif font-semibold">Find your Favourite Food</h1>
          
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    )
}

export default Banner
