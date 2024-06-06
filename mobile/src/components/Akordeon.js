function Akordeon () {
return (
<div className="accordion accordion flush" id="accordionId">
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
    Accordion item one
 </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show">
<div className="accordion-body">
    <strong>This is a very nice</strong>
    <p>About nice day.About nice day.About nice day.
        About nice day.About nice day.About nice day.About nice day.
        About nice day.About nice day.About nice day.About nice day.
        About nice day.</p>
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
    Accordion item two
 </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse show">
<div className="accordion-body">
    <strong>This is a very nice</strong>
    <p>About nice day.About nice day.About nice day.
        About nice day.About nice day.About nice day.About nice day.
        About nice day.About nice day.About nice day.About nice day.
        About nice day.</p>
</div>
</div>
</div>

</div>
);

}


