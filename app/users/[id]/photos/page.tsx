import React from 'react'

interface Props {
  params: {photos : string}

}
const UserDetailPage = ({params: {photos}}:Props) => {
  return (
    <div>UserDetailPage{photos}</div>
  )
}

export default UserDetailPage