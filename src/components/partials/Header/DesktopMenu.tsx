import type { MenuProps } from "antd";
import { Col, Menu, Row, Select, Space } from "antd";
import Image from "next/image";
import { useState } from "react";
import countryData from "../../../temp/country.json";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Course",
    key: "course",
  },
  {
    label: "About",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    key: "contact",
  },
  {
    label: "Become an Instructor",
    key: "instructor",
  },
];

const DesktopMenu = () => {
  const [current, setCurrent] = useState("home");
  const { country } = countryData;

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onSelectChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Row className="flex content-between items-center">
      <Col xs={2} sm={4} md={6} lg={8} xl={20}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="menu-items"
        />
      </Col>

      <Col xs={20} sm={16} md={12} lg={8} xl={4} className="flex content-end">
        <Space>
          <Select
            showSearch
            defaultValue="BD"
            placeholder="Select Country"
            optionFilterProp="children"
            onChange={onSelectChange}
            size="small"
            className="select-language flex items-center"
            onSearch={onSearch}
            filterOption={(input: any, option: any) =>
              (option?.key ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={country?.map((item: any) => {
              return {
                label: (
                  <Space className="flex items-center">
                    <Image
                      src={item?.flag}
                      alt={item?.name}
                      width={16}
                      height={16}
                      style={{ borderRadius: "100%" }}
                      className="flex items-center"
                    />
                    <p>{item?.code}</p>
                  </Space>
                ),
                value: `${item?.code}`,
                key: `${item?.code}`,
              };
            })}
          />

          <Select
            showSearch
            defaultValue="BD"
            placeholder="Select Country"
            optionFilterProp="children"
            onChange={onSelectChange}
            size="small"
            className="select-language flex items-center"
            onSearch={onSearch}
            filterOption={(input: any, option: any) =>
              (option?.key ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={country?.map((item: any) => {
              return {
                label: (
                  <Space className="flex items-center">
                    <Image
                      src={item?.flag}
                      alt={item?.name}
                      width={16}
                      height={16}
                      style={{ borderRadius: "100%" }}
                      className="flex items-center"
                    />
                    <p>{item?.code}</p>
                  </Space>
                ),
                value: `${item?.code}`,
                key: `${item?.code}`,
              };
            })}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default DesktopMenu;
