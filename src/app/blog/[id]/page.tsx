import { Card } from 'antd'
import React from 'react'
import { data } from '../../data/'
interface IParams {params: {id: string}}
export async function generateMetadata({ params }: IParams) {
    const {id} = await params
    return {
        title: `博客详情-${id}`
    }
}
export default async function Page({ params }: IParams) {
    const { id } = await params
    const item = data.find(item => item.id === Number(id))!
  return (
      <Card title={item.title} style={{ width: 300 }}>
          <p>Card co ntent: { item.title}</p>
      </Card>
  )
}
