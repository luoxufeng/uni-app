/* 首页轮播图 */
const carouselList = [{
		src: "https://ec.yto.net.cn/api/file/file_9d9acc2c-2e9d-4a16-b7d4-1fd228eb3034",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "https://ec.yto.net.cn/api/file/file_9d9acc2c-2e9d-4a16-b7d4-1fd228eb3034",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "https://ec.yto.net.cn/api/file/file_9d9acc2c-2e9d-4a16-b7d4-1fd228eb3034",
		background: "rgb(183, 73, 69)",
	}
]

const typeList = [{
		id: 1,
		pid: 2,
		name: '预约寄件',
		picture: '/static/cate1.png'
	},
	{
		id: 2,
		pid: 17,
		name: '地址管理',
		picture: '/static/cate2.png'
	},
	{
		id: 3,
		pid: 17,
		name: '客户服务',
		picture: '/static/cate3.png'
	}]
const addressList = [
					{
						id:1,
						name: '刘晓晓',
						mobile: '18666666666',
						addressName: '贵族皇仕牛排(东城店)',
						address: '北京市东城区',
						area: 'B区',
						default: true
					},{
						id:2,
						name: '刘大大',
						mobile: '18667766666',
						addressName: '龙回1区12号楼',
						address: '山东省济南市历城区',
						area: '西单元302',
						default: false,
					}
				]

export default {
	carouselList,
	typeList,
	addressList
}
