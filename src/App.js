
import { Layout,} from 'antd';
import LeftMenu from './components/LeftMenu';
import HeaderAction from './components/Header';
import ContentAction from './components/Content';
import './App.css';

function App() {
 
  return (
    <div className="App">
       <Layout>
      <LeftMenu/>
        <Layout className="site-layout">
        <HeaderAction/>
        <ContentAction/>
        </Layout>
      </Layout>
    </div>
   
  );
}

export default App;
