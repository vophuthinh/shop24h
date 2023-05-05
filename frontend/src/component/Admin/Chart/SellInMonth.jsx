import React from 'react'

const SellInMonth = () => {
  return (
    <div style={{width:"100%", height:"500px"}}>
    <h1 style={{textAlign:"center", padding:"1vh"}}>Biểu đồ thu nhập từng ngày trong tháng</h1>
  <iframe 
  style={{width:"100%", height:"500px"}}
  src="https://charts.mongodb.com/charts-devcamp-shop24h-kwsaj/embed/charts?id=645201f9-b515-4fd9-8fda-ba9511ae8b20&maxDataAge=60&theme=light&autoRefresh=true"
  title="Sản phẩm có số lượng thấp nhất cần chú ý nhập hàng"
></iframe>
</div>
  )
}

export default SellInMonth