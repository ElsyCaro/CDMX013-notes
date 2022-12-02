/* eslint-disable react/react-in-jsx-scope */
import { loginGoogle } from '../google'
import './login.css'
export default function Login () {
  const img = require.context('../../img', true)
  const googleIn = () => {
    loginGoogle()
    console.log('it works')
  }
  return (
 <div className='login'>
        <h1> Notes Ideas</h1>
        <img
        src={img('./postit.png')}
        alt={''}
        className="oneView"
        />
  <img src={img('./buttonGoogle.png')} alt={''} className="btnGogle" onClick={() => { googleIn()}}
      ></img>
    </div>
  )
};
