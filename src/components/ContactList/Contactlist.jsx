import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactService } from '../../services/ContactService';

const Contactlist = () => {
  let{loading,contacts,errolMessage} = state
  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errolMessage: ''
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true })
      let response = await ContactService.getAllContacts();
      // console.log(response.data);
      setState({
        ...state,
        loading: false,
        contacts: response.data

      })
    } catch (error) {
      setState({
        ...state,
        loading: false,
        erroMessage: error.message
      })
    }
  }, []);

  return (
    <React.Fragment>
      <pre>{JSON.stringify(contacts)}</pre>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bolder">Contact Manager
                  <Link to={'/contacts/add'} className='btn btn-primary ms-2'><i className='fa fa-plus-circle'></i> New </Link>
                </p>
                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis cupiditate explicabo nemo tenetur, magnam tempora reprehenderit molestias expedita veritatis!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input type="text" className="form-control" placeholder='Search Names' />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb2">
                      <input type="submit" className="btn btn-outline-dark" value='Search' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="png" className='image-fluid contact-img' />

                    </div>
                    <div className="col-md-7">
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

                      </ul>
                    </div>
                    <div className="col-md-1 d-fex flex-column align-items-center">
                      <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1">
                        <i className="fa fa-pen"></i>
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="png" className='image-fluid contact-img' />

                    </div>
                    <div className="col-md-7">
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

                      </ul>
                    </div>
                    <div className="col-md-1 d-fex flex-column align-items-center">
                      <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1">
                        <i className="fa fa-pen"></i>
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contactlist