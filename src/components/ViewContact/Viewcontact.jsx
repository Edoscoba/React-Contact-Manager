import React from 'react'
import { Link } from 'react-router-dom';

const Viewcontact = () => {
  return (
    <React.Fragment>
    <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-blod">View Contact</p>
              <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eum impedit voluptate dolor consequuntur repudiandae!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" className='contact-img' alt="" />
            </div>
            <div className="col-md-8">
            <ul className='list-group'>
                        <li className="list-group-item list-group-items-action">
                          name : <span className="fw-bold">Simon</span>
                        </li>
                        <li className="list-group-item list-group-items-action">
                          mobile : <span className="fw-bold">08108872663</span>
                        </li>
                        <li className="list-group-item list-group-items-action">
                          Email : <span className="fw-bold">Simon@gmail.com</span>
                        </li>
                        <li className="list-group-item list-group-items-action">
                          Company : <span className="fw-bold"></span>
                        </li>
                        <li className="list-group-item list-group-items-action">
                          Title : <span className="fw-bold"></span>
                        </li>
                        <li className="list-group-item list-group-items-action">
                          Group : <span className="fw-bold"></span>
                        </li>

                      </ul>

            </div>

          </div>
          <div className="row">
            <div className="col">
              <Link to={'/contacts/list'}className='btn btn-warning'>Back</Link>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>

  )
}

export default Viewcontact