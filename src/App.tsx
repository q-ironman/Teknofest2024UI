import { Col, Row } from 'antd';
import './App.css';
import ManualControlSection from './components/ManualControlSection';
import QrCodeSection from './components/QrCodeSection';
import RobotSection from './components/RobotSection';
import RobotStatesSection from './components/RobotStatesSection';
import RouteSection from './components/RouteSection';
import MapSection from './components/MapSection';
import CommandListSection from './components/CommandListSection';
import ManualControlJoystick from './components/ManualControlSectionJoystick';
import { ApplicationContextProvider } from './ApplicationContext';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <ApplicationContextProvider>
      <Row style={{ fontSize: "20px" }}>
        <Col span={6}>
          <QrCodeSection />
          <RouteSection />
          <RobotSection />
        </Col>
        <Col span={12}>
          <MapSection />
        </Col>
        <Col style={{ marginLeft: "4em" }} span={5}>
          <CommandListSection />
          {/* <ManualControlSection /> */}
          <ManualControlJoystick />
          <RobotStatesSection />
          <ControlPanel/>
        </Col>
      </Row>
    </ApplicationContextProvider>
  );
}

export default App;
