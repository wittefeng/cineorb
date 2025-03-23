import { getCategoryData, getDetailData } from '@/services/apiService'
import LibraryBiz from '@/components/biz/LibraryBiz/LibraryBiz'

const fetchData = async (id: number): Promise<any> => {
  // 这里可以替换为实际的请求代码，例如使用 fetch 或 axios
  // 为了示例，我们简单模拟一个异步操作
  const response = await getDetailData(id)
  return { uniqueId: id, data: response.data }
}
const Library = async () => {
  const response = await getCategoryData()
  const libraryList = response.data.library
  // console.log('libraryList', libraryList.length)
  // console.log('libraryList', libraryList)

  const fetchAllData = async () => {
    try {
      // 并行请求所有 ID 的数据
      const promises = libraryList.map((item: any) => fetchData(item.id))
      const allData = await Promise.all(promises)
      console.log('Combined data:', allData)
      return allData
      // 这里可以添加更多的逻辑，例如更新 UI、保存到本地存储等
    } catch (err) {
      console.log('Failed to fetch data', err)
    } finally {
      console.log('false', false)
    }
  }

  const dataLibrary = await fetchAllData()

  return <LibraryBiz dataLibrary={dataLibrary} />
}
export default Library
