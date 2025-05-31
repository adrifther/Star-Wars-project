import "./InfoCards.css"

export const InfoCards = ({name}) => {

return (
<>
<div className="container-fluid rounded p-2" >
  <img src="https://cdn.unotv.com/images/2025/02/perrito-reza-y-luego-come-jpg-134917-1024x576.jpg" className="rounded" alt="..."/>
  <div className="body">
    <p className="text fs-2">{name}</p>
    <p className="text fs-5"></p>
    <p className="text fs-5">Info 2</p>
    <p className="text fs-5">Info 3</p>
  </div>
</div>
</>
)
};
