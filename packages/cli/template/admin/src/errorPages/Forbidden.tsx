import { Result } from 'antd'
import React from 'react'

export default function Forbidden() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您没有访问此资源的权限"
    />
  )
}
