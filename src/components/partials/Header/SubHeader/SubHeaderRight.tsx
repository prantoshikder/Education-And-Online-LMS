import { Button, Space } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const SubHeaderRight = () => {
  return (
    <div className="sub-header-right flex items-center">
      <Space size={20} className="icons-wrapper">
        <GoBell className="icon" />
        <AiOutlineHeart className="icon" />
        <PiShoppingCartSimpleLight className="icon" />
      </Space>

      <Space className="sub-header-auth-wrapper">
        <Button className="auth-btn create-btn" type="primary">
          Create Account
        </Button>
        <Button className="auth-btn sign-in-btn" type="primary">
          Sign In
        </Button>
      </Space>
    </div>
  );
};

export default SubHeaderRight;
