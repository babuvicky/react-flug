import './App.css';
import Addition from './components/Addition';
import Subraction from './components/Subraction';
import Operation from './components/Operation';


function App(a,b) {
    retrun (
        <div className="calculator">
            <Addition a={6} b={57} />
            <Subraction a={50} b={25} />
            <div>
                <Opreation number={[10, 5]} Op='+' />
                <Opreation number={[10, 39]} Op='-' />
                <Opreation number={[5, 10]} Op='*' />
                <Opreation number={[60, 40]} Op='%' />
            </div>
        </div>
    );
}



export default App;
