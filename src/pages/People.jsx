import "../css/learn-more.css"

export const People = () => {

return (

<>
<div className="container">
<div className="heading d-flex flex-row p-2">
  <img src="https://cdn.unotv.com/images/2025/02/perrito-reza-y-luego-come-jpg-134917-1024x576.jpg" alt="" className="rounded"/>
  <div className="description text-center">
    <h1>Title</h1>
    <p>Lorem Ipsum</p>
  </div>
</div>
<div className="info d-flex flex-row p-2 text-center text-danger">
  <div className="infosmall d-flex flex-column">
    <div className="mb-3">info1</div>
    <div>desc1</div>
  </div>
  <div>
    <div className="mb-3">info2</div>
    <div>desc2</div>
  </div>
  <div>
    <div className="mb-3">info3</div>
    <div>desc3</div>
  </div>
  <div>
    <div className="mb-3">info4</div>
    <div>desc4</div>
  </div>
  <div>
    <div className="mb-3">info5</div>
    <div>desc5</div>
  </div>
  <div>
    <div className="mb-3">info6</div>
    <div>desc6</div>
  </div>
</div>
</div>
</>
)
}
