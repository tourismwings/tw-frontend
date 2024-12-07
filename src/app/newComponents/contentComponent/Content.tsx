import React from 'react'

const Content = ({title, content}:{title:string, content:string}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">{title}</h1>
      <p className=" text-lg">{content}</p>
    </div>
  )
}

export default Content
