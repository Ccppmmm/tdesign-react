import React, { useState } from 'react';
import { Pagination,Space } from 'tdesign-react';

export default function PaginationExample() {
  const [pageSize, changePageSize] = useState(5);

  const onChange = (pageInfo) => {
    console.log(pageInfo);
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{width: '100%'}}>
        <span>展示首尾页码省略</span>
        <Pagination total={100} pageSize={pageSize} onChange={onChange} onPageSizeChange={(v) => changePageSize(v)} />
        <span>不展示首尾页码省略</span>
        <Pagination
          total={100}
          pageSize={pageSize}
          onChange={onChange}
          pageEllipsisMode="both-ends"
          onPageSizeChange={(v) => changePageSize(v)}
          />
      </Space>
    </div>
  );
}
