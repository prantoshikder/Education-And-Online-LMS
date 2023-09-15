import { Col, Row } from "antd";
import SubHeaderLeft from "./SubHeaderLeft";
import SubHeaderRight from "./SubHeaderRight";

const SubHeader = () => {
  return (
    <div className="sub-header-section">
      <div className="container mx-auto">
        <Row className="flex content-between items-center">
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <SubHeaderLeft />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className="flex content-end items-center"
          >
            <SubHeaderRight />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SubHeader;
