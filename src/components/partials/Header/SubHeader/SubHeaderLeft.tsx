import { Input, Select, Space } from "antd";
import Image from "next/image";

const { Search } = Input;

const SubHeaderLeft = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption: any = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleSearch = (value: any) => console.log(value);

  return (
    <div className="sub-header-left flex items-center">
      <div className="logo">
        <Image
          src="/logo/lms-logo.svg"
          alt="LMS-logo"
          width={105}
          height={40}
        />
      </div>

      <Space size={16}>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          size="large"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />

        <Search
          placeholder="input search text"
          onSearch={handleSearch}
          enterButton
          size="large"
        />
      </Space>
    </div>
  );
};

export default SubHeaderLeft;
