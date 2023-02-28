import { Card } from 'antd'
import React from 'react'
import View from '../components/View'
import Link from 'next/link'
import UploadFile from '../components/UploadFile'

const HomePage = () => {
  return (
    <div className="container mt-5">
      <Card>
        <h2>Test upload and show pdf using firebase</h2>
      </Card>
      <Link href="/upload">
        upload pdf file
      </Link>
      <View/>
      {/* <UploadFile/> */}
    </div>
  )
}

export default HomePage
