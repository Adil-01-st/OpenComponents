function NewForm1 () {

    return (
    <div className="container">
       <div className="row">
        <div className="col-md-2">


        </div>
        <div className="col-md-8">
         <h2>New form:</h2>
         <div className="md-3">
           <label for="email" classname="form-label">
            Email Address:
           </label>
           <input type="email" className="form-control" id="mail" placeholder="adi.kh.pl"/>
         </div>
         <div className="mb-3">
            <label for="textAreal" className="form-label">
                Description
            </label>
            <textarea className="form-control" id="textAreal" rows="4" placeholder="type for description"></textarea> 
         </div>
         <div className="mb-3">
            <label for="firstName" className="form-label">
               User Name:
            </label>
            <input type="text" className="form-control form-control-ig" id="firstName" placeholder="Stark"/>
         </div>
         <div className="mb-3">
            <label for="middleName" className="form-label">
               User Name:
            </label>
            <input type="text" className="form-control form-control-ig" id="middleName" placeholder="Musk"/>
         </div>
         <div className="mb-3">
            <label for="lastName" className="form-label">
               User name:
            </label>
            <input type="text" className="form-control form-control-" id="lastName" placeholder="Tesla"/>
         </div>

         <div className="mb-3">
          <label for="lastName2" className="form-label">
          User Name:
          </label>
          <input type="text" className="form-control" id="lastName2" placeholder="Kowalski" readOnly/>
         </div>
          
          <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
          </div>
          <div className="mb-3">
            <label for="color" className="form-label">
               Color:
            </label>
            <input type="color" className="form-control form-control" defaultValue="#ff0000" title="Choose a color" id="color"/>
          </div>
         
         <div className="mb-3">
            <div className="form-check form-switch">
             <input type="checkbox" className="form-check-input" id="checkbox"/>
             <label for="checkbox" className="form-label">
               Click:
             </label>
            </div>
         </div>
        </div>
      <div className="col-md-2">

      </div>
     </div>


    </div>



    );




}