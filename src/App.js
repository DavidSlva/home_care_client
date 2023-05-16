import 'antd/dist/reset.css';
import SliderApp from './components/SliderApp';
import LayoutAdmin from './components/layouts/LayoutAdmin';
function App() {
  return (
    <LayoutAdmin hola="buenos días Leo">
      <SliderApp />
    </LayoutAdmin>
  );
}

export default App;
