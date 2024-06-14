import React from 'react'
import { Link } from 'react-router-dom'

const Editcontacts = () => {
  return (
    <React.Fragment>
      <section className="add-contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi, ipsa consectetur omnis vitae soluta.</p>
            </div>
          </div>
          <div className="row align-item-center">
            <div className="col-md-4">
              <form action="">
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='name' />
                </div>
                <div className="mb-2">
                  <input type="url" className="form-control" placeholder='Photo Url' />
                </div>
                <div className="mb-2">
                  <input type="number" className="form-control" placeholder='mobile' />
                </div>
                <div className="mb-2">
                  <input type="email" className="form-control" placeholder='Email' />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Company' />
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Title' />
                </div>
                <div className="mb-2">
                  <select name="" className="form-control">
                    <option value="">Select a Group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input type="submit" className="btn btn-primary" value='update' />
                  <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>

                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" className='contact-img' alt="" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Editcontacts