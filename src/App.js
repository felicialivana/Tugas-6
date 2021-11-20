import React, {Component} from 'react';
import "./css/bootstrap.min.css";
import Photo from "./pict/192111245.jpeg";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter, NavLink} from 'react-router-dom';



////TUGAS 6
class App extends Component{
  constructor(){
    super()
    this.state={isAuth : false}
  }

  render(){
    const LoginButton = withRouter(({history})=>(
      <button onClick={()=>{
        this.setState({isAuth : true}) 
        history.push('./profile')}}>Login</button>
    ))

    const LogoutButton = withRouter(({history})=>(
      <button onClick={()=>{
        this.setState({isAuth : false}) 
        history.push('./login')}}>Logout</button>
    ))

    const routes = [{
      path: '/',
      exact: true,
      render: ()=>(
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-12'>
              <h2 className='fw-bold mt-5 '>Selamat Datang di Website PAW 6</h2>
            </div>

            <div>Ini halaman Home</div>
          </div>
        </div>
        
      )
    },{
      path: '/login',
      render: ()=>(
        <div className='container-fluid'>
          
          <div className='row text-center mt-2'>
            <div className='col-md-12'>
              <h2 className='fw-bold mt-5'>Selamat Datang di Website PAW 6</h2>
            </div>

            <div>Ini halaman Login</div>
          </div>

          <div className='row mt-4 p-3 middle'>
            <div className='col-md-5'>
              <div className='card my-1'>
                <div className="card-body mt-3 mb-3 p-3" >
                  <h4 className='fw-bold'>Login Form</h4><hr/>
                  <form>
                    <label className='fw-bold'>Username</label>
                    <input type="text" name="username" className='form-control' placeholder="Username" /><br/>
                    <label className='fw-bold'>Password</label>
                    <input type="password" name="password" className='form-control' placeholder="Password" /><br/>
                  </form>
                  <LoginButton />
                </div>
              </div>
            </div>  
          </div>

        </div>
      ),
    },{
      path: '/profile',
      render: ()=> this.state.isAuth ? (
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='mt-3 mb-2'>Anda sedang login sebagai : Felicia Livana (192111245)</p>
            </div>
          </div>
          
          <div className='card my-1'>
            <div className='card-body'>
              <div className='row bg-primary pt-2 pb-2'>
                <div className='col-md-12'>
                  <span className='fw-bold text-light'>Profile</span>
                </div>
              </div> 

              <div className='row mt-3'>
                <div className='col-md-3'>
                  <img src={Photo} className='img-fluid border border-2' />
                </div>
              
                <div className='col-md-9 mt-4 pt-3'>
                  <table className='table table-borderless text-start'>
                    <tbody>
                      <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>Felicia Livana</td>
                      </tr>
                      <tr>
                        <td>Nim</td>
                        <td>:</td>
                        <td>192111245</td>
                      </tr>
                      <tr>
                        <td>Jenis Kelamin</td>
                        <td>:</td>
                        <td>Perempuan</td>
                      </tr>
                      <tr>
                        <td>Kelas</td>
                        <td>:</td>
                        <td>EBiz-B-Sore</td>
                      </tr>
                      <tr>
                        <td>Program Studi</td>
                        <td>:</td>
                        <td>Sistem Informasi</td>
                      </tr>
                      <tr>
                        <td>Semester</td>
                        <td>:</td>
                        <td>V</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-md-12 text-center'>
                  <LogoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      ):<Redirect to='/login' />
    }]

    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item mt-1">
                <a class="navbar-brand" href="#">PAW 6</a>
              </li>
              <li className="nav-item">
                <NavLink exact activeStyle={{fontWeight:'bold', color:'white'}} className='nav-link' to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='active-link' className='nav-link' to='/profile'>Profile</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            {
              routes.map((item, index)=>(
                <Route path={item.path} exact={item.exact} render={item.render}/>
              ))
            }
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
