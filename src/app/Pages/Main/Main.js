import Add_Product from '@/app/Component/Add_Product/Add_Product'
import ViewProduct from '@/app/Component/ViewProduct/ViewProduct'
import React from 'react'

function Main() {
  return (
    <div className='container mx-auto xl:px-24 bg-slate-50'>
      <div className="flex gap-3">
        <Add_Product/>
        <ViewProduct />
      </div>
    </div>
  )
}

export default Main
