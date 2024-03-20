import React from 'react';

const Value = () => {
  return (
    <div>
    <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Top Companies Data</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Apple</h3>
          <p> Iconic tech company, creator of iPhone, iPad, Mac; known for design excellence and market leadership1.
.</p>
          <a href="#" className="btn btn-primary">
          Details
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Microsoft</h3>
          <p> Global technology leader, offering Windows OS, Office suite, cloud services, and hardware innovations1.</p>
          <a href="#" className="btn btn-success">
           Details
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools"></use></svg>
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">NVIDIA</h3>
          <p> Dominates graphics processing, AI computing; driving advancements in gaming, professional visualization, data centers1.</p>
          <a href="#" className="btn btn-warning">
          Details
          </a>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Value
