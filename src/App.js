import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import TotalSell1 from './ShopSells/TotalSell1';
import Home from './Home';
import TotalExp1 from './ShopEx/ExShop1';
import TotalSell2 from './ShopSells/TotalSell2';
import TotalSell3 from './ShopSells/TotalSell3';
import TotalSell4 from './ShopSells/TotalSell4';
import TotalSell5 from './ShopSells/TotalSell5';
import TotalSell6 from './ShopSells/TotalSell6';
import TotalSell7 from './ShopSells/TotalSell7';
import TotalSell8 from './ShopSells/TotalSell8';
import TotalSell9 from './ShopSells/TotalSell9';
import TotalSell10 from './ShopSells/TotalSell10';
import TotalSell11 from './ShopSells/TotalSell11';
import TotalSell12 from './ShopSells/TotalSell12';
import TotalSell14 from './ShopSells/TotalSell14';
import TotalSell13 from './ShopSells/TotalSell13';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import TotalExp2 from './ShopEx/ExShop2';
import TotalExp3 from './ShopEx/ExShop3';
import TotalExp4 from './ShopEx/ExShop4';
import TotalExp5 from './ShopEx/ExShop5';
import TotalExp6 from './ShopEx/ExShop6';
import TotalExp7 from './ShopEx/ExShop7';
import TotalExp8 from './ShopEx/ExShop8';
import TotalExp9 from './ShopEx/ExShop9';
import TotalExp10 from './ShopEx/ExShop10';
import TotalExp11 from './ShopEx/ExShop11';
import TotalExp12 from './ShopEx/ExShop12';
import TotalExp13 from './ShopEx/ExShop13';
import TotalExp14 from './ShopEx/ExShop14';
import TotalExp15 from './ShopEx/ExShop15';
import Details from './ShopEx/Details';
import Compnay from './Dashboard/Company';
import CompnayShow from './Dashboard/CompanyShow';

function App() {
  return (
    <div>
   <Routes>

<Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
<Route path='/company' element={<RequireAuth><Compnay/></RequireAuth>}/>

   <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
   <Route index element={<CompnayShow/>}></Route>
   <Route path='/dashboard/company' element={<CompnayShow/>}/>
   <Route path='/dashboard/shop1/totalsell' element={<TotalSell1/>}/>
   <Route path='/dashboard/shop2/totalsell' element={<TotalSell2/>}/>
   <Route path='/dashboard/shop3/totalsell' element={<TotalSell3/>}/>
   <Route path='/dashboard/shop4/totalsell' element={<TotalSell4/>}/>
   <Route path='/dashboard/shop5/totalsell' element={<TotalSell5/>}/>
   <Route path='/dashboard/shop6/totalsell' element={<TotalSell6/>}/>
   <Route path='/dashboard/shop7/totalsell' element={<TotalSell7/>}/>
   <Route path='/dashboard/shop8/totalsell' element={<TotalSell8/>}/>
   <Route path='/dashboard/shop9/totalsell' element={<TotalSell9/>}/>
   <Route path='/dashboard/shop10/totalsell' element={<TotalSell10/>}/>
   <Route path='/dashboard/shop11/totalsell' element={<TotalSell11/>}/>
   <Route path='/dashboard/shop12/totalsell' element={<TotalSell12/>}/>
   <Route path='/dashboard/shop13/totalsell' element={<TotalSell13/>}/>
   <Route path='/dashboard/shop14/totalsell' element={<TotalSell4/>}/>
   <Route path='/dashboard/shop15/totalsell' element={<TotalSell5/>}/>

{/* total Expense */}
   <Route path='/dashboard/shop1/expense' element={<TotalExp1/>}/>
   <Route path='/dashboard/shop2/expense' element={<TotalExp2/>}/>
   <Route path='/dashboard/shop3/expense' element={<TotalExp3/>}/>
   <Route path='/dashboard/shop4/expense' element={<TotalExp4/>}/>
   <Route path='/dashboard/shop5/expense' element={<TotalExp5/>}/>
   <Route path='/dashboard/shop6/expense' element={<TotalExp6/>}/>
   <Route path='/dashboard/shop7/expense' element={<TotalExp7/>}/>
   <Route path='/dashboard/shop8/expense' element={<TotalExp8/>}/>
   <Route path='/dashboard/shop9/expense' element={<TotalExp9/>}/>
   <Route path='/dashboard/shop10/expense' element={<TotalExp10/>}/>
   <Route path='/dashboard/shop11/expense' element={<TotalExp11/>}/>
   <Route path='/dashboard/shop12/expense' element={<TotalExp12/>}/>
   <Route path='/dashboard/shop13/expense' element={<TotalExp13/>}/>
   <Route path='/dashboard/shop14/expense' element={<TotalExp14/>}/>
   <Route path='/dashboard/shop15/expense' element={<TotalExp15/>}/>

   <Route path="/dashboard/shop1/:id" element={<Details/>}></Route>



        </Route>
   </Routes>
    </div>
  );
}

export default App;
