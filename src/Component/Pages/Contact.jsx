import React from "react"; 

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>
                    hello 
                </h1>
                <form className="form-horizontal">
  <div className="form-group">
    <label className="col-sm-2 control-label">Email</label>
    <div className="col-sm-10">
      <p className="form-control-static">email@example.com</p>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
    </div>
  </div>
  </form>
            </div>
        </div>
    )
}
export default Contact;